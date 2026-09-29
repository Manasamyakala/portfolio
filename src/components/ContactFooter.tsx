import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, Github, Linkedin, Code2, Copy, Check, ArrowUpRight, Heart } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer id="contact" className="py-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main CTA Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/20 text-center max-w-3xl mx-auto space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-white">Let's Build Together</h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto">
            Open for Generative AI, Computer Vision, and Software Development Engineering opportunities. Feel free to connect or reach out directly!
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => copyText(PORTFOLIO_DATA.profile.email, 'email')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-zinc-950 font-semibold text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>{copiedEmail ? 'Email Copied!' : PORTFOLIO_DATA.profile.email}</span>
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
            </button>

            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-sm font-mono"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{PORTFOLIO_DATA.profile.phone}</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-6 flex items-center justify-center gap-6 border-t border-white/5">
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Footer Credit */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Manasa Myakala. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Modeled after porto.nandish style</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
