import React from 'react';
import { Award, Trophy, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function StudentAchievementSection({ studentData, onNavigate, onOpenRegister }) {
  return (
    <section className="py-20 bg-cream-100/60 border-y border-gold-400/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image 2 Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 bg-stone-900 group">
              <img
                src="/images/leela-students-awards-ganesha.jpg"
                alt="Leela Narayan with students holding awards in front of Ganesha setup"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream-50/95 backdrop-blur-md border border-gold-400/40 shadow-xl">
                <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Trophy className="w-4 h-4 text-gold-600" />
                  <span>Student Excellence Showcase</span>
                </div>
                <h4 className="font-serif text-maroon-900 font-bold text-lg sm:text-xl">
                  Celebrating Every Student's Journey
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  LNSOPA students celebrating awards and certificates in front of Ganesha deity setup.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
                Nurturing Future Artists
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 leading-tight">
                {studentData.title || "Celebrating Every Student's Journey"}
              </h2>
              <p className="text-gold-700 font-serif italic text-lg font-medium mt-2">
                {studentData.subtitle || "From Learning to Performing"}
              </p>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              “{studentData.text}”
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {studentData.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gold-400/20">
                  <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">{hl}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('achievements')}
                className="px-6 py-3.5 rounded-full maroon-gradient-bg text-gold-400 font-bold text-sm shadow-md hover:scale-105 transition flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>View Student Achievements</span>
              </button>

              <button
                onClick={onOpenRegister}
                className="px-6 py-3.5 rounded-full bg-white text-stone-800 border border-stone-300 hover:border-gold-500 font-semibold text-sm shadow-sm transition"
              >
                Enroll Your Child / Yourself
              </button>
            </div>

          </div>

        </div>

        {/* Visual Journey Bar */}
        <div className="mt-20 pt-12 border-t border-gold-400/30">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-maroon-900">
              The LNSOPA Student Growth Path
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {studentData.journeySteps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gold-400/30 text-center relative shadow-sm hover:shadow-md transition group"
              >
                <div className="w-10 h-10 rounded-full maroon-gradient-bg text-gold-400 font-bold font-serif text-base flex items-center justify-center mx-auto mb-3">
                  {st.step}
                </div>
                <h4 className="font-serif font-bold text-maroon-900 text-lg mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-stone-600">
                  {st.desc}
                </p>

                {idx < studentData.journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold-500 font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
