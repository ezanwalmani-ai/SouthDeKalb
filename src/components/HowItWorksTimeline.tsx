import { PhoneCall, MapPin, Truck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HowItWorksProps {
  onRequestTowClick?: () => void;
}

export default function HowItWorksTimeline({ onRequestTowClick }: HowItWorksProps) {
  const steps = [
    {
      number: '01',
      title: 'CONTACT US',
      desc: 'Call or submit a request.',
      detail: 'Reach our Lithonia dispatch desk directly at (404) 508-0246 or submit our online vehicle towing request with your location.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'SHARE THE DETAILS',
      desc: 'Provide location and vehicle information.',
      detail: 'Give us your exact pickup spot, destination, vehicle type, and any mechanical issues so we send the appropriate recovery equipment.',
      icon: MapPin,
    },
    {
      number: '03',
      title: 'GET MOVING',
      desc: 'Your towing or transport request can then be handled by the team.',
      detail: 'Our experienced operator arrives, secures the vehicle following rigorous safety standards, and completes transit to your repair facility, residence, or storage holding.',
      icon: Truck,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 md:py-28 bg-[#111111] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How It Works
          </h2>
          <p className="text-base text-zinc-300 mt-4 leading-relaxed max-w-xl">
            Three simple steps to coordinate dependable vehicle towing, transport, or storage in Lithonia and South DeKalb.
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-16 border-l-2 border-white/10 space-y-12 sm:space-y-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                id={`timeline-step-${step.number}`}
                className="relative group"
              >
                {/* Timeline Bullet Anchor on the vertical line */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[71px] top-1 w-6 h-6 rounded-full bg-[#111111] border-2 border-[#FF5500] flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_10px_rgba(255,85,0,0.4)]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                </div>

                <div className="bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 hover:border-[#FF5500]/40 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#FF5500] shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#FF5500] font-bold tracking-wider">
                          STEP {step.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-4xl sm:text-5xl font-black font-mono text-zinc-700/60 group-hover:text-[#FF5500]/25 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Core Required Statement */}
                  <div className="text-base sm:text-lg font-bold text-zinc-100 mb-2">
                    {step.desc}
                  </div>

                  {/* Supporting Explanatory Detail */}
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {step.detail}
                  </p>

                  {idx === 0 && (
                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5500] hover:text-[#ff752b] transition-colors"
                      >
                        <span>Direct Dispatch: {BUSINESS_INFO.phone}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 sm:mt-16 pl-6 sm:pl-10 md:pl-16">
          {onRequestTowClick && (
            <button
              onClick={onRequestTowClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm tracking-tight shadow-xl shadow-[#FF5500]/20 transition-all active:scale-[0.99]"
            >
              <span>SUBMIT A TOWING REQUEST</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
