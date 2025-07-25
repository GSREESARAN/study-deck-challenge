import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export const Timer = ({ initialTime, onTimeUp, isActive }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  const percentage = (timeLeft / initialTime) * 100;
  const isLow = percentage < 30;
  const isCritical = percentage < 10;

  return (
    <Card className={cn(
      "p-4 text-center transition-all duration-300",
      isCritical && "animate-pulse-glow border-destructive",
      isLow && !isCritical && "border-warning"
    )}>
      <div className="text-2xl font-bold mb-2">
        <span className={cn(
          isCritical && "text-destructive",
          isLow && !isCritical && "text-warning"
        )}>
          {timeLeft}s
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={cn(
            "h-2 rounded-full transition-all duration-1000",
            isCritical ? "bg-destructive" : isLow ? "bg-warning" : "bg-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </Card>
  );
};