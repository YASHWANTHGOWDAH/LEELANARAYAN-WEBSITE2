import React from 'react';
import { Calendar, Clock, MapPin, Send } from 'lucide-react';

export default function UpcomingEventsSection({ events = [], onOpenRegister, whatsappNumber = "919980334147" }) {
  const handleEnquire = (evtName) => {
    const msg = `Hello Leela, I would like to enquire about attending / participating in the event: "${evtName}".`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="events" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Schedule & Workshops
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Upcoming Events
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Music programs, student showcases, voice culture workshops & devotional sevas
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Events Cards - Filter buttons removed, showing all events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl p-6 border border-gold-400/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cream-100 text-maroon-900 text-[10px] font-bold rounded-full uppercase border border-gold-400/30">
                    {evt.category}
                  </span>
                  <span className="text-xs font-bold text-gold-700 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {evt.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-maroon-900 mb-3 group-hover:text-gold-700 transition-colors">
                  {evt.name}
                </h3>

                <div className="space-y-1.5 text-xs text-stone-600 mb-4 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>{evt.venue}, {evt.city}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {evt.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex gap-2">
                <button
                  onClick={() => handleEnquire(evt.name)}
                  className="flex-1 py-2.5 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-gold-400 font-bold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enquire / Register</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
