import { Shield, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const whyUsPoints = [
    {
      title: 'Clear Communication',
      desc: 'We tell you direct arrival windows, required documentation, and straightforward pricing without runarounds.',
    },
    {
      title: 'Convenient Location',
      desc: 'Situated at 7043 Rogers Lake Rd in Lithonia, GA, offering direct access across South DeKalb transportation routes.',
    },
    {
      title: 'Towing & Transport',
      desc: 'Equipped to handle passenger vehicles, SUVs, light trucks, and breakdown transports safely.',
    },
    {
      title: 'Vehicle Storage',
      desc: 'Dedicated holding yard for vehicles pending repair, release, insurance adjusters, or owner pickup.',
    },
    {
      title: 'Local Service',
      desc: 'A real local presence in Lithonia, Georgia committed to straightforward, polite, and responsive assistance.',
    },
  ];

  return (
    <div id="about-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Company Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Local Towing &amp; Transport. Straightforward Service.
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            South DeKalb Towing &amp; Transport, Inc. (DBA: South DeKalb Transport &amp; Storage) provides towing, transportation, and vehicle storage services from its Lithonia, Georgia location.
          </p>
        </div>

        {/* Core Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Core Approach
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                When a vehicle breaks down, suffers an accident, or requires secure storage, you need clear information and dependable help.
              </p>
              <p>
                From our facility at 7043 Rogers Lake Rd in Lithonia, GA, our team coordinates vehicle recoveries, point-to-point transports, and organized vehicle storage. Whether you need a vehicle moved across town, towed from a roadside shoulder, or stored safely while insurance procedures are handled, our goal is simple: make the process clear and easy to navigate.
              </p>
              <p>
                We prioritize polite customer interactions, respectful treatment of your property, and compliance with Georgia Department of Public Safety regulations.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Contact Our Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#222222] hover:bg-[#2b2b2b] text-white font-medium text-sm border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>(404) 508-0246</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=900"
                alt="South DeKalb towing recovery unit"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#161616]/90 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2 text-[#FF5500] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>7043 Rogers Lake Rd • Lithonia, GA 30058</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Serving Lithonia and surrounding South DeKalb communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Customers Contact Us */}
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-12 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              Operational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Why Customers Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#1D1D1D] border border-white/5 space-y-2 hover:border-[#FF5500]/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Verification Notice */}
        <div className="p-6 rounded-xl bg-[#141414] border border-white/10 text-xs text-zinc-400 space-y-2 text-center max-w-2xl mx-auto">
          <p className="font-semibold text-zinc-300">
            Official Entity Registration:
          </p>
          <p>
            {BUSINESS_INFO.legalName} • DBA: {BUSINESS_INFO.dba}
          </p>
          <p>
            Operating Facility: {BUSINESS_INFO.address.fullAddress}
          </p>
        </div>
      </div>
    </div>
  );
}
