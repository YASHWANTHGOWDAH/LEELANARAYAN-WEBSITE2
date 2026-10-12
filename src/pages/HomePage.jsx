import React from 'react';
import HeroSection from '../components/HeroSection';
import ThreePillars from '../components/ThreePillars';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ siteData, onOpenRegister }) {
  const navigate = useNavigate();

  const handleNavigatePage = (pageId) => {
    const routeMap = {
      home: '/',
      about: '/about',
      teacher: '/teacher',
      classes: '/classes',
      achievements: '/achievements',
      events: '/events',
      gallery: '/gallery',
      testimonials: '/testimonials',
      contact: '/contact',
      register: '/register'
    };
    navigate(routeMap[pageId] || '/');
  };

  const artistInfo = siteData?.artistInfo || {};

  return (
    <div>
      {/* 1. Hero Section (Image 1) */}
      <HeroSection
        artistInfo={artistInfo}
        onOpenRegister={() => onOpenRegister('')}
        onNavigate={handleNavigatePage}
      />

      {/* 2. Three Core Pillars (Music, Performance, Hosting) */}
      <ThreePillars
        pillars={siteData?.threePillars || []}
        onNavigate={handleNavigatePage}
      />
    </div>
  );
}
