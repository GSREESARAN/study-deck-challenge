import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuestionCard } from "@/components/QuestionCard";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { quizDomains } from "@/data/quizData";
import { QuizState } from "@/types/quiz";
import { useToast } from "@/hooks/use-toast";

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
    showExplanation: false
  });

  useEffect(() => {
    if (!domain) {
      navigate('/');
      return;
    }
  }, [domain, navigate]);

  if (!domain) return null;

  const currentQuestion = domain.questions[quizState.currentQuestion];
  const isLastQuestion = quizState.currentQuestion === domain.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.selectedAnswer !== null) return;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showExplanation: true
    }));

    // Auto-advance after showing result
    setTimeout(() => {
      handleNextQuestion(answerIndex);
    }, answerIndex === currentQuestion.correctAnswer ? 1500 : 3000);
  };

  const handleTimeUp = () => {
    if (quizState.selectedAnswer === null) {
      toast({
        title: "Time's up!",
        description: "Moving to next question...",
        variant: "destructive"
      });
      handleNextQuestion(-1); // -1 indicates no answer selected
    }
  };

  const handleNextQuestion = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newAnswers = [...quizState.answers, answerIndex];
    const newScore = quizState.score + (isCorrect ? 1 : 0);

    if (isLastQuestion) {
      // Quiz complete
      navigate('/result', {
        state: {
          score: newScore,
          totalQuestions: domain.questions.length,
          answers: newAnswers,
          domain: domain.title
        }
      });
    } else {
      // Next question
      setQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers,
        score: newScore,
        timeLeft: 30,
        isQuizComplete: false,
        selectedAnswer: null,
        showExplanation: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{domain.title} Quiz</h1>
          <div className="flex justify-center items-center gap-4 text-muted-foreground">
            <span>Score: {quizState.score}/{domain.questions.length}</span>
            <span>•</span>
            <span>Question {quizState.currentQuestion + 1} of {domain.questions.length}</span>
          </div>
        </div>

        {/* Timer */}
        <div className="mb-8 max-w-xs mx-auto">
          <Timer
            initialTime={30}
            onTimeUp={handleTimeUp}
            isActive={quizState.selectedAnswer === null}
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
          totalQuestions={domain.questions.length}
        />

        {/* Navigation */}
        {quizState.showExplanation && (
          <div className="text-center mt-8">
            <Button
              onClick={() => handleNextQuestion(quizState.selectedAnswer!)}
              variant="default"
              size="lg"
            >
              {isLastQuestion ? "View Results" : "Next Question"}
            </Button>
          </div>
        )}

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