import { useId } from 'react';

interface ProjectVisualProps {
  variant: number;
  label: string;
}

function VisualLayout({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <g>
        <rect x="26" y="25" width="74" height="164" rx="8" fill="#111719" stroke="rgba(255,255,255,0.1)" />
        {[42, 60, 78, 96].map((y, index) => (
          <rect
            key={y}
            x="38"
            y={y}
            width={index === 1 ? 46 : 50}
            height="6"
            rx="3"
            fill={index === 1 ? '#D6F25C' : 'rgba(255,255,255,0.18)'}
          />
        ))}
        <rect x="116" y="25" width="258" height="44" rx="8" fill="#13191b" stroke="rgba(255,255,255,0.1)" />
        <rect x="130" y="40" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.48)" />
        <rect x="130" y="53" width="148" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
        {[0, 1, 2].map((column) => (
          <g key={column}>
            <rect
              x={116 + column * 88}
              y="82"
              width="80"
              height="72"
              rx="8"
              fill="#0f1517"
              stroke="rgba(255,255,255,0.09)"
            />
            <rect x={128 + column * 88} y="94" width="34" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
            <rect x={128 + column * 88} y="108" width="55" height="4" rx="2" fill="rgba(255,255,255,0.11)" />
            <rect
              x={128 + column * 88}
              y="128"
              width="56"
              height="14"
              rx="7"
              fill={column === 1 ? '#D6F25C' : 'rgba(255,255,255,0.09)'}
            />
          </g>
        ))}
        <rect x="116" y="166" width="258" height="23" rx="11.5" fill="rgba(214,242,92,0.12)" stroke="rgba(214,242,92,0.4)" />
        <rect x="130" y="174" width="84" height="7" rx="3.5" fill="#D6F25C" />
      </g>
    );
  }

  if (variant === 1) {
    return (
      <g>
        <rect x="26" y="25" width="348" height="164" rx="10" fill="#101517" stroke="rgba(255,255,255,0.09)" />
        <rect x="42" y="40" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
        <rect x="42" y="54" width="140" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        {[0, 1, 2, 3, 4, 5, 6].map((bar) => {
          const heights = [34, 52, 43, 68, 58, 84, 96];
          return (
            <rect
              key={bar}
              x={52 + bar * 44}
              y={165 - heights[bar]}
              width="20"
              height={heights[bar]}
              rx="5"
              fill={bar === 6 ? '#D6F25C' : 'rgba(255,255,255,0.13)'}
            />
          );
        })}
        <path
          d="M52 128 C92 118 104 92 144 100 S204 86 238 70 S292 58 334 42"
          fill="none"
          stroke="#D6F25C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="334" cy="42" r="5" fill="#D6F25C" />
        <circle cx="334" cy="42" r="10" fill="none" stroke="rgba(214,242,92,0.35)" />
      </g>
    );
  }

  if (variant === 2) {
    return (
      <g>
        <rect x="146" y="18" width="108" height="176" rx="18" fill="#101517" stroke="rgba(255,255,255,0.14)" />
        <rect x="180" y="25" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
        <rect x="158" y="42" width="84" height="76" rx="8" fill="rgba(214,242,92,0.09)" stroke="rgba(214,242,92,0.28)" />
        <circle cx="200" cy="80" r="22" fill="rgba(214,242,92,0.35)" />
        <path d="M181 106 C190 92 210 92 219 106" fill="none" stroke="#D6F25C" strokeWidth="2" />
        <rect x="158" y="130" width="68" height="6" rx="3" fill="rgba(255,255,255,0.42)" />
        <rect x="158" y="143" width="84" height="5" rx="2.5" fill="rgba(255,255,255,0.13)" />
        <rect x="158" y="160" width="84" height="21" rx="10.5" fill="#D6F25C" />
        <rect x="63" y="66" width="58" height="42" rx="8" fill="#111719" stroke="rgba(255,255,255,0.1)" />
        <rect x="73" y="77" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
        <rect x="73" y="89" width="38" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
        <rect x="279" y="116" width="58" height="42" rx="8" fill="#111719" stroke="rgba(255,255,255,0.1)" />
        <rect x="289" y="127" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
        <rect x="289" y="139" width="38" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      </g>
    );
  }

  if (variant === 3) {
    return (
      <g>
        <rect x="44" y="25" width="164" height="164" rx="10" fill="#101517" stroke="rgba(255,255,255,0.1)" />
        <rect x="58" y="39" width="136" height="34" rx="6" fill="rgba(214,242,92,0.1)" stroke="rgba(214,242,92,0.28)" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            <rect x="58" y={88 + row * 22} width="86" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
            <rect x="154" y={88 + row * 22} width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.11)" />
          </g>
        ))}
        <rect x="224" y="25" width="132" height="164" rx="10" fill="#f1f4ed" opacity="0.94" />
        <rect x="240" y="41" width="56" height="7" rx="3.5" fill="#303730" />
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <rect
            key={row}
            x="240"
            y={66 + row * 17}
            width={row === 5 ? 62 : 100 - row * 5}
            height="4"
            rx="2"
            fill="rgba(20,28,20,0.3)"
          />
        ))}
        <rect x="240" y="162" width="100" height="4" rx="2" fill="#303730" />
        <rect x="58" y="165" width="136" height="10" rx="5" fill="#D6F25C" />
      </g>
    );
  }

  if (variant === 4) {
    return (
      <g>
        {[0, 1, 2].map((column) => (
          <g key={column}>
            <rect
              x={28 + column * 120}
              y="25"
              width="108"
              height="120"
              rx="9"
              fill={column === 1 ? 'rgba(214,242,92,0.11)' : '#111719'}
              stroke={column === 1 ? 'rgba(214,242,92,0.35)' : 'rgba(255,255,255,0.1)'}
            />
            <rect x={42 + column * 120} y="40" width="80" height="62" rx="6" fill="rgba(255,255,255,0.055)" />
            <rect x={42 + column * 120} y="112" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.35)" />
            <rect x={42 + column * 120} y="124" width="36" height="5" rx="2.5" fill="#D6F25C" />
          </g>
        ))}
        <rect x="28" y="158" width="344" height="31" rx="15.5" fill="rgba(214,242,92,0.12)" stroke="rgba(214,242,92,0.4)" />
        <rect x="45" y="169" width="90" height="8" rx="4" fill="rgba(255,255,255,0.38)" />
        <rect x="300" y="166" width="56" height="15" rx="7.5" fill="#D6F25C" />
      </g>
    );
  }

  return (
    <g>
      <rect x="26" y="25" width="348" height="164" rx="10" fill="#101517" stroke="rgba(255,255,255,0.09)" />
      {[48, 144, 240, 336].map((x, index) => (
        <g key={x}>
          <rect
            x={x - 28}
            y="74"
            width="56"
            height="56"
            rx="12"
            fill={index === 1 || index === 3 ? 'rgba(214,242,92,0.12)' : '#151b1d'}
            stroke={index === 1 || index === 3 ? 'rgba(214,242,92,0.45)' : 'rgba(255,255,255,0.12)'}
          />
          <circle cx={x} cy="102" r="8" fill={index === 1 || index === 3 ? '#D6F25C' : 'rgba(255,255,255,0.3)'} />
          {index < 3 && (
            <path
              d={`M${x + 30} 102 H${x + 62}`}
              stroke="rgba(214,242,92,0.55)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          )}
        </g>
      ))}
      <rect x="72" y="151" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
      <rect x="168" y="151" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
      <rect x="264" y="151" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
    </g>
  );
}

export function ProjectVisual({ variant, label }: ProjectVisualProps) {
  const rawId = useId();
  const gradientId = `project-gradient-${rawId.replace(/:/g, '')}`;

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0e10]">
      <div className="brand-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-70" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-[#D6F25C]/80" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
            {label}
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-[#D6F25C] sm:inline">
            System view
          </span>
        </div>

        <svg viewBox="0 0 400 214" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D6F25C" stopOpacity="0.11" />
              <stop offset="100%" stopColor="#D6F25C" stopOpacity="0" />
            </linearGradient>
            <pattern id={`${gradientId}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="214" fill="#0a0e10" />
          <rect width="400" height="214" fill={`url(#${gradientId})`} />
          <rect width="400" height="214" fill={`url(#${gradientId}-grid)`} />
          <VisualLayout variant={variant % 6} />
        </svg>
      </div>
    </div>
  );
}
