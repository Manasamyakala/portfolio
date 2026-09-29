import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, ExternalLink, CheckCircle2, Shield, FolderGit2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="relative w-full max-w-3xl bg-zinc-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-zinc-950 border-b border-white/10 flex items-center justify-between font-mono">
          <div className="flex items-center gap-2 text-xs text-amber-400">
            <Shield className="w-4 h-4" />
            <span>MANASA_MYAKALA_RESUME.PDF</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="flex items-center gap-1 text-xs text-zinc-300 hover:text-amber-300 bg-zinc-800 px-3 py-1 rounded border border-white/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact Candidate</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-zinc-950 text-zinc-100 space-y-8 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-serif text-amber-400">{PORTFOLIO_DATA.profile.name}</h1>
            <div className="text-sm font-mono text-zinc-300">{PORTFOLIO_DATA.profile.title} • {PORTFOLIO_DATA.profile.location}</div>
            <div className="text-xs font-mono text-zinc-400 flex flex-wrap gap-4 pt-1">
              <span>Email: {PORTFOLIO_DATA.profile.email}</span>
              <span>GitHub: github.com/manasamyakala</span>
              <span>LinkedIn: linkedin.com/in/manasa-myakala-16123732b</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 border-b border-amber-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {PORTFOLIO_DATA.summary}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 border-b border-amber-500/20 pb-1">
              Featured Projects & AI Systems
            </h2>

            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-amber-400" />
                    {proj.title}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400">{proj.period}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 text-xs text-zinc-300 pt-1">
                  {proj.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 border-b border-amber-500/20 pb-1">
              Work Experience
            </h2>

            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {exp.description.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 border-b border-amber-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.skills.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 space-y-1">
                  <div className="font-bold text-amber-300">{s.category}</div>
                  <div className="text-zinc-400 font-mono text-[11px]">{s.items.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-zinc-950 border-t border-white/10 flex justify-end font-mono">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-500 text-zinc-950 text-xs font-bold hover:bg-amber-400 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
