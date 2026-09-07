import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="py-12 md:py-16 bg-[#EBE9E4] border-t border-[#000000]/15">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#000000]/15">
          {/* Left: Monogram & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#000000] text-white flex items-center justify-center font-display text-xl tracking-wider">
              M
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight uppercase text-[#000000]">
                MAHENDRA
              </div>
              <div className="text-[10px] font-mono text-[#555555] uppercase tracking-widest">
                FULL-STACK DEVELOPER &amp; CREATIVE TECHNOLOGIST
              </div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs font-mono font-semibold">
            {[
              { id: 'work', label: 'SELECTED WORK' },
              { id: 'services', label: 'SERVICES' },
              { id: 'about', label: 'ABOUT' },
              { id: 'technologies', label: 'TECHNOLOGY' },
              { id: 'process', label: 'PROCESS' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'CONTACT' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-[#000000] hover:text-[#0000EE] transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono font-bold text-[#000000] hover:text-[#0000EE] transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full border border-[#000000]/20 flex items-center justify-center group-hover:border-[#0000EE] group-hover:bg-[#0000EE] group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Bottom Bar: Copyright & Location metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <div>
            © {new Date().getFullYear()} MAHENDRA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>DESIGN LANGUAGE // EDITORIAL BRUTALISM</span>
            <span>•</span>
            <span className="text-[#000000] font-semibold">BUILT WITH REACT 19 &amp; THREE.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
