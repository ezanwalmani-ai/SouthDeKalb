import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';
import SouthDeKalbLogo from './SouthDeKalbLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavItem {
  id: PageId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'storage', label: 'Storage' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'service-area', label: 'Service Area' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="global-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-[#111111]/95 via-[#111111]/70 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Concept */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group focus:outline-none"
            aria-label="South DeKalb Towing & Transport Home"
          >
            <SouthDeKalbLogo variant="dark" size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-white/10 font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-request-tow-btn"
              onClick={() => handleNavClick('request-tow')}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#202020] hover:bg-[#2a2a2a] text-[#F6F5F1] text-sm font-medium border border-white/15 transition-all active:scale-[0.98]"
            >
              <span>Request Tow</span>
            </button>

            <a
              id="nav-call-now-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white text-sm font-bold tracking-tight shadow-md shadow-[#FF5500]/20 transition-all active:translate-y-[1px]"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>CALL NOW</span>
              <span className="hidden md:inline text-xs font-normal text-white/90 pl-1 border-l border-white/20">
                {BUSINESS_INFO.phone}
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Quick Call */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-nav-quick-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call South DeKalb Towing"
              className="p-2 rounded-lg bg-[#FF5500] text-white shadow-sm active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-[#1C1C1C] text-zinc-200 hover:text-white border border-white/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu-drawer"
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#161616] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <SouthDeKalbLogo variant="dark" size="sm" />
                <button
                  id="mobile-menu-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High visibility CTA */}
              <div className="mt-5 mb-6">
                <button
                  id="mobile-drawer-request-btn"
                  onClick={() => handleNavClick('request-tow')}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Request a Tow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-link-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-[#FF5500] bg-white/5'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer / Direct Call */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <a
                id="mobile-drawer-phone-link"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-[#F6F5F1] font-bold text-sm border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <div className="text-center">
                <p className="text-xs text-zinc-400">
                  {BUSINESS_INFO.address.fullAddress}
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5 font-mono">
                  Every Day: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
