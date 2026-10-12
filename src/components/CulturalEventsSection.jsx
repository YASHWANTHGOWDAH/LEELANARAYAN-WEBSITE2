import React from 'react';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CulturalEventsSection({ culturalData, onNavigate }) {
  return (
    <section className="py-20 bg-cream-100/70 border-t border-gold-400/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image 5 Feature Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 bg-stone-900 group">
              <img
                src="/images/leela-shyamotsava-events.jpg"
                alt="Leela Narayan with students at Shyamotsava Festival of Indian Classical Dance"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream-50/95 backdrop-blur-md border border-gold-400/40 shadow-xl">
                <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Natanam Foundation Presents</span>
                </div>
                <h4 className="font-serif text-maroon-900 font-bold text-lg">
                  Shyamotsava — Festival of Indian Classical Dance & Arts
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Leela Narayan with young students draped in traditional shawls at Shyamotsava.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
                Stage Exposure & Mentorship
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 leading-tight">
                {culturalData.title || "Nurturing Young Performers"}
              </h2>
              <p className="text-gold-700 font-serif italic text-xl font-medium mt-2">
                {culturalData.subtitle || "Celebrating Indian Classical Arts"}
              </p>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              “{culturalData.text}”
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {culturalData.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gold-400/20 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">{hl}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('events')}
                className="px-8 py-3.5 rounded-full maroon-gradient-bg text-gold-400 font-bold text-sm shadow-md hover:scale-105 transition flex items-center gap-2 group"
              >
                <span>Explore Events & Festivals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
