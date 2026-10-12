import React from 'react';
import { Sun, Heart, CheckCircle2, Sparkles, UserPlus } from 'lucide-react';

export default function DevotionalMusicSection({ devotionalData, onOpenRegister }) {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2 flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-gold-600" />
                Devotional Sangeetha & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 leading-tight">
                {devotionalData.title || "Music Rooted in Devotion & Tradition"}
              </h2>
              <p className="text-gold-700 font-serif italic text-xl font-medium mt-2">
                {devotionalData.subtitle || "Music, Devotion & Culture"}
              </p>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              “{devotionalData.text}”
            </p>

            <div className="p-6 rounded-2xl bg-white border border-gold-400/30 shadow-sm space-y-3">
              <h4 className="font-serif font-bold text-maroon-900 text-lg">
                Key Devotional Programs & Formats:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {devotionalData.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenRegister('Devaranama')}
                className="px-8 py-3.5 rounded-full maroon-gradient-bg text-gold-400 font-bold text-sm shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Join Devaranama & Bhajan Classes</span>
              </button>
            </div>
          </div>

          {/* Right Column: Image 3 Display */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 bg-stone-900 group">
              <img
                src="/images/leela-devotional-ganesha.jpg"
                alt="Leela Narayan with students in front of large Ganesha idol"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream-50/95 backdrop-blur-md border border-gold-400/40 shadow-xl">
                <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Heart className="w-4 h-4 text-coral-500" />
                  <span>Sacred Temple Renditions</span>
                </div>
                <h4 className="font-serif text-maroon-900 font-bold text-lg">
                  Music, Devotion & Tradition
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Leela Narayan and students in devotional attire before the grand Lord Ganesha deity.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
