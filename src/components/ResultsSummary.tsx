import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Zap,
  Clock
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UserAnswerRecord } from '../types';

interface ResultsSummaryProps {
  answers: UserAnswerRecord[];
  totalAvailable: number;
  elapsedSeconds: number;
  onRetryMistakes: () => void;
  onRestartNewTest: () => void;
  onGoHome: () => void;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  answers,
  totalAvailable,
  elapsedSeconds,
  onRetryMistakes,
  onRestartNewTest,
  onGoHome,
}) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'mistakes' | 'correct'>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const attemptedCount = answers.length;
  const correctCount = answers.filter(a => a.isCorrect).length;
  const wrongCount = attemptedCount - correctCount;
  const percentage = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  // Trigger confetti if high score
  useEffect(() => {
    if (attemptedCount >= 5 && percentage >= 75) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  }, [attemptedCount, percentage]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAnswers = answers.filter(record => {
    if (filter === 'mistakes') return !record.isCorrect;
    if (filter === 'correct') return record.isCorrect;
    return true;
  });

  // Performance rating badge
  const getRating = () => {
    if (attemptedCount === 0) return { title: t('resultsSummary.ratings.none'), color: "text-slate-600 bg-slate-100 border-slate-200" };
    if (percentage >= 90) return { title: t('resultsSummary.ratings.excellent'), color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (percentage >= 75) return { title: t('resultsSummary.ratings.veryGood'), color: "text-blue-700 bg-blue-50 border-blue-200" };
    if (percentage >= 60) return { title: t('resultsSummary.ratings.pass'), color: "text-amber-700 bg-amber-50 border-amber-200" };
    return { title: t('resultsSummary.ratings.needsWork'), color: "text-rose-700 bg-rose-50 border-rose-200" };
  };

  const rating = getRating();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Results Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 mb-8 text-center relative overflow-hidden">
        {/* Background glow accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-100/50 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-indigo-100">
            <Trophy className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('resultsSummary.title')}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {t('resultsSummary.subtitle')}
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold shadow-2xs">
            <span className={rating.color}>{rating.title}</span>
          </div>

          {/* Big Score Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8 max-w-xl mx-auto">
            {/* Percent */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 block">
                {percentage}%
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase text-slate-500 tracking-wider">
                {t('resultsSummary.metrics.accuracy')}
              </span>
            </div>

            {/* Correct */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">
                {correctCount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase text-emerald-700 tracking-wider">
                {t('resultsSummary.metrics.correct')}
              </span>
            </div>

            {/* Wrong */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70">
              <span className="text-2xl sm:text-3xl font-black text-rose-600 block">
                {wrongCount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase text-rose-700 tracking-wider">
                {t('resultsSummary.metrics.wrong')}
              </span>
            </div>

            {/* Sostenute */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl sm:text-3xl font-black text-slate-800 block">
                {attemptedCount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase text-slate-500 tracking-wider">
                {t('resultsSummary.metrics.attempted')}
              </span>
            </div>
          </div>

          {/* Time Statistics Banner */}
          <div className="my-6 max-w-xl mx-auto p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-around gap-2 sm:gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>
                {t('resultsSummary.time.spentLabel')}{' '}
                <strong>
                  {t('resultsSummary.time.spentValue', {
                    minutes: Math.floor(elapsedSeconds / 60),
                    seconds: elapsedSeconds % 60,
                  })}
                </strong>
              </span>
            </div>
            {attemptedCount > 0 && (
              <div className="text-slate-600 sm:border-l sm:border-slate-200 sm:pl-4">
                {t('resultsSummary.time.averageLabel')}{' '}
                <strong>
                  {t('resultsSummary.time.averageValue', {
                    avg: Math.round(elapsedSeconds / attemptedCount),
                  })}
                </strong>
                <span className="text-[11px] text-slate-400 ml-1">
                  {t('resultsSummary.time.targetLabel')}
                </span>
              </div>
            )}
          </div>

          {/* Quick Notice about Total Pool */}
          {attemptedCount < totalAvailable && (
            <p className="text-xs text-slate-400 mb-6">
              {t('resultsSummary.poolNotice', {
                attempted: attemptedCount,
                total: totalAvailable,
              })}
            </p>
          )}

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {wrongCount > 0 && (
              <button
                type="button"
                onClick={onRetryMistakes}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>{t('resultsSummary.actions.retryMistakes', { count: wrongCount })}</span>
              </button>
            )}

            <button
              type="button"
              onClick={onRestartNewTest}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-100 hover:shadow-lg transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('resultsSummary.actions.newTest')}</span>
            </button>

            <button
              type="button"
              onClick={onGoHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-sm font-bold transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>{t('resultsSummary.actions.goHome')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Answers Detailed Breakdown Section */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('resultsSummary.breakdown.title')}
            </h3>
            <p className="text-xs text-slate-500">
              {t('resultsSummary.breakdown.subtitle')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('resultsSummary.breakdown.filterAll', { count: answers.length })}
            </button>
            <button
              type="button"
              onClick={() => setFilter('mistakes')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'mistakes'
                  ? 'bg-white text-rose-700 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('resultsSummary.breakdown.filterMistakes', { count: wrongCount })}
            </button>
            <button
              type="button"
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'correct'
                  ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('resultsSummary.breakdown.filterCorrect', { count: correctCount })}
            </button>
          </div>
        </div>

        {/* List of Questions */}
        {filteredAnswers.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            {t('resultsSummary.breakdown.noResults')}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredAnswers.map((record, index) => {
              const q = record.question;
              const isExpanded = !!expandedIds[q.id];
              const letters = ['a', 'b', 'c', 'd'];

              return (
                <div
                  key={q.id + index}
                  className={`border rounded-xl transition-all ${
                    record.isCorrect
                      ? 'border-slate-200/80 hover:border-emerald-300 bg-white'
                      : 'border-rose-200/90 hover:border-rose-300 bg-rose-50/20'
                  }`}
                >
                  {/* Summary Bar */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(q.id)}
                    className="w-full text-left p-4 flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {record.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[11px] font-semibold text-slate-400">
                            #{index + 1}
                          </span>
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            {q.simulation}
                          </span>
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                            {q.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {q.question}
                        </h4>
                        <div className="mt-1.5 text-xs flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span className={record.isCorrect ? "text-emerald-700 font-medium" : "text-rose-700 font-medium"}>
                            {t('resultsSummary.breakdown.yourAnswer')} <strong>{q.options[record.selectedIndex]}</strong>
                          </span>
                          {!record.isCorrect && (
                            <span className="text-emerald-700 font-medium">
                              {t('resultsSummary.breakdown.correctAnswer')} <strong>{q.options[q.correctIndex]}</strong>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-slate-400 hover:text-slate-600 p-1">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Explanation Drawer */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs space-y-2.5">
                      <div className="p-3 rounded-lg bg-indigo-50/70 border border-indigo-100 text-slate-800">
                        <p className="font-bold text-indigo-900 flex items-center gap-1.5 mb-1">
                          <HelpCircle className="w-4 h-4 text-indigo-600" />
                          {t('resultsSummary.breakdown.explanationTitle')}
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>

                      {/* All Options list */}
                      <div className="space-y-1 pt-1">
                        <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                          {t('resultsSummary.breakdown.allOptions')}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isCorrectOpt = optIdx === q.correctIndex;
                            const isUserSelected = optIdx === record.selectedIndex;
                            return (
                              <div
                                key={optIdx}
                                className={`px-2.5 py-1.5 rounded-md border text-xs flex items-center gap-1.5 ${
                                  isCorrectOpt
                                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold'
                                    : isUserSelected
                                    ? 'bg-rose-50 text-rose-900 border-rose-300'
                                    : 'bg-slate-50 text-slate-500 border-slate-200'
                                }`}
                              >
                                <span className="font-bold uppercase text-[10px]">
                                  {letters[optIdx] || optIdx}:
                                </span>
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
