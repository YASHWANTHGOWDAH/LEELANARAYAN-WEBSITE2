import React, { useState } from 'react';
import { Award, BookOpen, Building2, Heart, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutSection({ artistInfo, stats, expertise, onOpenRegister }) {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Bio & Artistic Legacy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            About Leela Narayan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif italic">
            Carnatic Vocalist • Music Educator • Performer • Anchor • Former ANZ VP
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bio Grid (Image 1 Beside Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/40 bg-stone-900 group">
              <img
                src="/images/leela-hero-performance.jpg"
                alt="Leela Narayan Artist Profile"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-cream-50/95 backdrop-blur-md border border-gold-400/30">
                <p className="font-serif text-maroon-900 font-bold text-lg">
                  Leela Narayan
                </p>
                <p className="text-xs text-gold-700 font-semibold uppercase tracking-wider">
                  Founder, Leela Narayan School of Performing Arts (LNSOPA)
                </p>
              </div>
            </div>

            {/* Former VP & Leadership Highlight Card */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gold-400/30 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl maroon-gradient-bg text-gold-400 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-maroon-900">
                  Corporate Leadership Background
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Brings a strong corporate leadership heritage, having served as <strong>Vice President at ANZ Bank</strong> before dedicating her life to music education and artistic mentorship.
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-base sm:text-lg leading-relaxed font-sans">
              {artistInfo.bio.slice(0, showFullStory ? artistInfo.bio.length : 3).map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-maroon-900">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="px-6 py-3 rounded-full bg-cream-200 text-maroon-900 hover:bg-gold-400 hover:text-white font-semibold text-sm transition flex items-center gap-2"
              >
                <span>{showFullStory ? 'Show Less' : 'Read Full Story'}</span>
                {showFullStory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenRegister}
                className="px-6 py-3 rounded-full maroon-gradient-bg text-gold-400 hover:text-white font-semibold text-sm transition shadow-md"
              >
                Join Classes With Leela
              </button>
            </div>
          </div>
        </div>

        {/* Quick Profile Statistics Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-maroon-900">
              Journey in Numbers & Impact
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gold-400/30 shadow-sm hover:shadow-lg text-center transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-maroon-900 gold-gradient-text">
                  {st.value}
                </div>
                <div className="font-semibold text-stone-800 text-sm mt-2">
                  {st.label}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-1">
              Core Competencies
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900">
              Areas of Expertise
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-cream-100/80 border border-gold-400/20 hover:border-gold-500 flex items-center gap-3 transition"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
