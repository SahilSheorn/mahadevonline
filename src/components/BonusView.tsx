import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gift, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BonusViewProps {
  onSwitchToStandard?: () => void;
}

export const BonusView: React.FC<BonusViewProps> = ({ onSwitchToStandard }) => {
  const [countdown, setCountdown] = useState<number>(2);
  const [isRedirectPaused, setIsRedirectPaused] = useState<boolean>(false);
  const [redirectTriggered, setRedirectTriggered] = useState<boolean>(false);
  const [copiedBonus, setCopiedBonus] = useState<boolean>(false);

  // Bonus WhatsApp link with prefilled bonus inquiry
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
        console.log('Redirecting to WhatsApp Bonus:', err);
      }
    }
  }, [countdown, isRedirectPaused, redirectTriggered, whatsappUrl]);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('MAHADEVVIP');
    setCopiedBonus(true);
    setTimeout(() => setCopiedBonus(false), 2500);
  };

  return (
    <div
      id="mahadev-bonus-page"
      className="min-h-screen flex flex-col select-none relative overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 10%, #1e1338 0%, #0b071a 45%, #05030d 100%)',
      }}
    >
      {/* Dynamic Animated Ambient Background Glows */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, #d946ef 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-10 w-[450px] h-[450px] pointer-events-none rounded-full blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, #6366f1 60%, transparent 80%)',
        }}
      />

      {/* Floating Gold Sparkle Particles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '18%', size: 4, delay: 0 },
          { top: '25%', left: '82%', size: 6, delay: 1.2 },
          { top: '65%', left: '12%', size: 5, delay: 0.7 },
          { top: '78%', left: '88%', size: 3, delay: 2.1 },
          { top: '42%', left: '92%', size: 4, delay: 1.8 },
          { top: '55%', left: '6%', size: 6, delay: 0.4 },
          { top: '30%', left: '50%', size: 3, delay: 2.5 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.4, 0.8],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: pt.delay,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-gradient-to-tr from-amber-300 to-yellow-100 shadow-[0_0_12px_#fbbf24]"
            style={{
              top: pt.top,
              left: pt.left,
              width: pt.size,
              height: pt.size,
            }}
          />
        ))}
      </div>

      {/* Top Header */}
      <header
        id="bonus-header"
        className="w-full py-3.5 px-6 flex items-center justify-between border-b border-amber-500/20 bg-[#0c081e]/80 backdrop-blur-xl sticky top-0 z-30"
      >
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span
            id="bonus-domain"
            className="text-sm font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            onlinemahadev.shop/bonus
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-400/40 animate-pulse">
            <Sparkles className="w-2.5 h-2.5" />
            VIP Bonus
          </span>
        </div>

        {/* View Switcher button for instant preview toggle */}
        {onSwitchToStandard && (
          <button
            onClick={onSwitchToStandard}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-amber-200/70 hover:text-amber-200 border border-amber-400/20 hover:border-amber-400/50 bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full transition-all cursor-pointer"
          >
            ← View Standard Site
          </button>
        )}
      </header>

      {/* Main Hero Container */}
      <main
        id="bonus-main"
        className="flex-1 flex items-center justify-center min-h-[calc(100vh-8rem)] px-6 py-12 relative z-10"
      >
        <div className="relative text-center max-w-xl mx-auto flex flex-col items-center gap-6 w-full">
          {/* Logo with Deluxe Golden Halo */}
          <motion.div
            id="bonus-logo-wrapper"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing circular aura behind logo */}
            <div className="absolute w-44 h-44 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />
            <img
              id="bonus-logo-img"
              src="/logo.png"
              alt="Mahadev Onlines"
              className="relative z-10 block h-auto w-auto object-contain mx-auto drop-shadow-[0_0_35px_rgba(245,180,36,0.6)]"
              style={{ maxHeight: '140px', maxWidth: '280px' }}
              loading="eager"
            />
          </motion.div>

          {/* Celebratory VIP Bonus Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-amber-400/50 shadow-[0_0_20px_rgba(245,180,36,0.25)] text-amber-200 text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Gift className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span>EXCLUSIVE VIP BONUS ACTIVATED</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          </motion.div>

          {/* Dynamic Headline with Shimmering Gold Reflection */}
          <motion.h1
            id="bonus-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl font-extrabold tracking-wide"
            style={{
              fontFamily: 'var(--font-heading)',
              textShadow: '0 0 32px rgba(245, 180, 36, 0.55)',
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500">
              Mahadev The Best in World
            </span>
          </motion.h1>

          {/* Golden Divider with Center Diamond */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center justify-center gap-2 w-full max-w-[220px]"
          >
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
            <div className="w-2 h-2 rotate-45 bg-amber-300 shadow-[0_0_8px_#fde047]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
          </motion.div>

          {/* Description & Bonus Offer Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="space-y-3"
          >
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-lg font-medium">
              Claim your special welcome bonus &amp; 24/7 personalized VIP assistance on WhatsApp.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-amber-200/80">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30">
                <Zap className="w-3 h-3 text-amber-300" /> Instant Bonus Credit
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 100% Verified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-yellow-300" /> VIP Concierge
              </span>
            </div>
          </motion.div>

          {/* Promotional Bonus Code Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            onClick={handleCopyCode}
            className="group cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-dashed border-amber-400/60 transition-all duration-300 shadow-[0_0_15px_rgba(245,180,36,0.15)]"
          >
            <span className="text-xs text-amber-200 font-medium">Bonus Code:</span>
            <code className="font-mono font-bold tracking-widest text-amber-300 text-sm">
              MAHADEVVIP
            </code>
            {copiedBonus ? (
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3" /> Copied!
              </span>
            ) : (
              <span className="text-[11px] text-amber-400/80 group-hover:text-amber-200 underline">
                Tap to copy
              </span>
            )}
          </motion.div>

          {/* Deluxe WhatsApp CTA Button */}
          <motion.div
            id="bonus-cta-wrapper"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="pt-1 flex flex-col items-center w-full sm:w-auto"
          >
            <motion.a
              id="bonus-whatsapp-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 12px 30px -4px rgba(37, 211, 102, 0.6), 0 0 20px 2px rgba(245, 180, 36, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-white font-bold text-base transition-all duration-300 shadow-[0_6px_22px_0_rgba(37,211,102,0.45)] hover:brightness-110 cursor-pointer overflow-hidden border border-emerald-300/40"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              }}
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* WhatsApp Icon with Pulsing Online Radar */}
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

                {/* Pulsing online status radar indicator */}
                <span
                  id="bonus-online-indicator"
                  className="absolute -top-1 -right-1 flex h-2.5 w-2.5"
                  title="Online • Available Now"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-90" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300 border-[1.5px] border-emerald-700 shadow-[0_0_10px_#4ade80]" />
                </span>
              </div>

              <span className="tracking-wide text-shadow-sm">Claim Bonus on WhatsApp</span>

              {/* VIP Live Badge */}
              <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-black/25 text-[11px] font-bold tracking-wide text-amber-200 border border-amber-400/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-300" />
                </span>
                Active
              </span>
            </motion.a>
          </motion.div>

          {/* Countdown & Auto-Redirect Timer */}
          <motion.div
            id="bonus-redirect-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-1.5 pt-1"
          >
            <p className="text-xs text-amber-200/80 flex items-center gap-1">
              <span>Redirecting to WhatsApp for Bonus in</span>{' '}
              <span
                id="bonus-countdown-timer"
                className="font-bold text-sm tabular-nums text-amber-300"
              >
                {countdown}s
              </span>{' '}
              <span>…</span>
            </p>

            <div className="flex items-center gap-3 text-[11px] text-amber-300/60 pt-0.5">
              <button
                onClick={() => setIsRedirectPaused(!isRedirectPaused)}
                className="hover:text-amber-200 transition-colors underline cursor-pointer"
              >
                {isRedirectPaused ? 'Resume auto-redirect' : 'Pause auto-redirect'}
              </button>
              <span>•</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-200 transition-colors underline"
              >
                Claim instantly
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer
        id="bonus-footer"
        className="w-full py-4 px-6 text-center text-sm text-amber-300/60 border-t border-amber-500/20 bg-[#0c081e]/80 backdrop-blur-md relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto"
      >
        <span className="tracking-wider text-xs font-light">
          © 2026 Mahadev Onlines. All rights reserved.
        </span>

        {/* View Switcher in Footer */}
        {onSwitchToStandard && (
          <button
            onClick={onSwitchToStandard}
            className="text-xs text-amber-300/70 hover:text-amber-300 underline cursor-pointer transition-colors"
          >
            Switch to Standard View (onlinemahadev.shop)
          </button>
        )}
      </footer>
    </div>
  );
};
