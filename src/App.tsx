/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import StoragePage from './pages/StoragePage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import FaqPage from './pages/FaqPage';
import ContactRequestPage from './pages/ContactRequestPage';

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  switch (hash) {
    case 'services':
      return 'services';
    case 'storage':
    case 'vehicle-storage':
      return 'storage';
    case 'about':
      return 'about';
    case 'reviews':
      return 'reviews';
    case 'service-area':
    case 'area':
      return 'service-area';
    case 'faq':
      return 'faq';
    case 'request-tow':
    case 'request':
      return 'request-tow';
    case 'contact':
      return 'contact';
    case 'home':
    default:
      return 'home';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageFromHash());

  // Keep hash in sync with state for browser history and direct bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F7F6F2] font-sans flex flex-col justify-between selection:bg-[#FF5500] selection:text-white">
      {/* 1-2px Subtle Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with smooth transition and mobile bottom padding for sticky bar */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'storage' && <StoragePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
        {currentPage === 'service-area' && <ServiceAreaPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'request-tow' && <ContactRequestPage initialTab="request" />}
        {currentPage === 'contact' && <ContactRequestPage initialTab="contact" />}
      </main>

      {/* Back to top button */}
      <BackToTop />

      {/* Mobile Sticky Bottom Action Bar (Call, Request Tow, Directions) */}
      <MobileBottomBar onNavigate={handleNavigate} />

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
