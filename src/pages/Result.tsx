import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

interface ResultState {
  score: number;
  totalQuestions: number;
  answers: number[];
  domain: string;
}

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultState;

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state) return null;

  const { score, totalQuestions, domain } = state;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 80) return { message: "Excellent! 🎉", color: "text-success" };
    if (percentage >= 60) return { message: "Good Job! 👍", color: "text-primary" };
    if (percentage >= 40) return { message: "Keep Practicing! 📚", color: "text-warning" };
    return { message: "Need More Study! 💪", color: "text-destructive" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto text-center animate-slide-up">
        <CardHeader>
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎯" : percentage >= 40 ? "📈" : "📖"}
          </div>
          <CardTitle className="text-2xl mb-2">Quiz Complete!</CardTitle>
          <div className="text-lg text-muted-foreground">{domain}</div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Score Display */}
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              {score}<span className="text-2xl text-muted-foreground">/{totalQuestions}</span>
            </div>
            <div className="text-xl font-semibold">
              {percentage}%
            </div>
            <div className={`text-lg font-medium ${performance.color}`}>
              {performance.message}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-success/10 p-3 rounded-lg">
              <div className="text-success font-semibold">Correct</div>
              <div className="text-xl font-bold">{score}</div>
            </div>
            <div className="bg-destructive/10 p-3 rounded-lg">
              <div className="text-destructive font-semibold">Incorrect</div>
              <div className="text-xl font-bold">{totalQuestions - score}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate('/')}
              variant="quiz"
              className="w-full"
            >
              Try Another Quiz
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="w-full"
            >
              Retake Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};