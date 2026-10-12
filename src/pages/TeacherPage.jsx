import React from 'react';
import TeacherSection from '../components/TeacherSection';
import { Link } from 'react-router-dom';

export default function TeacherPage({ siteData, onOpenAdmin }) {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Guru Parampara & Lineage
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              My Teacher
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Honoring the Guru who inspired, guided and shaped Leela's musical journey
            </p>
          </div>

          <Link
            to="/about"
            className="px-5 py-2.5 rounded-full bg-gold-400 text-maroon-950 font-semibold text-xs hover:bg-gold-500 transition"
          >
            Read Leela's Bio
          </Link>
        </div>
      </div>

      {/* ONLY Teacher Section */}
      <TeacherSection
        teacherInfo={siteData?.teacherInfo || {}}
        onOpenAdmin={onOpenAdmin}
      />
    </div>
  );
}
