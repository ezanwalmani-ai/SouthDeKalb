import { useState } from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_HOURS } from '../data/businessData';
import { PageId } from '../types';
import LegalModal from './LegalModals';
import SouthDeKalbLogo from './SouthDeKalbLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#0D0D0D] text-[#F6F5F1] border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Business Identity & Contact */}
          <div className="space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="text-left focus:outline-none group"
            >
              <SouthDeKalbLogo variant="dark" size="md" />
            </button>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              South DeKalb Towing &amp; Transport, Inc. (DBA: South DeKalb Transport &amp; Storage) provides professional towing, vehicle transport, and storage services in Lithonia and surrounding South DeKalb communities.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <span>
                  7043 Rogers Lake Rd<br />
                  Lithonia, GA 30058
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-300">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-white hover:text-[#FF5500] transition-colors"
                >
                  (404) 508-0246
                </a>
              </div>
            </div>

            <div className="pt-1">
              <a
                id="footer-directions-btn"
                href={BUSINESS_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] hover:text-[#ff7733] transition-colors"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 mb-4">
              Website Pages
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleLink('home')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleLink('services')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-storage"
                  onClick={() => handleLink('storage')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Storage Facility
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleLink('about')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  About Our Company
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  onClick={() => handleLink('reviews')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Customer Feedback
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-area"
                  onClick={() => handleLink('service-area')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Service Area
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => handleLink('faq')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Contact &amp; Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Local Vehicle Towing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Vehicle Transport</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Lithonia Storage Facility</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Accident Recovery Clearance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Impound &amp; Holding Services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>Roadside Assistance</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => handleLink('request-tow')}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-[#222222] hover:bg-[#2b2b2b] text-white text-xs font-bold border border-white/10 transition-colors"
              >
                Submit Tow Request
              </button>
            </div>
          </div>

          {/* Col 4: Business Schedule */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 mb-4">
              Facility Schedule
            </h3>
            <div className="bg-[#141414] rounded-xl border border-white/10 p-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-zinc-400 pb-2 border-b border-white/5">
                <span>MONDAY – SUNDAY</span>
                <span className="text-white font-bold">9 AM – 6 PM</span>
              </div>
              <p className="text-[11px] font-sans text-zinc-400 pt-1 leading-relaxed">
                Open 7 days a week, including Tuesdays. Arrive during regular hours for vehicle releases.
              </p>
            </div>

            <div className="mt-6 space-y-1">
              <div className="text-xs text-zinc-400">Emergency Dispatch:</div>
              <div className="text-lg font-mono font-bold text-white tracking-tight">
                (404) 508-0246
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} South DeKalb Towing &amp; Transport, Inc. (DBA: South DeKalb Transport &amp; Storage). All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-400">
              7043 Rogers Lake Rd, Lithonia, GA 30058 • Website Redesign Concept
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modals */}
      <LegalModal
        type={legalModalType}
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}
