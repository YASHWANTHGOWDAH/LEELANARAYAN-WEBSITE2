import React from 'react';
import { Award, Trophy, Calendar, MapPin, Sparkles, Edit3 } from 'lucide-react';

export default function AchievementsSection({ achievements = [], onOpenAdmin, onOpenRegister }) {
  return (
    <section id="achievements" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Milestones & Honors
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Achievements & Recognition
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Honors, spiritual music sevas, cultural awards & student excellence
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Feature Grid with Main Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Main Stage Award Photograph */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 bg-stone-900 group">
              <img
                src="/images/leela-award-stage.jpg"
                alt="Leela Narayan receiving award on stage"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream-50/95 backdrop-blur-md border border-gold-400/40 shadow-xl">
                <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Trophy className="w-4 h-4 text-gold-600" />
                  <span>Stage Honor & Felicitation</span>
                </div>
                <h4 className="font-serif text-maroon-900 font-bold text-lg">
                  Cultural Excellence Award
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Leela Narayan being felicitated on stage for her contributions to Carnatic music education.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline List Column - Filter buttons removed */}
          <div className="lg:col-span-7 space-y-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-gold-400/30 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start gap-4 group"
              >
                <div className="w-16 h-16 rounded-2xl maroon-gradient-bg text-gold-400 flex flex-col items-center justify-center flex-shrink-0 shadow-md">
                  <span className="font-serif font-bold text-lg leading-none">{item.year}</span>
                  <span className="text-[10px] uppercase font-semibold text-cream-200 mt-0.5">Year</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 bg-cream-100 border border-gold-400/30 text-maroon-900 text-[10px] font-bold rounded-full uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-gold-700">
                      {item.org}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-maroon-900 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {onOpenAdmin && (
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={onOpenAdmin}
                  className="text-xs font-medium text-gold-700 hover:text-maroon-900 flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Add / Edit Achievements in Admin Panel</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
