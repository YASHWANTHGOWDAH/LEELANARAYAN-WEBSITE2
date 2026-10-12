import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage({ siteData, onOpenRegister }) {
  const contactInfo = siteData?.artistInfo?.contact || {};

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Bengaluru & Online Connectivity
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              Contact & Enquiries
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Connect for music class registrations, stage concerts, workshops & event anchoring
            </p>
          </div>
        </div>
      </div>

      <ContactSection
        contactInfo={contactInfo}
        onOpenRegister={() => onOpenRegister('')}
      />
    </div>
  );
}
