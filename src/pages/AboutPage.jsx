import React from 'react';
import AboutSection from '../components/AboutSection';
import TeacherSection from '../components/TeacherSection';
import { Link } from 'react-router-dom';

export default function AboutPage({ siteData, onOpenRegister, onOpenAdmin }) {
  const artistInfo = siteData?.artistInfo || {};
  const teacherInfo = siteData?.teacherInfo || {};

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Artist & Educator Profile
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              About Leela Narayan
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Carnatic Vocalist • Music Educator • Performer • Anchor • Former ANZ VP
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/classes"
              className="px-5 py-2.5 rounded-full bg-gold-400 text-maroon-950 font-semibold text-xs hover:bg-gold-500 transition"
            >
              Explore Music Classes
            </Link>
            <button
              onClick={() => onOpenRegister('')}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 font-semibold text-xs transition border border-gold-400/40"
            >
              Join a Class
            </button>
          </div>
        </div>
      </div>

      {/* About Leela Profile */}
      <AboutSection
        artistInfo={artistInfo}
        stats={siteData?.stats || []}
        expertise={siteData?.areasOfExpertise || []}
        onOpenRegister={() => onOpenRegister('')}
      />

      {/* My Inspiration (Guru Lineage) Section */}
      <TeacherSection
        teacherInfo={teacherInfo}
        onOpenAdmin={onOpenAdmin}
        title="My Inspiration"
      />
    </div>
  );
}
