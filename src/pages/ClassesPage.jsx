import React from 'react';
import MusicClassesSection from '../components/MusicClassesSection';

export default function ClassesPage({ siteData, onOpenRegister }) {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Leela Narayan School of Performing Arts (LNSOPA)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              Music Classes & Education
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Carnatic Vocal • Devaranama • Bhajans • Light Music • Voice Culture • Performance Training
            </p>
          </div>

          <button
            onClick={() => onOpenRegister('')}
            className="px-6 py-3 rounded-full bg-gold-400 text-maroon-950 font-bold text-sm shadow-md hover:bg-gold-500 transition"
          >
            Register for Classes
          </button>
        </div>
      </div>

      {/* ONLY Music Classes Section */}
      <MusicClassesSection
        classes={siteData?.musicClasses || []}
        whyLearn={siteData?.whyLearnCards || []}
        onOpenRegister={onOpenRegister}
      />
    </div>
  );
}
