import React from 'react';
import { Volume2, VolumeX, StopCircle, GraduationCap, Clock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { QuizState } from '../types';

interface HeaderProps {
  state: QuizState;
  onAbortQuiz: () => void;
  onToggleSound: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  state,
  onAbortQuiz,
  onToggleSound,
  onGoHome,
}) => {
  const { t } = useTranslation();
  const isInQuiz = state.screen === 'quiz';
  const totalInSession = state.questions.length;
  const currentNum = state.currentIndex + 1;
  const attemptedCount = state.answers.length;
  const correctCount = state.answers.filter(a => a.isCorrect).length;
  const wrongCount = state.answers.filter(a => !a.isCorrect).length;
  const progressPercent = totalInSession > 0 ? (state.currentIndex / totalInSession) * 100 : 0;

  // Timer logic: 1 minute (60s) per question
  const totalAllowedSeconds = totalInSession * 60;
  const elapsedSeconds = state.elapsedSeconds;
  const warningThresholdSeconds = Math.max(0, totalAllowedSeconds - 300); // 5 minutes before limit

  const isRed = elapsedSeconds >= totalAllowedSeconds && totalAllowedSeconds > 0;
  const isYellow = !isRed && elapsedSeconds >= warningThresholdSeconds && totalAllowedSeconds > 0;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  let timerClasses = "bg-slate-100 text-slate-700 border-slate-200";
  let clockIconClass = "text-slate-500";
  let timerTitle = t('header.timerTitleNormal', { total: totalInSession });

  if (isRed) {
    timerClasses = "bg-rose-100 text-rose-700 border-rose-300 font-bold animate-pulse shadow-xs";
    clockIconClass = "text-rose-600";
    timerTitle = t('header.timerTitleRed');
  } else if (isYellow) {
    timerClasses = "bg-amber-100 text-amber-800 border-amber-300 font-bold shadow-xs";
    clockIconClass = "text-amber-600";
    timerTitle = t('header.timerTitleYellow');
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 text-left group transition-all"
          title={t('header.backHomeTooltip')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
              {t('header.title')}
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              {t('header.subtitle')}
            </p>
          </div>
        </button>

        {/* Center: Quiz stats & Timer if active */}
        {isInQuiz && (
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Real-time Color Coded Timer */}
            <div
              className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border text-xs sm:text-sm font-mono transition-all ${timerClasses}`}
              title={timerTitle}
            >
              <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${clockIconClass}`} />
              <span className="font-bold">{formatTime(elapsedSeconds)}</span>
              <span className="text-[10px] sm:text-xs opacity-75 font-sans hidden sm:inline">
                / {totalInSession}m
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                ✓ {correctCount}
              </span>
              <span className="px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200/60">
                ✗ {wrongCount}
              </span>
            </div>
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs font-medium text-slate-500">
                <Trans
                  i18nKey="header.questionCounter"
                  values={{ current: currentNum, total: totalInSession }}
                  components={{ 1: <strong className="text-slate-900" /> }}
                />
              </span>
              <span className="text-[11px] text-slate-400">
                {t('header.attemptedCounter', { count: attemptedCount })}
              </span>
            </div>
          </div>
        )}

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
            aria-label={state.soundEnabled ? t('header.soundMuted') : t('header.soundActive')}
            title={state.soundEnabled ? t('header.soundActive') : t('header.soundMuted')}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            {state.soundEnabled ? (
              <Volume2 className="w-5 h-5 text-indigo-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {/* Abort / Finish Test button (Always visible during quiz) */}
          {isInQuiz && (
            <button
              onClick={onAbortQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg shadow-sm transition-colors cursor-pointer"
              title={t('header.finishTestTooltip')}
            >
              <StopCircle className="w-4 h-4 text-rose-600" />
              <span>{t('header.finishTest')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress bar line during quiz */}
      {isInQuiz && (
        <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
};
