import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import confetti from "confetti";
import { QuestionCard } from "@/components/QuestionCard";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { quizDomains } from "@/data/quizData";
import { QuizState } from "@/types/quiz";
import { useToast } from "@/hooks/use-toast";
import { selectRandomQuestions } from "@/utils/questionSelector";

export const Quiz = () => {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const domain = quizDomains.find(d => d.id === domainId);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    timeLeft: 30,
    isQuizComplete: false,
    selectedAnswer: null,
    showExplanation: false,
    isAnswerChecked: false,
    selectedQuestions: []
  });

  useEffect(() => {
    if (!domain) {
      navigate('/');
      return;
    }
    
    // Initialize with random questions
    const selectedQuestions = selectRandomQuestions(domain.questions, domain.id, 10);
    setQuizState(prev => ({
      ...prev,
      selectedQuestions
    }));
  }, [domain, navigate]);

  if (!domain || quizState.selectedQuestions.length === 0) return null;

  const currentQuestion = quizState.selectedQuestions[quizState.currentQuestion];
  const isLastQuestion = quizState.currentQuestion === quizState.selectedQuestions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.selectedAnswer !== null) return;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex
    }));
  };

  const handleCheckAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      showExplanation: true,
      isAnswerChecked: true
    }));

    if (isCorrect) {
      // Trigger celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Auto-advance after 5 seconds for correct answers
      setTimeout(() => {
        handleNextQuestion();
      }, 5000);
    }
  };

  const handleTimeUp = () => {
    if (quizState.selectedAnswer === null && !quizState.isAnswerChecked) {
      toast({
        title: "Time's up!",
        description: "Moving to next question...",
        variant: "destructive"
      });
      handleNextQuestion(-1); // -1 indicates no answer selected
    }
  };

  const handleNextQuestion = (answerIndex: number = quizState.selectedAnswer!) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newAnswers = [...quizState.answers, answerIndex];
    const newScore = quizState.score + (isCorrect ? 1 : 0);

    if (isLastQuestion) {
      // Quiz complete
      navigate('/result', {
        state: {
          score: newScore,
          totalQuestions: quizState.selectedQuestions.length,
          answers: newAnswers,
          domain: domain.title
        }
      });
    } else {
      // Next question
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
        score: newScore,
        timeLeft: 30,
        selectedAnswer: null,
        showExplanation: false,
        isAnswerChecked: false
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{domain.title} Quiz</h1>
        <div className="flex justify-center items-center gap-4 text-muted-foreground">
          <span>Score: {quizState.score}/{quizState.selectedQuestions.length}</span>
          <span>•</span>
          <span>Question {quizState.currentQuestion + 1} of {quizState.selectedQuestions.length}</span>
        </div>
        </div>

        {/* Timer */}
        <div className="mb-8 max-w-xs mx-auto">
          <Timer
            initialTime={30}
            onTimeUp={handleTimeUp}
            isActive={!quizState.isAnswerChecked}
            key={quizState.currentQuestion}
          />
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={quizState.selectedAnswer}
          showResult={quizState.showExplanation}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={quizState.currentQuestion + 1}
          totalQuestions={quizState.selectedQuestions.length}
        />

        {/* Check Answer / Navigation */}
        <div className="text-center mt-8">
          {!quizState.isAnswerChecked && quizState.selectedAnswer !== null && (
            <Button
              onClick={handleCheckAnswer}
              variant="default"
              size="lg"
              className="animate-pulse"
            >
              Check Answer
            </Button>
          )}
          
          {quizState.showExplanation && (
            <Button
              onClick={() => handleNextQuestion()}
              variant="default"
              size="lg"
              className="ml-4"
            >
              {isLastQuestion ? "View Results" : "Next Question"}
            </Button>
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};