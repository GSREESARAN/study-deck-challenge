import { QuizDomain } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface DomainCardProps {
  domain: QuizDomain;
  index: number;
}

export const DomainCard = ({ domain, index }: DomainCardProps) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz/${domain.id}`);
  };

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${domain.color} p-1 animate-slide-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-background/95 backdrop-blur-sm rounded-lg h-full p-6">
        <CardHeader className="text-center pb-4">
          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {domain.icon}
          </div>
          <CardTitle className="text-xl font-bold">{domain.title}</CardTitle>
          <CardDescription className="text-sm">
            {domain.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              {domain.questions.length} Questions
            </div>
            <Button 
              variant="quiz"
              className="w-full"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};