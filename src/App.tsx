import React, { useEffect, useState } from 'react';
import { StandardView } from './components/StandardView.tsx';
import { BonusView } from './components/BonusView.tsx';
import { Sparkles, Globe } from 'lucide-react';

export default function App() {
  // Helper to detect if current URL corresponds to bonus route
  const isBonusUrl = (): boolean => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const href = window.location.href.toLowerCase();

    return (
      path === '/bonus' ||
      path.startsWith('/bonus/') ||
      path.endsWith('/bonus') ||
      path.includes('/bonus') ||
      search.includes('bonus') ||
      hash.includes('bonus') ||
      href.includes('/bonus')
    );
  };

  const [currentRoute, setCurrentRoute] = useState<'standard' | 'bonus'>(() =>
    isBonusUrl() ? 'bonus' : 'standard'
  );

  // Sync route on URL changes and dynamically update title
  useEffect(() => {
    const handleLocationChange = () => {
      const isBonus = isBonusUrl();
      setCurrentRoute(isBonus ? 'bonus' : 'standard');
      if (typeof document !== 'undefined') {
        document.title = isBonus
          ? 'Mahadev Onlines — Exclusive VIP Bonus'
          : 'Mahadev Onlines — The Best in World';
      }
    };

    // Initial title setup
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Handler to navigate between routes
  const handleNavigate = (route: 'standard' | 'bonus') => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      try {
        const targetPath = route === 'bonus' ? '/bonus' : '/';
        window.history.pushState({ route }, '', targetPath);
        if (typeof document !== 'undefined') {
          document.title =
            route === 'bonus'
              ? 'Mahadev Onlines — Exclusive VIP Bonus'
              : 'Mahadev Onlines — The Best in World';
        }
      } catch {
        // Fallback for strict iframe environments
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Active Route View */}
      {currentRoute === 'bonus' ? (
        <BonusView onSwitchToStandard={() => handleNavigate('standard')} />
      ) : (
        <StandardView onSwitchToBonus={() => handleNavigate('bonus')} />
      )}

      {/* Floating Route Quick Switcher — dev/preview only, hidden in production build */}
      {import.meta.env.DEV && (
      <div
        id="preview-route-switcher"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-black/80 backdrop-blur-lg border border-amber-400/30 shadow-2xl text-xs select-none"
      >
        <span className="text-[10px] text-gray-400 font-semibold px-2 flex items-center gap-1">
          <Globe className="w-3 h-3 text-amber-400" />
          Route:
        </span>
        <button
          onClick={() => handleNavigate('standard')}
          className={`px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
            currentRoute === 'standard'
              ? 'bg-amber-500 text-black font-semibold shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          / (Standard)
        </button>
        <button
          onClick={() => handleNavigate('bonus')}
          className={`px-2.5 py-1 rounded-full font-medium transition-all flex items-center gap-1 cursor-pointer ${
            currentRoute === 'bonus'
              ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.6)]'
              : 'text-amber-300 hover:text-amber-100'
          }`}
        >
          <Sparkles className="w-2.5 h-2.5 text-amber-900" />
          /bonus (VIP Edition)
        </button>
      </div>
      )}
    </div>
  );
}
