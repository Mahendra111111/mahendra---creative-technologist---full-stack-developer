import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  onOpenInquiry: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const email = 'mahendranagpure909@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-b border-[#000000]/15 bg-[#DFDDD9]/30">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-4">
          CONTACT // COLLABORATION // INITIATION
        </div>

        {/* Oversized High-Impact CTA Typography */}
        <h2 className="font-display text-[52px] sm:text-[76px] md:text-[100px] lg:text-[124px] uppercase tracking-tight text-[#000000] leading-[0.86] mb-8 select-none">
          HAVE A PROJECT <br />
          IN MIND? <br />
          <span className="text-[#0000EE]">LET'S BUILD IT.</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-[#000000]/80 font-normal max-w-3xl leading-relaxed mb-12 font-sans">
          Whether you need a ground-up SaaS product, an enterprise ERP operations suite, an AI-powered pipeline, or a high-impact interactive web experience, I am ready to architect and ship it.
        </p>

        {/* Action Controls & Email Module */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
          <button
            id="contact-start-project-btn"
            onClick={onOpenInquiry}
            className="group bg-[#0000EE] text-white px-8 py-4 rounded-[8px] font-mono text-sm uppercase tracking-wider font-bold hover:bg-[#0000BE] transition-all duration-300 flex items-center justify-center gap-3 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 border border-[#000000]/30 bg-[#EBE9E4] rounded-[8px] px-4 py-3 font-mono text-xs text-[#000000] justify-between">
            <a
              href={`mailto:${email}`}
              className="hover:text-[#0000EE] font-bold flex items-center gap-2"
              aria-label={`Send email to ${email}`}
            >
              <Mail className="w-4 h-4 text-[#0000EE]" />
              <span>{email}</span>
            </a>

            <button
              onClick={handleCopy}
              className="ml-4 p-1.5 hover:bg-[#DFDDD9] rounded-[4px] text-[#555555] hover:text-[#000000] transition-colors"
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {copied ? (
                <span className="text-emerald-600 flex items-center gap-1 text-[10px] font-bold">
                  <Check className="w-3.5 h-3.5" /> COPIED
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Social / Direct Connect Badges */}
        <div className="pt-10 border-t border-[#000000]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[#000000]/15 bg-[#EBE9E4] rounded-[8px] flex items-center justify-between hover:border-[#0000EE] hover:text-[#0000EE] transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Github className="w-4 h-4" />
              <span className="font-bold uppercase">GITHUB</span>
            </div>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[#000000]/15 bg-[#EBE9E4] rounded-[8px] flex items-center justify-between hover:border-[#0000EE] hover:text-[#0000EE] transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Linkedin className="w-4 h-4" />
              <span className="font-bold uppercase">LINKEDIN</span>
            </div>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[#000000]/15 bg-[#EBE9E4] rounded-[8px] flex items-center justify-between hover:border-[#0000EE] hover:text-[#0000EE] transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Twitter className="w-4 h-4" />
              <span className="font-bold uppercase">X / TWITTER</span>
            </div>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
