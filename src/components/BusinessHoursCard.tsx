import { useState, useEffect } from 'react';
import { Phone, Navigation, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_HOURS } from '../data/businessData';
import { getBusinessStatus, BusinessStatusResult } from '../utils/hoursHelper';

export default function BusinessHoursCard() {
  const [status, setStatus] = useState<BusinessStatusResult>(() => getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="business-hours-section"
      className="py-20 md:py-28 bg-[#141414] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Large Heading & Editorial Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-3">
                SCHEDULE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F6F5F1] leading-[1.12]">
                Hours that work around your day.
              </h2>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed max-w-md">
              Visit or contact us during our posted business hours. For vehicle pickups, storage releases, or transport arrangements, our Lithonia facility is staffed seven days a week.
            </p>

            {/* Authentic Lithonia Facility Reference Photograph */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#191919] shadow-lg group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=900"
                  alt="South DeKalb Transport & Storage facility at 7043 Rogers Lake Rd Lithonia GA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white tracking-wide">
                    7043 Rogers Lake Rd
                  </span>
                  <span className="font-mono text-[11px] text-zinc-300">
                    Lithonia, GA 30058
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span>Facility Office &amp; Storage Yard</span>
                <span className="text-[#FF5500] font-semibold">Every Day: 9 AM – 6 PM</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="hours-call-action-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white text-sm font-bold tracking-tight shadow-md transition-all active:scale-[0.99]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Desk</span>
              </a>

              <a
                id="hours-directions-link-btn"
                href={BUSINESS_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#202020] hover:bg-[#282828] text-zinc-200 text-sm font-semibold border border-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 text-zinc-400" />
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* RIGHT: Custom Branded Schedule Table with Thin Divider Lines */}
          <div className="lg:col-span-7 bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white uppercase">
                  Weekly Operating Schedule
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Consistent hours across all seven days
                </p>
              </div>

              {/* Subtle Live Local Indicator */}
              <div className="text-right">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Current Time (Lithonia)
                </div>
                <div className="text-sm font-mono text-zinc-200 font-semibold">
                  {status.currentTimeFormatted}
                </div>
              </div>
            </div>

            {/* Branded Schedule Rows */}
            <div className="divide-y divide-white/10 mt-2" id="branded-schedule-table">
              {BUSINESS_HOURS.map((dayItem) => {
                const isToday = dayItem.day === status.currentDay;
                return (
                  <div
                    key={dayItem.day}
                    className={`py-4 px-3 sm:px-4 rounded-lg transition-colors flex items-center justify-between ${
                      isToday
                        ? 'bg-white/[0.04] text-white shadow-inner'
                        : 'text-zinc-300 hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Day Identification */}
                    <div className="flex items-center gap-3">
                      {/* Subtle Orange Dot indicator for Today */}
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isToday
                            ? 'bg-[#FF5500] shadow-[0_0_8px_rgba(255,85,0,0.8)] scale-125'
                            : 'bg-transparent border border-white/20'
                        }`}
                        aria-hidden="true"
                      />

                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-zinc-400 w-10 uppercase tracking-wider font-semibold">
                          {dayItem.dayShort}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold ${
                            isToday ? 'text-white' : 'text-zinc-200'
                          }`}
                        >
                          {dayItem.day}
                        </span>
                      </div>

                      {isToday && (
                        <span className="ml-1 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30">
                          Today
                        </span>
                      )}
                    </div>

                    {/* Operational Hours */}
                    <div className="text-right">
                      <span
                        className={`font-mono text-sm sm:text-base tracking-tight ${
                          isToday ? 'text-white font-bold' : 'text-zinc-300'
                        }`}
                      >
                        {dayItem.formatted}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Schedule Transparency Note */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400">
              <span>Gate &amp; dispatch desk open daily from 9:00 AM to 6:00 PM.</span>
              <span className="text-zinc-400 font-mono">Tuesday: Open 9 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
