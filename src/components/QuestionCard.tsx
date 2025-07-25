import { Question } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  const getOptionVariant = (index: number) => {
    if (!showResult) return "option";
    if (index === question.correctAnswer) return "success";
    if (index === selectedAnswer && index !== question.correctAnswer) return "danger";
    return "option";
  };

  const getOptionClasses = (index: number) => {
    if (!showResult) return "";
    if (index === question.correctAnswer) return "bg-success hover:bg-success border-success";
    if (index === selectedAnswer && index !== question.correctAnswer) return "bg-destructive hover:bg-destructive border-destructive";
    return "opacity-50";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-quiz-card border-quiz-card-border animate-flip-in">
      <CardHeader className="text-center">
        <div className="text-sm text-muted-foreground mb-2">
          Question {questionNumber} of {totalQuestions}
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={getOptionVariant(index)}
            className={cn(
              "w-full h-auto p-4 text-left justify-start whitespace-normal",
              getOptionClasses(index),
              selectedAnswer === index && !showResult && "ring-2 ring-primary"
            )}
            onClick={() => !showResult && onAnswerSelect(index)}
            disabled={showResult}
          >
            <span className="font-medium mr-3">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </Button>
        ))}
        
        {showResult && selectedAnswer !== question.correctAnswer && question.explanation && (
          <div className="mt-6 p-4 bg-muted rounded-lg border border-muted-foreground/20">
            <h4 className="font-medium text-sm mb-2 text-warning">Explanation:</h4>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};