import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface StandardViewProps {
  onSwitchToBonus?: () => void;
}

export const StandardView: React.FC<StandardViewProps> = ({ onSwitchToBonus }) => {
  const [countdown, setCountdown] = useState<number>(2);
  const [isRedirectPaused, setIsRedirectPaused] = useState<boolean>(false);
  const [redirectTriggered, setRedirectTriggered] = useState<boolean>(false);

  const whatsappUrl = 'https://wa.link/mahadevno1';

  // Countdown timer logic
  useEffect(() => {
    if (isRedirectPaused || redirectTriggered) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !redirectTriggered) {
      setRedirectTriggered(true);
      try {
        const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (!opened) {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        console.log('Redirecting to WhatsApp:', err);
      }
    }
  }, [countdown, isRedirectPaused, redirectTriggered, whatsappUrl]);

  return (
    <div id="mahadev-app" className="min-h-screen bg-background text-foreground flex flex-col select-none relative selection:bg-[#F5C036]/20 selection:text-[#F5C036]">
      {/* Top Header */}
      <header
        id="main-header"
        className="w-full py-3.5 px-6 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30"
      >
        <div className="flex items-center mx-auto sm:mx-0">
          <span
            id="header-domain"
            className="text-sm font-semibold tracking-wide transition-colors hover:brightness-125"
            style={{
              color: 'hsl(var(--primary))',
              fontFamily: 'var(--font-heading)',
            }}
          >
            onlinemahadev.shop
          </span>
        </div>

        {/* Route trigger for bonus page */}
        {onSwitchToBonus && (
          <button
            onClick={onSwitchToBonus}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 border border-amber-400/30 hover:border-amber-400/60 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Go to /bonus Edition</span>
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center min-h-[calc(100vh-8rem)] px-6 py-12 relative overflow-hidden"
      >
        {/* Ambient Radial Gradient Glow */}
        <div
          id="ambient-glow"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 50%, hsl(var(--primary) / 0.09) 0%, transparent 70%)',
          }}
        />

        {/* Subtle decorative background ring */}
        <div
          aria-hidden="true"
          className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-[hsl(var(--primary)/0.06)] pointer-events-none"
        />

        {/* Central Content Box */}
        <div
          id="hero-container"
          className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center gap-6 w-full"
        >
          {/* Logo with entry animation */}
          <motion.div
            id="logo-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <img
              id="site-main-logo"
              src="/logo.png"
              alt="Mahadev Onlines"
              className="block h-auto w-auto object-contain mx-auto drop-shadow-[0_0_24px_rgba(245,180,36,0.35)]"
              style={{ maxHeight: '140px', maxWidth: '280px' }}
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('airo-assets')) {
                  target.src = '/airo-assets/images/logo/horizontal';
                }
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-wider"
            style={{
              whiteSpace: 'pre-line',
              color: 'hsl(var(--primary))',
              fontFamily: 'var(--font-heading)',
              textShadow: '0 0 24px hsl(var(--primary) / 0.45)',
            }}
          >
            Mahadev The best in world
          </motion.h1>

          {/* Decorative Divider Line */}
          <motion.div
            id="hero-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeInOut' }}
            className="w-24 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
            }}
          />

          {/* Subtitle / Description */}
          <motion.p
            id="hero-subtext"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal max-w-md"
          >
            We are here to help you, contact us anytime.
          </motion.p>

          {/* WhatsApp Primary Call To Action */}
          <motion.div
            id="cta-wrapper"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col items-center"
          >
            <motion.a
              id="whatsapp-cta-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 shadow-[0_4px_16px_0_rgba(37,211,102,0.35)] hover:brightness-110 active:brightness-95 cursor-pointer relative"
              style={{
                background: 'hsl(var(--whatsapp-green))',
              }}
            >
              {/* WhatsApp Icon with Glowing Online Indicator */}
              <div className="relative flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                {/* Small Glowing Indicator Dot with Pulse (Ping) Wave */}
                <span
                  id="whatsapp-online-indicator"
                  className="absolute -top-1 -right-1 flex h-2.5 w-2.5"
                  title="Online • Available Now"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300 border-[1.5px] border-[hsl(var(--whatsapp-green))] shadow-[0_0_10px_#4ade80]" />
                </span>
              </div>

              <span className="whitespace-pre-line tracking-wide">Chat with us on WhatsApp</span>

              {/* Online Availability Badge */}
              <span
                id="online-status-badge"
                className="hidden sm:inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-black/20 text-[11px] font-medium tracking-wide text-emerald-100 border border-emerald-400/20 shadow-inner"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
                </span>
                Online
              </span>
            </motion.a>
          </motion.div>

          {/* Countdown timer & redirection message */}
          <motion.div
            id="redirect-notice-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-1.5"
          >
            <p id="redirect-text" className="text-xs text-muted-foreground flex items-center gap-1">
              <span>Redirecting to WhatsApp in</span>{' '}
              <span
                id="countdown-timer"
                className="font-semibold text-sm tabular-nums transition-transform duration-200"
                style={{ color: 'hsl(var(--primary))' }}
              >
                {countdown}s
              </span>{' '}
              <span>…</span>
            </p>

            {/* Subtle Controls for User Convenience */}
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60 pt-0.5">
              <button
                id="toggle-redirect-btn"
                onClick={() => setIsRedirectPaused(!isRedirectPaused)}
                className="hover:text-foreground transition-colors underline cursor-pointer"
              >
                {isRedirectPaused ? 'Resume auto-redirect' : 'Pause auto-redirect'}
              </button>
              <span>•</span>
              <a
                id="direct-open-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                Open immediately
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer
        id="main-footer"
        className="w-full py-4 px-6 text-center text-sm text-muted-foreground border-t border-border bg-background/80 backdrop-blur-md relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto"
      >
        <span
          id="footer-copyright"
          style={{ color: 'hsl(var(--primary) / 0.7)' }}
          className="tracking-wider text-xs font-light"
        >
          © 2026 Mahadev Onlines. All rights reserved.
        </span>

        {/* Switcher in Footer */}
        {onSwitchToBonus && (
          <button
            onClick={onSwitchToBonus}
            className="text-xs text-amber-400 hover:text-amber-300 underline cursor-pointer transition-colors"
          >
            Looking for Special Bonus? Open onlinemahadev.shop/bonus →
          </button>
        )}
      </footer>
    </div>
  );
};
