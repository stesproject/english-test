export interface QuizQuestion {
  id: string;
  simulation: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserAnswerRecord {
  question: QuizQuestion;
  selectedIndex: number;
  isCorrect: boolean;
}

export type QuizMode = 'all_random' | 'quick_15' | 'exam_30' | 'simulation' | 'retry_mistakes';

export interface QuizState {
  screen: 'home' | 'quiz' | 'results';
  mode: QuizMode;
  selectedSimulation?: string;
  questions: QuizQuestion[];
  currentIndex: number;
  answers: UserAnswerRecord[];
  // Interaction state for current question:
  selectedOption: number | null;
  hasAnswered: boolean;
  isCorrect: boolean | null;
  soundEnabled: boolean;
  elapsedSeconds: number;
}
