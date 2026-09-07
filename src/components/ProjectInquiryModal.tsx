import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$3,000 - $8,000',
    timeline: '1-2 Months',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahendranagpure909@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      id="inquiry-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="bg-[#EBE9E4] text-[#000000] w-full max-w-2xl rounded-[12px] border-2 border-[#000000] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#000000]/20 flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 bg-[#0000EE] text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-4xl uppercase text-[#000000]">
              BRIEF TRANSMITTED
            </h3>
            <p className="text-base text-[#000000]/80 max-w-md mx-auto font-sans">
              Thank you, {formData.name || 'there'}. I have received your project details and will review your specifications within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="bg-[#000000] text-white px-6 py-3 rounded-[8px] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0000EE] transition-colors"
              >
                RETURN TO SITE
              </button>
              <button
                onClick={handleCopyEmail}
                className="border border-[#000000] px-5 py-3 rounded-[8px] font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#DFDDD9] transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-1">
              PROJECT INQUIRY // SPRINT SCHEDULER
            </div>
            <h3 id="inquiry-modal-title" className="font-display text-3xl sm:text-4xl uppercase text-[#000000] mb-2">
              START A PROJECT
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#555555] mb-6">
              Fill out this project brief, or write directly to{' '}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[#0000EE] font-bold underline hover:text-[#0000BE]"
              >
                mahendranagpure909@gmail.com
              </button>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#555555] uppercase mb-1">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe / Acme Corp"
                    className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] px-3.5 py-2.5 text-[#000000] focus:border-[#0000EE] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#555555] uppercase mb-1">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] px-3.5 py-2.5 text-[#000000] focus:border-[#0000EE] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#555555] uppercase mb-1">PROJECT TYPE</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] px-3.5 py-2.5 text-[#000000] focus:border-[#0000EE] focus:outline-none"
                  >
                    <option>Full-Stack Web App</option>
                    <option>AI-Powered Tool / Automation</option>
                    <option>Internal Dashboard / ERP</option>
                    <option>Headless E-Commerce</option>
                    <option>Creative 3D / Brand Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#555555] uppercase mb-1">ESTIMATED BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] px-3.5 py-2.5 text-[#000000] focus:border-[#0000EE] focus:outline-none"
                  >
                    <option>$2,000 - $5,000</option>
                    <option>$5,000 - $12,000</option>
                    <option>$12,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#555555] uppercase mb-1">TIMELINE</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] px-3.5 py-2.5 text-[#000000] focus:border-[#0000EE] focus:outline-none"
                  >
                    <option>Urgent (&lt; 1 Month)</option>
                    <option>1 - 2 Months</option>
                    <option>3+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#555555] uppercase mb-1">PROJECT DETAILS / SPECS *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, business goals, target audience, and key technical deliverables..."
                  className="w-full bg-[#DFDDD9] border border-[#000000]/20 rounded-[6px] p-3 text-[#000000] focus:border-[#0000EE] focus:outline-none font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0000EE] text-white py-3.5 rounded-[8px] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0000BE] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT PROJECT BRIEF</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
