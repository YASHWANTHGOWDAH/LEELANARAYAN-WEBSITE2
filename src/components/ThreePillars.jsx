import React from 'react';
import { Music, Sparkles, Mic, CheckCircle2 } from 'lucide-react';

export default function ThreePillars({ pillars, onNavigate }) {
  const iconMap = {
    Music: Music,
    Sparkles: Sparkles,
    Mic: Mic,
  };

  return (
    <section className="py-16 bg-cream-100/70 border-y border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            The Three Facets of Leela Narayan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
            Artist • Educator • Event Host
          </h2>
          <div className="w-16 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = iconMap[pillar.icon] || Music;
            return (
              <div
                key={pillar.id}
                onClick={() => onNavigate(pillar.id === 'music' ? 'classes' : pillar.id === 'performance' ? 'achievements' : 'about')}
                className="cursor-pointer bg-white rounded-2xl p-8 border border-gold-400/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl maroon-gradient-bg text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-4 border-b border-gold-400/20 pb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pillar.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-maroon-900 group-hover:text-gold-600">
                  <span>Explore {pillar.title}</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
