import React from 'react';
import { Mic, Award, Users, Building2, MessageSquare, Sparkles, Send } from 'lucide-react';

export default function AnchoringSection({ anchoringData, onNavigate, onOpenRegister }) {
  const iconList = [Sparkles, Mic, Award, Building2, MessageSquare, Users];

  const handleInvite = (cardTitle) => {
    const msg = `Hello Leela, I would like to enquire about inviting you to host/anchor our upcoming event (${cardTitle}).`;
    window.open(`https://wa.me/919980334147?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Event Hosting & Public Speaking Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            {anchoringData.title || "Anchor • Host • Speaker"}
          </h2>
          <p className="text-gold-700 font-serif italic text-xl font-medium mt-2">
            {anchoringData.subtitle || "Elegance, Articulation & Audience Engagement"}
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Intro Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-white border border-gold-400/40 shadow-sm text-center">
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
            “{anchoringData.text}”
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 text-maroon-900 text-xs font-semibold">
            <span>Corporate VP Leadership Heritage + Cultural Stage Grace</span>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {anchoringData.cards.map((card, idx) => {
            const IconComp = iconList[idx % iconList.length];
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gold-400/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl maroon-gradient-bg text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleInvite(card.title)}
                  className="text-xs font-bold text-maroon-900 group-hover:text-gold-700 flex items-center gap-1 mt-2"
                >
                  <span>Invite Leela for {card.title}</span>
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <button
            onClick={() => handleInvite("Event Hosting")}
            className="px-10 py-4 rounded-full maroon-gradient-bg text-gold-400 border border-gold-400 font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Mic className="w-5 h-5 text-gold-400" />
            <span>Invite Leela to Host Your Event</span>
          </button>
        </div>

      </div>
    </section>
  );
}
