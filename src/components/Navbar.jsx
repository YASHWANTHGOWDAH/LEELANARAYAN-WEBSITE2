import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Music2, UserPlus, Settings } from 'lucide-react';

export default function Navbar({ onOpenRegister, onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/classes', label: 'Music Classes' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 text-white ${
        isScrolled ? 'py-2.5 shadow-2xl' : 'py-3.5 shadow-lg'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1B101B 0%, #2B1728 100%)',
        opacity: 1,
        borderBottom: '1px solid rgba(197, 160, 89, 0.35)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Title & Subtitle */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center shadow-md group-hover:scale-105 transition flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6B1D2F 0%, #350A14 100%)',
                color: '#F5D98E',
              }}
            >
              <Music2 className="w-5 h-5" />
            </div>
            
            <div className="flex flex-col justify-center">
              {/* Main Website Title - Pure White (#FFFFFF), Font-Weight 700, 100% Opacity */}
              <span
                className="font-serif text-xl sm:text-2xl tracking-wider block leading-none"
                style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  opacity: 1,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                }}
              >
                LEELA NARAYAN
              </span>

              {/* Subtitle - Warm Gold (#F5D98E), 100% Opacity, Font-Weight 600, 13–14px Desktop */}
              <span
                className="font-sans tracking-wider uppercase block mt-1 leading-tight text-[10.5px] sm:text-[12px] lg:text-[13.5px] whitespace-nowrap"
                style={{
                  color: '#F5D98E',
                  fontWeight: 600,
                  opacity: 1,
                  letterSpacing: '0.04em',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)',
                }}
              >
                CARNATIC VOCALIST & MUSIC EDUCATOR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Equal Gaps */}
          <nav className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-2.5 2xl:gap-3.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap text-center ${
                    isActive
                      ? 'font-bold border shadow-sm'
                      : 'hover:bg-white/10'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#F5D98E' : '#FFF4D6',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  borderColor: isActive ? 'rgba(245, 217, 142, 0.4)' : 'transparent',
                  opacity: 1,
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              title="Admin Editor"
              className="p-2 rounded-full transition hover:bg-white/10"
              style={{ color: '#FFF4D6' }}
            >
              <Settings className="w-4 h-4 hover:text-[#F5D98E] transition" />
            </button>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-full border border-gold-400 font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #6B1D2F 0%, #350A14 100%)',
                color: '#F5D98E',
              }}
            >
              <UserPlus className="w-4 h-4" />
              <span>Join a Class</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/register"
              className="px-3.5 py-1.5 rounded-full border border-gold-400/60 text-xs font-semibold"
              style={{
                background: 'linear-gradient(135deg, #6B1D2F 0%, #350A14 100%)',
                color: '#F5D98E',
              }}
            >
              Join Class
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg transition"
              style={{ color: '#FFF4D6' }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b border-gold-500/30 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn"
          style={{
            background: 'linear-gradient(135deg, #1B101B 0%, #2B1728 100%)',
            opacity: 1,
          }}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'font-bold border shadow-sm'
                      : 'hover:bg-white/10'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#F5D98E' : '#FFF4D6',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  borderColor: isActive ? 'rgba(245, 217, 142, 0.4)' : 'transparent',
                  opacity: 1,
                })}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-gold-500/20 flex flex-col gap-2">
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2 border border-gold-400/50"
                style={{
                  background: 'linear-gradient(135deg, #6B1D2F 0%, #350A14 100%)',
                  color: '#F5D98E',
                }}
              >
                <UserPlus className="w-4 h-4" />
                <span>Join a Class Now</span>
              </Link>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="w-full py-2 text-xs font-medium text-center flex items-center justify-center gap-1.5 transition"
                style={{ color: '#FFF4D6' }}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Admin & Content Editor</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
