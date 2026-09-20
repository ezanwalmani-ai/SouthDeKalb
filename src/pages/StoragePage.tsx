import { MapPin, Phone, FileCheck, Clock, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';
import BusinessHoursCard from '../components/BusinessHoursCard';

interface StoragePageProps {
  onNavigate: (page: PageId) => void;
}

export default function StoragePage({ onNavigate }: StoragePageProps) {
  return (
    <div id="storage-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Lithonia Facility</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Secure Vehicle Storage in Lithonia
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Need a place for a vehicle while arranging pickup, repair, release or transport? Contact South DeKalb Towing &amp; Transport for current storage information.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#222222] hover:bg-[#2b2b2b] text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Storage Facility Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Storage Facility Information
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Our storage facility is located at 7043 Rogers Lake Rd in Lithonia, Georgia. We provide organized holding bays for vehicles awaiting owner pickup, insurance inspection, mechanical assessment, or coordinated transport.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1D1D1D] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileCheck className="w-4 h-4 text-[#FF5500]" />
                  <span>Required for Vehicle Release</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  To ensure lawful chain of custody and protect property owners, all vehicle releases require:
                </p>
                <ul className="text-xs text-zinc-400 space-y-1 pl-5 list-disc">
                  <li>Valid government-issued photo identification (Driver&apos;s license or state ID)</li>
                  <li>Proof of vehicle ownership (Current registration or title matching claimant)</li>
                  <li>Authorized release documentation if picking up on behalf of a registered owner, lienholder, or insurance carrier</li>
                  <li>Settlement of applicable towing and daily storage fees during posted office hours</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1D1D1D] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock className="w-4 h-4 text-[#FF5500]" />
                  <span>Visiting During Posted Business Hours</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Vehicle access, property retrieval, and releases must be conducted during our regular posted business hours. Please check the schedule before arriving to ensure staff are present to process your paperwork.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-72 relative">
              <img
                src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800"
                alt="Lithonia vehicle storage yard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF5500] font-semibold block">
                  Holding Yard
                </span>
                <span className="text-sm font-bold text-white">
                  7043 Rogers Lake Rd, Lithonia, GA
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#161616] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>Facility Location &amp; Contact</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {BUSINESS_INFO.address.fullAddress}
              </p>
              <p className="text-xs text-zinc-400">
                Main Line: <span className="text-white font-medium">{BUSINESS_INFO.phone}</span>
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF5500] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Directions in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours Section */}
        <BusinessHoursCard />

        {/* Storage FAQ Quick Module */}
        <div className="mt-16 bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Common Storage Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-300">
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/5 space-y-2">
              <h3 className="font-semibold text-white">Can I pick up personal items from my vehicle?</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Yes, registered owners may retrieve essential personal property during regular office hours upon presenting valid government photo identification and proof of vehicle ownership.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/5 space-y-2">
              <h3 className="font-semibold text-white">What payment methods are accepted for release?</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Please contact the office directly at (404) 508-0246 for current accepted payment methods and specific release requirements.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
            >
              Contact Office Regarding Vehicle Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
