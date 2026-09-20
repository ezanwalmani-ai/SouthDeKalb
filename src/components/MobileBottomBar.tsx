import { Phone, FileText, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface MobileBottomBarProps {
  onNavigate: (page: PageId) => void;
}

export default function MobileBottomBar({ onNavigate }: MobileBottomBarProps) {
  return (
    <div 
      id="mobile-bottom-cta-bar" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161616]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          id="mobile-bar-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="relative flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#FF5500] text-white font-bold text-xs tracking-tight shadow-md active:scale-[0.98] transition-transform animate-breathing-pulse"
        >
          <Phone className="w-4 h-4 mb-1" />
          <span>Call Now</span>
        </a>

        <button
          id="mobile-bar-request-btn"
          onClick={() => onNavigate('request-tow')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#242424] text-[#F7F6F2] hover:bg-[#2e2e2e] font-medium text-xs tracking-tight border border-white/10 active:scale-[0.98] transition-transform"
        >
          <FileText className="w-4 h-4 mb-1 text-[#FF5500]" />
          <span>Request Tow</span>
        </button>

        <a
          id="mobile-bar-directions-btn"
          href={BUSINESS_INFO.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#242424] text-[#F7F6F2] hover:bg-[#2e2e2e] font-medium text-xs tracking-tight border border-white/10 active:scale-[0.98] transition-transform"
        >
          <Navigation className="w-4 h-4 mb-1 text-zinc-400" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}
