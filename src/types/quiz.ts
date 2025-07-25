export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  domain: string;
}

export interface QuizDomain {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
  timeLeft: number;
  isQuizComplete: boolean;
  selectedAnswer: number | null;
  showExplanation: boolean;
  isAnswerChecked: boolean;
  selectedQuestions: Question[];
}