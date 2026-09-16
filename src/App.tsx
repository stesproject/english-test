import React, { useState, useEffect, useRef } from 'react';
import { Trans } from 'react-i18next';
import { QuizState, QuizMode, QuizQuestion, UserAnswerRecord } from './types';
import { ALL_QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuizCard } from './components/QuizCard';
import { ResultsSummary } from './components/ResultsSummary';
import { soundFx } from './utils/audio';

// Fisher-Yates shuffle utility
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const LOCAL_STORAGE_MISTAKES_KEY = 'english_quiz_saved_mistakes_v1';

export const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    screen: 'home',
    mode: 'all_random',
    questions: [],
    currentIndex: 0,
    answers: [],
    selectedOption: null,
    hasAnswered: false,
    isCorrect: null,
    soundEnabled: true,
    elapsedSeconds: 0,
  });

  const [savedMistakes, setSavedMistakes] = useState<QuizQuestion[]>([]);
  const advanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer interval active only during quiz
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (quizState.screen === 'quiz') {
      interval = setInterval(() => {
        setQuizState(prev => ({
          ...prev,
          elapsedSeconds: prev.elapsedSeconds + 1,
        }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [quizState.screen]);

  // Load saved mistakes from localStorage on initial render
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_MISTAKES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedMistakes(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Save mistakes to localStorage when updated
  const saveMistakesToStorage = (newMistakes: QuizQuestion[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_MISTAKES_KEY, JSON.stringify(newMistakes));
      setSavedMistakes(newMistakes);
    } catch {
      // ignore
    }
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) {
        clearTimeout(advanceTimerRef.current);
      }
    };
  }, []);

  // Start a new test
  const handleStartQuiz = (mode: QuizMode, selectedSimulation?: string) => {
    let pool: QuizQuestion[] = [];

    if (mode === 'simulation' && selectedSimulation) {
      pool = ALL_QUESTIONS.filter(q => q.simulation === selectedSimulation);
    } else if (mode === 'retry_mistakes') {
      pool = savedMistakes.length > 0 ? savedMistakes : ALL_QUESTIONS;
    } else {
      pool = ALL_QUESTIONS;
    }

    // Always shuffle the pool for random presentation
    let shuffled = shuffleArray(pool);

    if (mode === 'quick_15') {
      shuffled = shuffled.slice(0, 15);
    } else if (mode === 'exam_30') {
      shuffled = shuffled.slice(0, 30);
    }

    setQuizState(prev => ({
      ...prev,
      screen: 'quiz',
      mode,
      selectedSimulation,
      questions: shuffled,
      currentIndex: 0,
      answers: [],
      selectedOption: null,
      hasAnswered: false,
      isCorrect: null,
      elapsedSeconds: 0,
    }));
  };

  // User selects an option
  const handleSelectOption = (optionIndex: number) => {
    if (quizState.hasAnswered) return;

    const currentQ = quizState.questions[quizState.currentIndex];
    const isAnsCorrect = optionIndex === currentQ.correctIndex;

    const newAnswer: UserAnswerRecord = {
      question: currentQ,
      selectedIndex: optionIndex,
      isCorrect: isAnsCorrect,
    };

    const nextAnswers = [...quizState.answers, newAnswer];

    setQuizState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      hasAnswered: true,
      isCorrect: isAnsCorrect,
      answers: nextAnswers,
    }));

    if (isAnsCorrect) {
      if (quizState.soundEnabled) soundFx.playCorrect();

      // If this question was previously in savedMistakes, remove it since user got it right!
      if (savedMistakes.some(m => m.id === currentQ.id)) {
        saveMistakesToStorage(savedMistakes.filter(m => m.id !== currentQ.id));
      }

      // If correct: auto-advance after brief delay (550ms)
      advanceTimerRef.current = setTimeout(() => {
        advanceNextQuestion(nextAnswers);
      }, 550);
    } else {
      if (quizState.soundEnabled) soundFx.playIncorrect();

      // Record mistake in persistent saved mistakes
      if (!savedMistakes.some(m => m.id === currentQ.id)) {
        saveMistakesToStorage([...savedMistakes, currentQ]);
      }
      // Do NOT auto-advance: wait for user to read explanation and click "Continua"
    }
  };

  // Move to next question or show results if quiz completed
  const advanceNextQuestion = (currentAnswersList = quizState.answers) => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }

    const nextIdx = quizState.currentIndex + 1;

    if (nextIdx < quizState.questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentIndex: nextIdx,
        selectedOption: null,
        hasAnswered: false,
        isCorrect: null,
      }));
    } else {
      // Quiz finished completely!
      if (quizState.soundEnabled) soundFx.playFinished();

      // If completed a mistakes review session, remove any questions that were answered correctly
      if (quizState.mode === 'retry_mistakes') {
        const stillWrongIds = new Set(currentAnswersList.filter(a => !a.isCorrect).map(a => a.question.id));
        saveMistakesToStorage(savedMistakes.filter(m => stillWrongIds.has(m.id)));
      }

      setQuizState(prev => ({
        ...prev,
        screen: 'results',
        answers: currentAnswersList,
        selectedOption: null,
        hasAnswered: false,
        isCorrect: null,
      }));
    }
  };

  // Early exit: "Termina test" button
  const handleAbortQuiz = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }

    if (quizState.soundEnabled) soundFx.playFinished();

    // If aborting while reviewing mistakes, remove questions that were answered correctly so far
    if (quizState.mode === 'retry_mistakes') {
      const correctlyAnsweredIds = new Set(quizState.answers.filter(a => a.isCorrect).map(a => a.question.id));
      if (correctlyAnsweredIds.size > 0) {
        saveMistakesToStorage(savedMistakes.filter(m => !correctlyAnsweredIds.has(m.id)));
      }
    }

    setQuizState(prev => ({
      ...prev,
      screen: 'results',
      selectedOption: null,
      hasAnswered: false,
      isCorrect: null,
    }));
  };

  // Retry only mistakes made during current session
  const handleRetryMistakes = () => {
    const mistakesQuestions = quizState.answers
      .filter(a => !a.isCorrect)
      .map(a => a.question);

    if (mistakesQuestions.length === 0) return;

    setQuizState(prev => ({
      ...prev,
      screen: 'quiz',
      mode: 'retry_mistakes',
      questions: shuffleArray(mistakesQuestions),
      currentIndex: 0,
      answers: [],
      selectedOption: null,
      hasAnswered: false,
      isCorrect: null,
      elapsedSeconds: 0,
    }));
  };

  // Start a fresh random test
  const handleRestartNewTest = () => {
    handleStartQuiz('all_random');
  };

  const handleGoHome = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
    setQuizState(prev => ({
      ...prev,
      screen: 'home',
      selectedOption: null,
      hasAnswered: false,
      isCorrect: null,
      elapsedSeconds: 0,
    }));
  };

  const handleDismissMistakes = () => {
    saveMistakesToStorage([]);
  };

  const toggleSound = () => {
    setQuizState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Header with status, sound, and early finish button */}
      <Header
        state={quizState}
        onAbortQuiz={handleAbortQuiz}
        onToggleSound={toggleSound}
        onGoHome={handleGoHome}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {quizState.screen === 'home' && (
          <StartScreen
            onStart={handleStartQuiz}
            savedMistakesCount={savedMistakes.length}
            onStartMistakesReview={() => handleStartQuiz('retry_mistakes')}
            onDismissMistakes={handleDismissMistakes}
          />
        )}

        {quizState.screen === 'quiz' && quizState.questions.length > 0 && (
          <QuizCard
            question={quizState.questions[quizState.currentIndex]}
            questionIndex={quizState.currentIndex}
            totalQuestions={quizState.questions.length}
            selectedOption={quizState.selectedOption}
            hasAnswered={quizState.hasAnswered}
            isCorrect={quizState.isCorrect}
            onSelectOption={handleSelectOption}
            onNextQuestion={() => advanceNextQuestion()}
          />
        )}

        {quizState.screen === 'results' && (
          <ResultsSummary
            answers={quizState.answers}
            totalAvailable={quizState.questions.length}
            elapsedSeconds={quizState.elapsedSeconds}
            onRetryMistakes={handleRetryMistakes}
            onRestartNewTest={handleRestartNewTest}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/70 py-4 text-center text-xs text-slate-500">
        <p>
          {/* {t('footer.text', { count: ALL_QUESTIONS.length })} */}
          <Trans
            i18nKey="footer.text"
            values={{ count: ALL_QUESTIONS.length }}
            components={{ 1: <a href="https://alchemy-pot.web.app/" target="_blank" /> }}
          />
        </p>
      </footer>
    </div>
  );
};
export default App;
