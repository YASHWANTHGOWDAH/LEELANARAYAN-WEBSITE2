import React from 'react';
import { Quote, HeartHandshake, Compass, BookOpen, UserCheck, Sparkles } from 'lucide-react';

export default function TeacherSection({ teacherInfo = {}, onOpenAdmin, title = "My Inspiration" }) {
  return (
    <section id="inspiration" className="py-20 bg-cream-100/50 border-t border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Guru Parampara & Musical Lineage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            {title}
          </h2>
          <div className="w-16 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Guru Quote Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl maroon-gradient-bg text-cream-50 text-center relative shadow-2xl border border-gold-400/40 overflow-hidden">
          <Quote className="w-16 h-16 text-gold-400/20 absolute -top-2 left-6 pointer-events-none" />
          <blockquote className="font-serif italic text-xl sm:text-3xl text-gold-300 font-medium leading-relaxed relative z-10">
            {teacherInfo.quote || "“Every musical journey begins with a Guru who inspires, guides and shapes the artist.”"}
          </blockquote>
          <p className="mt-4 text-xs tracking-widest uppercase text-cream-200 font-semibold">
            — Honor to Guru Parampara
          </p>
        </div>

        {/* Teacher Profile & Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Teacher Image / Placeholder Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl p-3 bg-gradient-to-b from-gold-400 to-maroon-900 shadow-xl overflow-hidden">
              <div className="relative rounded-2xl bg-cream-200 aspect-[4/5] flex flex-col items-center justify-center p-8 text-center border border-gold-400/30">
                <div className="w-24 h-24 rounded-full bg-gold-400/20 border-2 border-gold-500 flex items-center justify-center text-maroon-900 mb-4 shadow-inner">
                  <HeartHandshake className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-maroon-900">
                  {teacherInfo.name || "Guru Smt. [Revered Carnatic Vidushi]"}
                </h3>
                <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mt-1">
                  {teacherInfo.title || "Eminent Carnatic Vocalist & Mentor"}
                </p>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs italic border border-stone-300">
                  Guru–Shishya Tradition
                </div>
              </div>
            </div>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="mt-4 text-xs font-medium text-gold-700 hover:text-maroon-900 underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Edit Teacher Details in Admin Panel</span>
              </button>
            )}
          </div>

          {/* Teacher Details & Influence */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gold-400/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-maroon-900 font-serif font-bold text-xl">
                <BookOpen className="w-5 h-5 text-gold-600" />
                <h4>Musical Background & Heritage</h4>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {teacherInfo.background}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-400/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-maroon-900 font-serif font-bold text-xl">
                <Compass className="w-5 h-5 text-gold-600" />
                <h4>Training Received & Disciplines</h4>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {teacherInfo.training}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-400/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-maroon-900 font-serif font-bold text-xl">
                <UserCheck className="w-5 h-5 text-gold-600" />
                <h4>Teaching Philosophy & Guru's Influence</h4>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {teacherInfo.philosophy} {teacherInfo.impact}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
