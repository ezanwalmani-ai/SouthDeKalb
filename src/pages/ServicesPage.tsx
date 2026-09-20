import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div id="services-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <span>Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Towing &amp; Transport Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Professional towing, vehicle transport, and storage services based out of Lithonia, GA. We handle each vehicle with proper equipment, secure procedures, and clear communication.
          </p>
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={`service-detail-${service.id}`}
                className="bg-[#161616] rounded-2xl border border-white/10 overflow-hidden shadow-xl p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-64 sm:h-80 shadow-md">
                      <img
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded bg-[#111111]/80 backdrop-blur-md text-white text-xs font-mono font-semibold border border-white/15">
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#FF5500] block mb-1">
                        Service #{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Highlights
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onNavigate('request-tow')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                      >
                        <span>Request This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-zinc-200 text-xs sm:text-sm font-medium border border-white/10 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>Call ({BUSINESS_INFO.phone})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Need custom vehicle transport or immediate towing?
          </h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto">
            Contact our office directly. We will confirm equipment availability and route planning right away.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('request-tow')}
              className="px-6 py-3 rounded-lg bg-[#FF5500] text-white font-bold text-sm hover:bg-[#ff661a] transition-colors"
            >
              Request a Tow
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-lg bg-[#262626] text-white font-semibold text-sm hover:bg-[#303030] transition-colors border border-white/10"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
