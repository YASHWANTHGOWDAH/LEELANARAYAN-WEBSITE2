import React from 'react';
import UpcomingEventsSection from '../components/UpcomingEventsSection';
import CulturalEventsSection from '../components/CulturalEventsSection';
import { useNavigate } from 'react-router-dom';

export default function EventsPage({ siteData, onOpenRegister }) {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Live Concerts, Workshops & Festivals
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              Events & Performances
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Stay updated with upcoming workshops, student showcases, devotional programs & anchoring
            </p>
          </div>
        </div>
      </div>

      {/* ONLY Events Content */}
      <UpcomingEventsSection
        events={siteData?.upcomingEvents || []}
        onOpenRegister={() => onOpenRegister('')}
      />

      <CulturalEventsSection
        culturalData={siteData?.culturalEventsSection || {}}
        onNavigate={(p) => navigate(`/${p}`)}
      />
    </div>
  );
}
