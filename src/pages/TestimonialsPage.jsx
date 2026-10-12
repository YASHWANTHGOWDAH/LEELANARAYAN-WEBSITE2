import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';

export default function TestimonialsPage({ siteData, onOpenRegister, onAddTestimonial }) {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Feedback & Reviews
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              Student & Parent Testimonials
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Read how Leela Narayan's teaching empowers confidence, vocal culture & stage poise
            </p>
          </div>

          <button
            onClick={() => onOpenRegister('')}
            className="px-6 py-3 rounded-full bg-gold-400 text-maroon-950 font-bold text-sm shadow-md hover:bg-gold-500 transition"
          >
            Join a Class Now
          </button>
        </div>
      </div>

      <TestimonialsSection
        testimonials={siteData?.testimonials || []}
        onAddTestimonial={onAddTestimonial}
      />
    </div>
  );
}
