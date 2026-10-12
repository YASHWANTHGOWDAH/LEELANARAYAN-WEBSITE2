import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeacherPage from './pages/TeacherPage';
import ClassesPage from './pages/ClassesPage';
import AchievementsPage from './pages/AchievementsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';

import RegistrationModal from './components/RegistrationModal';
import LightboxModal from './components/LightboxModal';
import AdminEditorModal from './components/AdminEditorModal';
import WhatsAppButton from './components/WhatsAppButton';
import MusicalBackground from './components/MusicalBackground';

import { initialSiteData } from './data/siteData';

export default function App() {
  const [siteData, setSiteData] = useState(() => {
    try {
      const saved = localStorage.getItem('leela_site_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        const contact = {
          ...initialSiteData.artistInfo.contact,
          ...((parsed.artistInfo && parsed.artistInfo.contact) || {}),
        };
        // Normalize phone and email if legacy mock values were stored in localStorage
        if (!contact.phone || contact.phone.includes("98765")) {
          contact.phone = "+91 99803 34147";
        }
        if (!contact.whatsapp || contact.whatsapp.includes("98765")) {
          contact.whatsapp = "919980334147";
        }
        if (!contact.email || contact.email.includes("leelanarayan.com")) {
          contact.email = "itsmeleelanar@gmail.com";
        }

        return {
          ...initialSiteData,
          ...parsed,
          artistInfo: {
            ...initialSiteData.artistInfo,
            ...(parsed.artistInfo || {}),
            contact,
          },
          teacherInfo: { ...initialSiteData.teacherInfo, ...(parsed.teacherInfo || {}) },
          studentSection: { ...initialSiteData.studentSection, ...(parsed.studentSection || {}) },
          devotionalSection: { ...initialSiteData.devotionalSection, ...(parsed.devotionalSection || {}) },
          culturalEventsSection: { ...initialSiteData.culturalEventsSection, ...(parsed.culturalEventsSection || {}) },
          anchoringSection: { ...initialSiteData.anchoringSection, ...(parsed.anchoringSection || {}) },
        };
      }
    } catch (e) {
      console.error("Error restoring site data:", e);
    }
    return initialSiteData;
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('leela_site_data', JSON.stringify(siteData));
    } catch (e) {
      console.error("Could not save to localStorage:", e);
    }
  }, [siteData]);

  const handleOpenRegister = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsRegisterOpen(true);
  };

  const handleSelectImage = (idx) => {
    setLightboxIndex(idx);
    setIsLightboxOpen(true);
  };

  const handleSaveAdminData = (newData) => {
    setSiteData(newData);
  };

  const handleAddTestimonial = (newTestimonial) => {
    setSiteData((prev) => ({
      ...prev,
      testimonials: [newTestimonial, ...(prev.testimonials || [])],
    }));
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all content to default original information?")) {
      setSiteData(initialSiteData);
      localStorage.removeItem('leela_site_data');
    }
  };

  const contactInfo = siteData?.artistInfo?.contact || initialSiteData.artistInfo.contact;

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream-50 text-stone-800 font-sans selection:bg-gold-500 selection:text-white relative">
        {/* Moving Musical Symbols Ambient Background */}
        <MusicalBackground />

        {/* Navigation Header */}
        <Navbar
          onOpenRegister={() => handleOpenRegister('')}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                  onOpenAdmin={() => setIsAdminOpen(true)}
                  onSelectImage={handleSelectImage}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                  onOpenAdmin={() => setIsAdminOpen(true)}
                />
              }
            />
            <Route
              path="/teacher"
              element={
                <TeacherPage
                  siteData={siteData}
                  onOpenAdmin={() => setIsAdminOpen(true)}
                />
              }
            />
            <Route
              path="/classes"
              element={
                <ClassesPage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                />
              }
            />
            <Route
              path="/achievements"
              element={
                <AchievementsPage
                  siteData={siteData}
                  onOpenAdmin={() => setIsAdminOpen(true)}
                  onOpenRegister={handleOpenRegister}
                />
              }
            />
            <Route
              path="/events"
              element={
                <EventsPage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                />
              }
            />
            <Route
              path="/gallery"
              element={
                <GalleryPage
                  siteData={siteData}
                  onSelectImage={handleSelectImage}
                />
              }
            />
            <Route
              path="/testimonials"
              element={
                <TestimonialsPage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                  onAddTestimonial={handleAddTestimonial}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  siteData={siteData}
                  onOpenRegister={handleOpenRegister}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RegisterPage
                  siteData={siteData}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          onOpenRegister={() => handleOpenRegister('')}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Registration Modal */}
        <RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          selectedCourse={selectedCourse}
          whatsappNumber={contactInfo?.whatsapp || "919980334147"}
        />

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={isLightboxOpen}
          images={siteData?.galleryImages || initialSiteData.galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />

        {/* Admin Content Editor Modal */}
        <AdminEditorModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          siteData={siteData}
          onSave={handleSaveAdminData}
          onReset={handleResetDefaults}
        />

        {/* Floating WhatsApp Chat Button */}
        <WhatsAppButton
          number={contactInfo?.whatsapp || "919980334147"}
        />
      </div>
    </Router>
  );
}
