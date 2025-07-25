import { Question } from "@/types/quiz";

const STORAGE_KEY = "quiz_used_questions";

interface UsedQuestions {
  [domain: string]: string[];
}

const getUsedQuestions = (): UsedQuestions => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

const saveUsedQuestions = (usedQuestions: UsedQuestions) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usedQuestions));
};

export const selectRandomQuestions = (
  questions: Question[],
  domain: string,
  count: number = 10
): Question[] => {
  const usedQuestions = getUsedQuestions();
  const usedIds = usedQuestions[domain] || [];
  
  // Filter out recently used questions
  let availableQuestions = questions.filter(q => !usedIds.includes(q.id));
  
  // If we don't have enough fresh questions, reset and use all
  if (availableQuestions.length < count) {
    availableQuestions = questions;
    usedQuestions[domain] = [];
  }
  
  // Shuffle and select
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);
  
  // Update used questions
  const newUsedIds = [...(usedQuestions[domain] || []), ...selected.map(q => q.id)];
  usedQuestions[domain] = newUsedIds;
  saveUsedQuestions(usedQuestions);
  
  return selected;
};