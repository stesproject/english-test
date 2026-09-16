import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizCardProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  hasAnswered: boolean;
  isCorrect: boolean | null;
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  hasAnswered,
  isCorrect,
  onSelectOption,
  onNextQuestion,
}) => {
  const letters = ['a', 'b', 'c', 'd'];

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If answered incorrectly, Enter advances to next
      if (hasAnswered && isCorrect === false && e.key === 'Enter') {
        e.preventDefault();
        onNextQuestion();
        return;
      }

      // If not yet answered, keys 1-4 or a-d select options
      if (!hasAnswered) {
        const key = e.key.toLowerCase();
        let targetIdx = -1;
        if (key === '1' || key === 'a') targetIdx = 0;
        else if (key === '2' || key === 'b') targetIdx = 1;
        else if (key === '3' || key === 'c') targetIdx = 2;
        else if (key === '4' || key === 'd') targetIdx = 3;

        if (targetIdx >= 0 && targetIdx < question.options.length) {
          e.preventDefault();
          onSelectOption(targetIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, isCorrect, question.options.length, onSelectOption, onNextQuestion]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
      {/* Simulation / Category Pill Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            {question.simulation}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
            {question.category}
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          Quesito {questionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 transition-all">
        {/* Question Text */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight mb-6">
          {question.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isThisSelected = selectedOption === idx;
            const isThisCorrect = idx === question.correctIndex;

            let buttonStyle = "border-slate-200 hover:border-indigo-400 hover:bg-slate-50/70 text-slate-800 bg-white";
            let letterBadgeStyle = "bg-slate-100 text-slate-700 border-slate-200";

            if (hasAnswered) {
              if (isThisCorrect) {
                // Correct option is always green once answered
                buttonStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20";
                letterBadgeStyle = "bg-emerald-600 text-white border-emerald-600";
              } else if (isThisSelected && !isThisCorrect) {
                // Selected option that was wrong is red
                buttonStyle = "border-rose-500 bg-rose-50/80 text-rose-900 ring-2 ring-rose-500/20";
                letterBadgeStyle = "bg-rose-600 text-white border-rose-600";
              } else {
                // Other options faded
                buttonStyle = "border-slate-200 bg-slate-50/40 text-slate-400 opacity-60";
                letterBadgeStyle = "bg-slate-100 text-slate-400 border-slate-200";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={hasAnswered}
                onClick={() => onSelectOption(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 group font-medium text-sm sm:text-base ${buttonStyle} ${
                  !hasAnswered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase border transition-colors shrink-0 ${letterBadgeStyle}`}
                  >
                    {letters[idx] || (idx + 1)}
                  </span>
                  <span className="leading-relaxed">
                    {option}
                  </span>
                </div>

                {/* Status indicator icons */}
                {hasAnswered && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-in zoom-in" />
                )}
                {hasAnswered && isThisSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 animate-in zoom-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Section if INCORRECT: Explanation + "Continua" Button */}
        {hasAnswered && isCorrect === false && (
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Error & Correct Answer Header */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 text-rose-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Risposta errata
                </p>
                <p className="text-sm mt-0.5">
                  La risposta corretta è: <strong className="font-bold underline text-emerald-800">{question.options[question.correctIndex]}</strong>
                </p>
              </div>
            </div>

            {/* Explanation box */}
            {question.explanation && (
              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-slate-800 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    Spiegazione della regola:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Continua Button */}
            <button
              type="button"
              onClick={onNextQuestion}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-bold text-base bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-md shadow-indigo-100 hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
            >
              <span>Continua alla domanda successiva</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[11px] text-slate-400">
              (oppure premi Invio sulla tastiera per continuare)
            </p>
          </div>
        )}

        {/* Feedback Section if CORRECT: Quick Transition Indicator */}
        {hasAnswered && isCorrect === true && (
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-emerald-700 text-sm font-semibold animate-in fade-in duration-150">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Risposta esatta! Avanzamento in corso...</span>
          </div>
        )}
      </div>

      {/* Keyboard hints footer */}
      <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400">
        <span>Scorciatoie: tasti 1-3 (o A-C) per scegliere</span>
      </div>
    </div>
  );
};
