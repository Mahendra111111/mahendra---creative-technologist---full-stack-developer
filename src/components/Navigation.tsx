import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onNavigate: (target: string) => void;
  onOpenContact: () => void;
  currentView: 'home' | 'project';
  onBackToHome?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  onOpenContact,
  currentView,
  onBackToHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentView === 'project' && onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        onNavigate(sectionId);
      }, 100);
    } else {
      onNavigate(sectionId);
    }
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#EBE9E4]/90 backdrop-blur-md border-b border-[#000000]/10 py-3'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1521px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Left: Geometric Monogram & Identity */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE] rounded-sm"
            aria-label="Mahendra Portfolio Home"
          >
            {/* Minimal brutalist monogram mark */}
            <div className="w-8 h-8 bg-[#000000] text-white flex items-center justify-center font-display text-lg tracking-wider group-hover:bg-[#0000EE] transition-colors duration-300">
              M
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm tracking-tight block uppercase text-[#000000] leading-none">
                MAHENDRA
              </span>
              <span className="text-[10px] font-mono text-[#555555] tracking-widest uppercase">
                DEV // ARCHITECT
              </span>
            </div>
          </button>

          {/* Center: Editorial Nav Links (Desktop) */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-12"
          >
            {[
              { id: 'work', label: 'WORK', count: '05' },
              { id: 'services', label: 'SERVICES', count: '05' },
              { id: 'about', label: 'ABOUT', count: 'SYS' },
              { id: 'faq', label: 'FAQ', count: '07' }
            ].map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="group relative flex items-baseline gap-1.5 py-1 text-xs font-mono font-semibold tracking-wider text-[#000000] hover:text-[#0000EE] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0000EE]"
              >
                <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
                  {item.label}
                </span>
                <span className="text-[9px] text-[#555555] group-hover:text-[#0000EE]">
                  [{item.count}]
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0000EE] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            ))}
          </nav>

          {/* Right: Primary Contact Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              id="nav-contact-cta"
              onClick={onOpenContact}
              className="group relative overflow-hidden bg-[#000000] text-white px-4 md:px-5 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-[8px] hover:bg-[#0000EE] transition-colors duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE]"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 border border-[#000000]/20 flex items-center justify-center rounded-[8px] text-[#000000] hover:bg-[#DFDDD9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#EBE9E4] pt-24 px-6 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div className="text-[11px] font-mono text-[#555555] tracking-widest border-b border-[#000000]/15 pb-2">
              PORTFOLIO // NAVIGATION
            </div>

            <nav className="flex flex-col space-y-4">
              {[
                { id: 'work', label: 'SELECTED WORK', num: '01' },
                { id: 'services', label: 'WHAT I BUILD', num: '02' },
                { id: 'about', label: 'ABOUT MAHENDRA', num: '03' },
                { id: 'technologies', label: 'TECH ECOSYSTEM', num: '04' },
                { id: 'process', label: 'HOW I WORK', num: '05' },
                { id: 'faq', label: 'QUESTIONS & FAQ', num: '06' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between py-3 border-b border-[#000000]/10 text-left group"
                >
                  <span className="font-display text-4xl text-[#000000] tracking-tight group-hover:text-[#0000EE] transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#555555]">{link.num}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#000000]/15 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-[#0000EE] text-white py-4 rounded-[8px] font-mono font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex justify-between text-xs font-mono text-[#555555]">
              <span>INDIA // REMOTE WORLDWIDE</span>
              <span>2026 EDITION</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
