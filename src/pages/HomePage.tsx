import { useState } from 'react';
import { ArrowRight, Phone, Navigation, CheckCircle2, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS, FAQS, SERVICE_AREAS } from '../data/businessData';
import { PageId } from '../types';
import BusinessHoursCard from '../components/BusinessHoursCard';
import BusyTimesChart from '../components/BusyTimesChart';
import HowItWorksTimeline from '../components/HowItWorksTimeline';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredService = SERVICES.find((s) => s.featured) || SERVICES[0];
  const otherServices = SERVICES.filter((s) => !s.featured);
  const realReview = REVIEWS.find((r) => r.isVerifiedRealCustomer) || REVIEWS[0];

  // Accordion state for FAQ section
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="home-page-container" className="min-h-screen bg-[#111111] text-[#F6F5F1]">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Cinematic Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=85&w=1920"
            alt="South DeKalb commercial flatbed tow truck"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1] scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#111111]/50 to-[#111111]/95" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-wider text-[#FF5500] uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>SOUTH DEKALB • LITHONIA, GEORGIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Reliable Towing When You Need It Most.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Professional towing, vehicle transport and storage services in Lithonia and the surrounding South DeKalb area.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Primary CTA */}
            <button
              id="hero-request-tow-btn"
              onClick={() => onNavigate('request-tow')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm tracking-tight shadow-xl shadow-[#FF5500]/25 transition-all active:translate-y-[1px] group"
            >
              <span>REQUEST A TOW</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Phone Button */}
            <a
              id="hero-phone-cta-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Third small option: Get Directions */}
          <div className="pt-2">
            <a
              id="hero-get-directions-btn"
              href={BUSINESS_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>GET DIRECTIONS (7043 Rogers Lake Rd, Lithonia, GA 30058)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY CTA SECTION */}
      <section id="emergency-contact-strip" className="bg-[#1A1A1A] border-y border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
              <span>Need a Tow?</span>
            </h2>
            <p className="text-sm text-zinc-300 max-w-xl">
              Tell us where you are and what you need. Call or submit a towing request.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              id="strip-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm tracking-tight shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>

            <button
              id="strip-request-btn"
              onClick={() => onNavigate('request-tow')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#252525] hover:bg-[#303030] text-[#F6F5F1] font-semibold text-sm border border-white/10 transition-colors"
            >
              <span>REQUEST A TOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services-preview-section" className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Towing and transport without the runaround.
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              We provide dependable towing, transport, and facility storage for personal vehicles, commercial accounts, and roadside emergencies.
            </p>
          </div>

          {/* Editorial Service Layout (Featured Service + Distinct Supporting Services) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Featured Service: Local Towing */}
            <div
              id="service-card-featured"
              className="lg:col-span-7 bg-[#171717] rounded-2xl border border-white/10 overflow-hidden group hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={featuredService.imageUrl}
                  alt={featuredService.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {featuredService.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {featuredService.title}
                  </h3>
                  <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                    {featuredService.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-300">
                    {featuredService.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    id="featured-service-learn-more"
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5500] group-hover:text-[#ff7733] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onNavigate('request-tow')}
                    className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    Request this service &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Supporting Stacked Services (Vehicle Transport & Storage) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {otherServices.slice(0, 2).map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-[#171717] rounded-xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#FF5500]/40 transition-colors group shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {service.tagline}
                      </span>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#FF5500] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(service.id === 'vehicle-storage' ? 'storage' : 'services')}
                      className="text-xs font-bold text-[#FF5500] hover:underline"
                    >
                      Service Details
                    </button>
                    <span className="text-[11px] text-zinc-500 font-mono">Lithonia, GA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid for remaining services (Accident Recovery, Impound, Roadside) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.slice(2).map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-[#161616] rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {service.tagline}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#FF5500] hover:text-[#ff7733] inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <HowItWorksTimeline onRequestTowClick={() => onNavigate('request-tow')} />

      {/* 5. ABOUT SECTION */}
      <section id="about-preview-section" className="py-20 md:py-28 bg-[#141414] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Authentic Photography Asset */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=900"
                  alt="South DeKalb Transport & Storage commercial facility"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111111]/85 backdrop-blur-md border border-white/10 text-xs text-zinc-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">7043 Rogers Lake Rd</span>
                    <span className="text-zinc-400">Lithonia, GA 30058</span>
                  </div>
                  <span className="text-[#FF5500] font-mono text-xs font-bold">Office &amp; Storage</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block">
                ABOUT SOUTH DEKALB
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Local service. Straightforward help.
              </h2>
              <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
                <p>
                  South DeKalb Towing &amp; Transport provides towing, transportation and vehicle storage services from its Lithonia location.
                </p>
                <p>
                  Whether you need a vehicle moved, stored or towed, the goal is simple: make the process clear and easy to navigate.
                </p>
              </div>

              {/* Verified Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-lg bg-[#1B1B1B] border border-white/5">
                  <div className="text-xs font-bold uppercase text-[#FF5500] mb-1">Direct Communication</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Clear answers on arrival windows, towing requirements, and vehicle holding status.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1B1B1B] border border-white/5">
                  <div className="text-xs font-bold uppercase text-[#FF5500] mb-1">Local Facility</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Conveniently positioned on Rogers Lake Rd to serve Lithonia and South DeKalb corridors.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="about-learn-more-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-white font-semibold text-sm border border-white/15 transition-colors"
                >
                  <span>Read About Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS HOURS SECTION */}
      <BusinessHoursCard />

      {/* 7. TYPICAL BUSY TIMES DATA VISUALIZATION */}
      <section id="busy-times-section" className="py-16 md:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusyTimesChart />
        </div>
      </section>

      {/* 8. CUSTOMER FEEDBACK (REVIEWS) SECTION */}
      <section id="reviews-section" className="py-20 md:py-24 bg-[#141414] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
              CUSTOMER EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Real Customer Feedback
            </h2>
            <p className="text-base text-zinc-300">
              Straightforward service during stressful vehicle situations.
            </p>
          </div>

          {/* Featured Authentic Review */}
          <div className="max-w-3xl mx-auto bg-[#181818] rounded-2xl border border-white/15 p-8 sm:p-12 shadow-2xl relative">
            <div className="flex items-center gap-1 text-[#FF5500] mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-zinc-200 font-medium italic leading-relaxed mb-6">
              &quot;{realReview.content}&quot;
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  {realReview.author}
                </div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  {realReview.label}
                </div>
              </div>

              <button
                onClick={() => onNavigate('reviews')}
                className="text-xs font-bold text-[#FF5500] hover:underline"
              >
                View feedback notes &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SERVICE AREA SECTION */}
      <section id="service-area-preview" className="py-20 md:py-24 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
              COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Serving Lithonia and South DeKalb.
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Based at 7043 Rogers Lake Rd, we provide quick dispatch across the I-20 corridor and neighboring communities.
            </p>
          </div>

          {/* Service Area Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {SERVICE_AREAS.slice(0, 4).map((area) => (
              <div
                key={area.name}
                className="bg-[#171717] rounded-xl border border-white/10 p-5 hover:border-[#FF5500]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-[#FF5500]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold text-white text-base">{area.name}</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mb-1">{area.distanceApprox}</div>
                <p className="text-xs text-zinc-400 leading-relaxed">{area.note}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs text-zinc-400">
              Need transport beyond Lithonia? Contact dispatch to confirm availability.
            </span>
            <button
              onClick={() => onNavigate('service-area')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] hover:text-[#ff752b] transition-colors"
            >
              <span>Explore Complete Service Area</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faq-preview-section" className="py-20 md:py-24 bg-[#141414] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-zinc-300">
              Clear answers to the most common questions about our towing, transport, and storage services.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.slice(0, 5).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#191919] rounded-xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#FF5500] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#FF5500]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. FINAL CONTACT CTA */}
      <section id="bottom-cta-banner" className="py-20 md:py-24 bg-[#171717] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block">
            READY TO GET MOVING?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to arrange a tow or vehicle transport?
          </h2>
          <p className="text-base text-zinc-300 max-w-xl mx-auto">
            Call our Lithonia dispatch desk directly or send your vehicle information online.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('request-tow')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-xl shadow-[#FF5500]/20 transition-all active:scale-[0.99]"
            >
              <span>REQUEST A TOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-white font-bold text-sm border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>CALL (404) 508-0246</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
