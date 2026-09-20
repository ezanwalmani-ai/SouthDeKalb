interface SouthDeKalbLogoProps {
  variant?: 'dark' | 'light';
  iconOnly?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * South DeKalb Towing & Transport Logo Concept
 * Features a custom geometric emblem fusing:
 * - The letter 'S'
 * - Heavy-duty forged recovery towing hook
 * - Perspective highway/road lane division cut
 * - Dynamic mechanical vector angles
 *
 * Designed exclusively as an authentic website redesign concept.
 */
export default function SouthDeKalbLogo({
  variant = 'dark',
  iconOnly = false,
  className = '',
  size = 'md',
}: SouthDeKalbLogoProps) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const primaryTextSizes = {
    sm: 'text-xs tracking-[0.12em]',
    md: 'text-sm sm:text-base tracking-[0.14em]',
    lg: 'text-lg sm:text-xl tracking-[0.16em]',
  };

  const descriptorSizes = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.24em]',
    lg: 'text-xs tracking-[0.26em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Custom Geometric Towing Emblem */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
          isDark
            ? 'bg-[#181818] border border-white/15 shadow-sm'
            : 'bg-zinc-100 border border-zinc-300 shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5"
          aria-hidden="true"
        >
          {/* Base S-Hook Geometric Construction */}
          {/* Top curve of S folding into hook beak */}
          <path
            d="M13 14C13 10.6863 15.6863 8 19 8H28C30.2091 8 32 9.79086 32 12C32 14.2091 30.2091 16 28 16H20C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24H25C28.866 24 32 27.134 32 31C32 34.866 28.866 38 25 38H15C12.7909 38 11 36.2091 11 34C11 31.7909 12.7909 30 15 30H24C25.6569 30 27 28.6569 27 27C27 25.3431 25.6569 24 24 24H19C15.6863 24 13 21.3137 13 18V14Z"
            fill={isDark ? '#F6F5F1' : '#111111'}
          />

          {/* High-visibility Safety Orange Hook Tip Accent */}
          <path
            d="M29 8H31.5C33.433 8 35 9.567 35 11.5V12.5C35 14.433 33.433 16 31.5 16H29V8Z"
            fill="#FF5500"
          />

          {/* Road / Perspective Divider Channel Cutting Through */}
          <path
            d="M22 6L18 38"
            stroke={isDark ? '#181818' : '#F4F4F5'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Small Tow Hitch Pin Center */}
          <circle
            cx="22"
            cy="22"
            r="2.25"
            fill="#FF5500"
          />
        </svg>
      </div>

      {/* Wordmark Hierarchy */}
      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span
            className={`font-black uppercase leading-tight transition-colors ${primaryTextSizes[size]} ${
              isDark ? 'text-[#F6F5F1] group-hover:text-white' : 'text-[#111111] group-hover:text-black'
            }`}
          >
            SOUTH DEKALB
          </span>
          <span
            className={`font-semibold uppercase leading-tight mt-0.5 ${descriptorSizes[size]} ${
              isDark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-zinc-600'
            }`}
          >
            TOWING &amp; TRANSPORT
          </span>
        </div>
      )}
    </div>
  );
}
