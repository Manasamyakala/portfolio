import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, LayoutGrid, Github, Linkedin, Mail, Code2, Copy, Check } from 'lucide-react';

interface NavbarProps {
  activeView: 'visual' | 'terminal';
  setActiveView: (view: 'visual' | 'terminal') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0c0b0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-mono text-sm group-hover:border-amber-400/50 transition-colors">
              MM
            </div>
            <div>
              <span className="font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors text-sm sm:text-base">
                Manasa Myakala
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] text-zinc-400 font-mono hidden md:inline-block">
                  Generative AI Engineer
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* View Switcher: Terminal vs Visual (porto.nandish.online signature) */}
        <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveView('visual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeView === 'visual'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Visual</span>
          </button>
          <button
            onClick={() => setActiveView('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeView === 'terminal'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </button>
        </div>

        {/* Social Icons & Email Copy */}
        <div className="flex items-center gap-2">
          <a
            href={PORTFOLIO_DATA.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
            className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            title="Copy Email Address"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-lg border border-white/10 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Email'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
