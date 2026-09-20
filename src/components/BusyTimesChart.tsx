import { useState } from 'react';
import { BarChart3, Info } from 'lucide-react';
import { BUSY_TIMES_DATA } from '../data/businessData';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export default function BusyTimesChart() {
  const [selectedDay, setSelectedDay] = useState<string>('Friday');
  const dayData = BUSY_TIMES_DATA[selectedDay] || BUSY_TIMES_DATA['Friday'];

  return (
    <div id="busy-times-card" className="bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5500] mb-1.5">
            <BarChart3 className="w-4 h-4" />
            <span>DISPATCH ACTIVITY PATTERN</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            TYPICAL BUSY TIMES
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Illustrative activity pattern for demo purposes. Customer inquiry and dispatch activity can vary based on weather and road conditions.
          </p>
        </div>

        {/* Day Selector Tabs (Mon - Sun) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                id={`busy-day-selector-${day.toLowerCase()}`}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#FF5500] text-white shadow-md'
                    : 'bg-[#222222] text-zinc-400 hover:text-white hover:bg-[#2c2c2c] border border-white/5'
                }`}
              >
                {day.substring(0, 3)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 px-1">
          <span className="font-semibold text-zinc-300">Activity Level ({selectedDay})</span>
          <span className="text-[11px] font-mono text-zinc-400">Hours: 9:00 AM – 6:00 PM</span>
        </div>

        {/* Bar Visualization */}
        <div className="overflow-x-auto pb-3">
          <div className="min-w-[580px] h-52 flex items-end justify-between gap-2 sm:gap-3 pt-6 px-2 border-b border-white/10">
            {dayData.map((item, idx) => {
              const isPeak = item.percentage >= 80;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 bg-[#252525] text-white text-[11px] font-mono px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap border border-white/15 z-20">
                    {item.hour}: {item.label} ({item.percentage}%)
                  </div>

                  {/* Activity Bar */}
                  <div
                    className={`w-full max-w-[34px] rounded-t-sm transition-all duration-300 ease-out ${
                      isPeak
                        ? 'bg-[#FF5500] group-hover:bg-[#ff6c22] shadow-[0_0_12px_rgba(255,85,0,0.3)]'
                        : 'bg-zinc-700 group-hover:bg-zinc-600'
                    }`}
                    style={{ height: `${item.percentage}%` }}
                  />

                  {/* Hour Label */}
                  <span className="text-[11px] font-mono text-zinc-400 mt-2.5 whitespace-nowrap font-medium">
                    {item.hour}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend and Disclaimer */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF5500]" />
              <span className="text-zinc-300">Peak Volume Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-zinc-700" />
              <span className="text-zinc-300">Standard Daily Volume</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
            <Info className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
            <span>Illustrative activity pattern for demo purposes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
