import React from 'react';

interface MahadevLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const MahadevLogo: React.FC<MahadevLogoProps> = ({
  className = '',
  width = 280,
  height = 140,
}) => {
  return (
    <div
      id="mahadev-logo-container"
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      style={{ maxWidth: width, maxHeight: height }}
    >
      <svg
        id="mahadev-logo-svg"
        viewBox="0 0 360 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_20px_rgba(245,180,36,0.35)]"
      >
        <defs>
          {/* Gold metallic linear gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1B8" />
            <stop offset="30%" stopColor="#F5C036" />
            <stop offset="70%" stopColor="#D9971E" />
            <stop offset="100%" stopColor="#FFDE82" />
          </linearGradient>

          {/* Accent secondary gold gradient */}
          <linearGradient id="brightGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DF9B17" />
            <stop offset="50%" stopColor="#FFEAA5" />
            <stop offset="100%" stopColor="#F3B72A" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Trishul & Sun Emblem */}
        <g transform="translate(180, 42)" id="logo-emblem" filter="url(#softGlow)">
          {/* Outer Sun Rays / Radiance ring */}
          <circle cx="0" cy="0" r="32" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="0" cy="0" r="28" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.4" />
          
          {/* Trishul (Trident) symbol */}
          {/* Center prong */}
          <path
            d="M 0 -22 L 3 -10 L 1.2 -10 L 1.2 16 L -1.2 16 L -1.2 -10 L -3 -10 Z"
            fill="url(#goldGradient)"
          />
          {/* Center spear tip diamond */}
          <polygon points="0,-25 4,-18 0,-14 -4,-18" fill="url(#brightGold)" />

          {/* Left curved prong */}
          <path
            d="M -2 -4 C -7 -6, -14 -14, -14 -20 C -12 -18, -8 -13, -4 -9 L -2 -9 Z"
            fill="url(#goldGradient)"
          />
          <circle cx="-13" cy="-19" r="1.5" fill="url(#brightGold)" />

          {/* Right curved prong */}
          <path
            d="M 2 -4 C 7 -6, 14 -14, 14 -20 C 12 -18, 8 -13, 4 -9 L 2 -9 Z"
            fill="url(#goldGradient)"
          />
          <circle cx="13" cy="-19" r="1.5" fill="url(#brightGold)" />

          {/* Crescent Damru Base motif */}
          <path
            d="M -8 11 C -4 14, 4 14, 8 11 C 6 15, -6 15, -8 11 Z"
            fill="url(#brightGold)"
          />
          <circle cx="0" cy="6" r="2" fill="url(#brightGold)" />
        </g>

        {/* Decorative Wings / Flourishes */}
        <path
          d="M 125 42 Q 145 36 160 42 Q 148 48 132 46 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M 235 42 Q 215 36 200 42 Q 212 48 228 46 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />

        {/* Little decorative stars */}
        <polygon points="105,42 108,44 105,46 102,44" fill="url(#goldGradient)" />
        <polygon points="255,42 258,44 255,46 252,44" fill="url(#goldGradient)" />

        {/* Main Text: MAHADEV */}
        <text
          x="180"
          y="108"
          textAnchor="middle"
          fill="url(#goldGradient)"
          fontFamily="'Cinzel', Georgia, serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="8"
          className="tracking-[0.25em]"
        >
          MAHADEV
        </text>

        {/* Subtitle: ONLINES */}
        <text
          x="180"
          y="132"
          textAnchor="middle"
          fill="#FFF"
          opacity="0.92"
          fontFamily="'Outfit', sans-serif"
          fontSize="12.5"
          fontWeight="600"
          letterSpacing="8"
        >
          ONLINES
        </text>

        {/* Bottom golden line dividers */}
        <line x1="80" y1="144" x2="150" y2="144" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.6" />
        <polygon points="180,142.5 183,144 180,145.5 177,144" fill="url(#goldGradient)" />
        <line x1="210" y1="144" x2="280" y2="144" stroke="url(#goldGradient)" strokeWidth="0.8" opacity="0.6" />
      </svg>
    </div>
  );
};
