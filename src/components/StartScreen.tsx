import React, { useState } from 'react';
import { Play, Sparkles, Shuffle, BookOpen, Flame, History, CheckCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { QuizMode } from '../types';
import { ALL_QUESTIONS, SIMULATION_GROUPS } from '../data/questions';

interface StartScreenProps {
  onStart: (mode: QuizMode, selectedSimulation?: string) => void;
  savedMistakesCount: number;
  onStartMistakesReview: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  savedMistakesCount,
  onStartMistakesReview,
}) => {
  const { t } = useTranslation();
  const [selectedMode, setSelectedMode] = useState<QuizMode>('all_random');
  const [selectedSim, setSelectedSim] = useState<string>(SIMULATION_GROUPS[0]);

  const handleStart = () => {
    onStart(selectedMode, selectedMode === 'simulation' ? selectedSim : undefined);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          {t('startScreen.heroBadge')}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t('startScreen.heroTitle')}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          {t('startScreen.heroSubtitle')}
        </p>

        {/* Stats strip */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span>
              <Trans
                i18nKey="startScreen.statsLoaded"
                values={{ count: ALL_QUESTIONS.length }}
                components={{ 1: <strong /> }}
              />
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
            <Shuffle className="w-4 h-4 text-emerald-500" />
            <span>{t('startScreen.statsRandom')}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span>{t('startScreen.statsExplanations')}</span>
          </div>
        </div> */}
      </div>

      {/* Mode Selector Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8 mb-6">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          {t('startScreen.chooseMode')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* All Random */}
          <button
            type="button"
            onClick={() => setSelectedMode('all_random')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              selectedMode === 'all_random'
                ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-bold text-sm text-slate-900">
                {t('startScreen.modes.allRandomTitle')}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-100 text-indigo-700">
                {t('startScreen.modes.allRandomBadge', { count: ALL_QUESTIONS.length })}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {t('startScreen.modes.allRandomDesc')}
            </p>
          </button>

          {/* Quick 15 */}
          <button
            type="button"
            onClick={() => setSelectedMode('quick_15')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              selectedMode === 'quick_15'
                ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-bold text-sm text-slate-900">
                {t('startScreen.modes.quick15Title')}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700">
                {t('startScreen.modes.quick15Badge')}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {t('startScreen.modes.quick15Desc')}
            </p>
          </button>

          {/* Exam 30 */}
          <button
            type="button"
            onClick={() => setSelectedMode('exam_30')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              selectedMode === 'exam_30'
                ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-bold text-sm text-slate-900">
                {t('startScreen.modes.exam30Title')}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700">
                {t('startScreen.modes.exam30Badge')}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {t('startScreen.modes.exam30Desc')}
            </p>
          </button>

          {/* By Simulation */}
          <button
            type="button"
            onClick={() => setSelectedMode('simulation')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              selectedMode === 'simulation'
                ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-bold text-sm text-slate-900">
                {t('startScreen.modes.simulationTitle')}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">
                {t('startScreen.modes.simulationBadge')}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {t('startScreen.modes.simulationDesc')}
            </p>
          </button>
        </div>

        {/* Dropdown for specific simulation */}
        {selectedMode === 'simulation' && (
          <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label htmlFor="simulation-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              {t('startScreen.selectSimulationLabel')}
            </label>
            <select
              id="simulation-select"
              value={selectedSim}
              onChange={(e) => setSelectedSim(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-800 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden font-medium cursor-pointer"
            >
              {SIMULATION_GROUPS.map((group) => {
                const count = ALL_QUESTIONS.filter(q => q.simulation === group).length;
                return (
                  <option key={group} value={group}>
                    {group} ({t('startScreen.simulationOptionCount', { count })})
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* Start Button */}
        <button
          type="button"
          onClick={handleStart}
          className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-white font-bold text-base bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-md shadow-indigo-200 hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>{t('startScreen.startQuizBtn')}</span>
        </button>
      </div>

      {/* Mistakes Review Banner if saved mistakes exist */}
      {savedMistakesCount > 0 && (
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-900">
                {t('startScreen.mistakesReview.title', { count: savedMistakesCount })}
              </h4>
              <p className="text-xs text-amber-700">
                {t('startScreen.mistakesReview.subtitle')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStartMistakesReview}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            {t('startScreen.mistakesReview.btn')}
          </button>
        </div>
      )}

      {/* Rules & Instructions Guide */}
      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 mx-auto mb-2 flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h5 className="font-bold text-xs text-slate-800 mb-1">
            {t('startScreen.guide.step1Title')}
          </h5>
          <p className="text-[11px] text-slate-500">
            {t('startScreen.guide.step1Desc')}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 mx-auto mb-2 flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h5 className="font-bold text-xs text-slate-800 mb-1">
            {t('startScreen.guide.step2Title')}
          </h5>
          <p className="text-[11px] text-slate-500">
            <Trans
              i18nKey="startScreen.guide.step2Desc"
              components={{ 1: <strong /> }}
            />
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 mx-auto mb-2 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h5 className="font-bold text-xs text-slate-800 mb-1">
            {t('startScreen.guide.step3Title')}
          </h5>
          <p className="text-[11px] text-slate-500">
            <Trans
              i18nKey="startScreen.guide.step3Desc"
              components={{ 1: <strong /> }}
            />
          </p>
        </div>
      </div> */}
    </div>
  );
};
