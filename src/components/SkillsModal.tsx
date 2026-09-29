import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, X, Code2, Cpu, Database, Wrench } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn font-mono text-xs">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-amber-500/40 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Terminal Window Header */}
        <div className="px-4 py-2.5 bg-zinc-900 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="ml-2 font-bold text-amber-400 text-xs">manasa@portfolio:~$ cat skills.json | jq</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Body */}
        <div className="p-5 space-y-4 text-zinc-200 overflow-y-auto max-h-[75vh]">
          <div className="text-amber-400/90 text-xs">$ cat skills.json | jq</div>

          <div className="space-y-4 pt-1">
            {PORTFOLIO_DATA.skills.map((cat, idx) => (
              <div key={idx} className="p-3 rounded bg-zinc-900/90 border border-white/5 space-y-2">
                <div className="text-amber-300 font-bold flex items-center gap-2 text-xs">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{cat.category.toUpperCase()}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-zinc-800 text-emerald-300 border border-emerald-500/20 text-[11px]"
                    >
                      "{item}"
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-emerald-400 text-[11px] pt-2 border-t border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>25+ Skills & Frameworks Verified</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-zinc-900 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 transition-colors text-xs"
          >
            CLOSE TERMINAL
          </button>
        </div>

      </div>
    </div>
  );
};
