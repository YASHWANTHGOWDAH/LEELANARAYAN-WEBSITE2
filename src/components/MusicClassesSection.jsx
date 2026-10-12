import React from 'react';
import { Music, HeartHandshake, Sun, Radio, Volume2, Award, CheckCircle2, UserPlus, Globe, Video, MapPin, Smile, UserCheck, Star, Activity, Compass, ShieldCheck } from 'lucide-react';

export default function MusicClassesSection({ classes, whyLearn, onOpenRegister }) {
  const iconMap = {
    Music: Music,
    HeartHandshake: HeartHandshake,
    Sun: Sun,
    Radio: Radio,
    Volume2: Volume2,
    Award: Award,
    Smile: Smile,
    UserCheck: UserCheck,
    Star: Star,
    Activity: Activity,
    Compass: Compass,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="classes" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Leela Narayan School of Performing Arts (LNSOPA)
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Learn Music with Leela
          </h2>
          <p className="text-gold-700 font-serif italic text-xl font-medium mt-3">
            Learn • Practice • Perform • Grow
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Global Format Banner */}
        <div className="max-w-3xl mx-auto mb-16 p-4 rounded-2xl bg-cream-100 border border-gold-400/40 shadow-sm flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
            <Globe className="w-5 h-5 text-gold-600" />
            <span>Online & Offline Classes Available</span>
          </div>
          <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
            <Video className="w-5 h-5 text-gold-600" />
            <span>Live Interactive Zoom / Meet</span>
          </div>
          <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
            <MapPin className="w-5 h-5 text-gold-600" />
            <span>Studio in Bengaluru</span>
          </div>
        </div>

        {/* Six Core Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {classes.map((cls) => {
            const IconComponent = iconMap[cls.icon] || Music;
            return (
              <div
                key={cls.id}
                className="bg-white rounded-2xl p-8 border border-gold-400/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl maroon-gradient-bg text-gold-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 bg-cream-100 border border-gold-400/30 text-maroon-900 text-[11px] font-bold rounded-full uppercase tracking-wider">
                      {cls.format}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
                    {cls.title}
                  </h3>

                  <p className="text-xs font-semibold text-gold-700 uppercase tracking-wide mb-4">
                    Levels: {cls.levels}
                  </p>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {cls.desc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                    {cls.details.map((dt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        <span>{dt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenRegister(cls.title)}
                  className="w-full py-3 rounded-xl bg-cream-100 hover:bg-maroon-800 text-maroon-900 hover:text-gold-400 border border-gold-400/40 hover:border-maroon-800 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register for Classes</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* WHY LEARN WITH LEELA? Section */}
        <div className="pt-8 border-t border-gold-400/20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
              Teaching Methodology & Value
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
              Why Learn With Leela?
            </h3>
            <p className="text-stone-600 text-sm mt-2">
              Nurturing vocal capability, stage confidence, and a lifelong love for Indian music.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyLearn.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Smile;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gold-400/30 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream-100 border border-gold-400/40 text-maroon-900 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-800 group-hover:text-gold-400 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-maroon-900">
                      {card.title}
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
