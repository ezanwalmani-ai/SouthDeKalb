import { MapPin, Phone, Compass, Navigation } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/businessData';
import { PageId } from '../types';

interface ServiceAreaPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ServiceAreaPage({ onNavigate }: ServiceAreaPageProps) {
  return (
    <div id="service-area-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Coverage &amp; Logistics</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Serving Lithonia and the South DeKalb Area
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Headquartered at 7043 Rogers Lake Rd in Lithonia, GA. We handle local towing, breakdowns, scheduled transports, and storage transfers throughout our primary corridor.
          </p>

          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call to confirm availability in your area ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Map & Corridor Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Interactive Map Visualizer */}
          <div className="lg:col-span-7 bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Regional Corridor Map
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Lithonia hub &amp; South DeKalb arterial routes
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FF5500]/10 text-[#FF5500] text-xs font-mono font-bold">
                  I-20 / GA-124
                </span>
              </div>

              {/* Graphic Map Rendering representing Lithonia Hub and Highway Corridors */}
              <div className="relative w-full h-72 sm:h-84 bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden p-4 flex items-center justify-center">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Major Interstate Highway Vector line (I-20 corridor) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10%" y1="75%" x2="90%" y2="25%" stroke="#FF5500" strokeWidth="3" strokeDasharray="6 4" />
                  <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#444" strokeWidth="2" />
                  <circle cx="58%" cy="45%" r="65" fill="rgba(255,85,0,0.06)" stroke="#FF5500" strokeWidth="1" />
                </svg>

                {/* Primary Hub Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF5500] text-white flex items-center justify-center shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="mt-2 bg-[#1A1A1A] px-3 py-1 rounded-md border border-white/20 text-center shadow-lg">
                    <div className="text-xs font-bold text-white">South DeKalb Hub</div>
                    <div className="text-[10px] text-zinc-400">7043 Rogers Lake Rd, Lithonia</div>
                  </div>
                </div>

                {/* Surrounding Node Badges */}
                <div className="absolute top-6 left-6 bg-[#161616]/90 border border-white/10 px-2.5 py-1 rounded text-[11px] text-zinc-300">
                  Decatur / Central DeKalb
                </div>
                <div className="absolute top-8 right-6 bg-[#161616]/90 border border-white/10 px-2.5 py-1 rounded text-[11px] text-zinc-300">
                  Snellville / Gwinnett
                </div>
                <div className="absolute bottom-6 left-10 bg-[#161616]/90 border border-white/10 px-2.5 py-1 rounded text-[11px] text-zinc-300">
                  Stonecrest / I-20
                </div>
                <div className="absolute bottom-6 right-8 bg-[#161616]/90 border border-white/10 px-2.5 py-1 rounded text-[11px] text-zinc-300">
                  Conyers / Rockdale
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>GPS: 33.7258° N, 84.0935° W</span>
              <a
                href={BUSINESS_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5500] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Navigate via Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Hub Details */}
          <div className="lg:col-span-5 bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF5500] mb-1">
                Primary Base Location
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Lithonia, Georgia
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                South DeKalb Towing &amp; Transport operates directly from 7043 Rogers Lake Rd in Lithonia. Our equipment is positioned for rapid staging across local roads, residential areas, commercial centers, and highway off-ramps.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1F1F1F] border border-white/5 space-y-2 text-xs text-zinc-300">
              <div className="font-semibold text-white">Service Area Verification Notice</div>
              <p className="leading-relaxed text-zinc-400">
                To maintain accurate expectations, we do not claim guaranteed response times for every distant municipality without verifying real-time dispatch volume. Please call to confirm current driver location.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('request-tow')}
                className="w-full py-3 rounded-lg bg-[#252525] hover:bg-[#303030] text-white font-semibold text-sm border border-white/15 transition-colors"
              >
                Request Tow in South DeKalb
              </button>
            </div>
          </div>
        </div>

        {/* Service Area Examples List */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              Surrounding Communities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Service Area Examples
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Representative municipalities and corridors served from our Lithonia facility. Call our dispatch to confirm current truck availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#161616] border border-white/10 hover:border-[#FF5500]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">
                      {area.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[#FF5500] font-medium">
                      {area.county}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3 font-medium">
                    {area.distanceApprox}
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {area.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                  Subject to driver availability
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
