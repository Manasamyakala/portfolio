import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, X, Minimize2 } from 'lucide-react';

interface TerminalViewProps {
  onSwitchToVisual: () => void;
}

export const TerminalView: React.FC<TerminalViewProps> = ({ onSwitchToVisual }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<Array<{ cmd: string; result: string; timestamp: string }>>([
    {
      cmd: 'init manasa-portfolio --version=2.0',
      result: `==========================================================\n  MANASA MYAKALA — GENERATIVE AI & COMPUTER VISION ENGINEER\n==========================================================\n  Location: Hyderabad, India\n  Education: B.Tech CSE (KMIT, 8.9 CGPA) | Diploma CSE (9.88 CGPA)\n  Rank: ECET State Rank 169 (Top 0.8% in Telangana)\n  Status: Open for SDE / Generative AI / CV Engineer Roles\n----------------------------------------------------------\nType 'help' to see available commands or 'gui' to exit.`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    const lower = command.toLowerCase();
    let response = '';

    if (lower === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }
    if (lower === 'gui' || lower === 'exit' || lower === 'visual') {
      onSwitchToVisual();
      return;
    }
    if (lower === 'help') {
      response = `AVAILABLE COMMANDS:\n  • summary     - Print professional summary\n  • projects    - List shipped projects & architectures\n  • experience  - Display work history\n  • skills      - List technical skills & frameworks\n  • education   - Display academic records & ECET rank\n  • contact     - Print social handles, email & phone\n  • clear       - Clear terminal screen\n  • gui         - Switch back to visual web layout\n  • ask <query> - Execute semantic vector search on resume`;
    } else if (lower === 'summary' || lower === 'whoami') {
      response = PORTFOLIO_DATA.summary;
    } else if (lower === 'projects') {
      response = PORTFOLIO_DATA.projects.map((p, i) => 
        `[${i+1}] ${p.title}\n    Period: ${p.period}\n    Tech: ${p.tags.join(', ')}\n    Details: ${p.subtitle}`
      ).join('\n\n');
    } else if (lower === 'experience') {
      response = PORTFOLIO_DATA.experience.map(e =>
        `ROLE: ${e.role} @ ${e.company} (${e.period})\n` + e.description.map(d => `  - ${d}`).join('\n')
      ).join('\n\n');
    } else if (lower === 'skills') {
      response = PORTFOLIO_DATA.skills.map(s =>
        `${s.category.toUpperCase()}:\n  ${s.items.join(' | ')}`
      ).join('\n\n');
    } else if (lower === 'education' || lower === 'rank') {
      response = `EDUCATION:\n` + PORTFOLIO_DATA.education.map(e =>
        `  • ${e.degree} - ${e.institution} (${e.score})`
      ).join('\n') + `\n\nACHIEVEMENTS:\n` + PORTFOLIO_DATA.certifications.map(c => `  • ${c.title}`).join('\n');
    } else if (lower === 'contact') {
      response = `CONTACT INFORMATION:\n  • Email: ${PORTFOLIO_DATA.profile.email}\n  • Phone: ${PORTFOLIO_DATA.profile.phone}\n  • GitHub: ${PORTFOLIO_DATA.profile.socials.github}\n  • LinkedIn: ${PORTFOLIO_DATA.profile.socials.linkedin}\n  • LeetCode: ${PORTFOLIO_DATA.profile.socials.leetcode}`;
    } else {
      // Vector search lookup simulation
      const match = PORTFOLIO_DATA.qaList.find(q =>
        command.toLowerCase().split(' ').some(w => w.length > 2 && (q.question + ' ' + q.answer).toLowerCase().includes(w))
      );
      if (match) {
        response = `[RETRIEVED FROM ${match.sources[0]?.doc} — ${match.sources[0]?.title}]\n${match.answer}`;
      } else {
        response = `Command not recognized: '${command}'. Type 'help' for available commands or 'gui' for visual layout.`;
      }
    }

    setLogs(prev => [...prev, { cmd: command, result: response, timestamp: new Date().toLocaleTimeString() }]);
    setInput('');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 bg-[#0a0908] text-amber-400 font-mono flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col bg-zinc-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Terminal Titlebar */}
        <div className="px-4 py-3 bg-zinc-900 border-b border-amber-500/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="ml-2 font-bold text-zinc-300">manasa@portfolio-cli:~</span>
          </div>

          <button
            onClick={onSwitchToVisual}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Switch to Visual GUI</span>
          </button>
        </div>

        {/* Console Log Area */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {logs.map((log, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <span className="text-emerald-400 font-bold">manasa@kmit-ai:~$</span>
                <span className="text-zinc-100 font-semibold">{log.cmd}</span>
                <span className="ml-auto text-[10px] text-zinc-600">{log.timestamp}</span>
              </div>
              <pre className="text-amber-300/90 whitespace-pre-wrap font-mono leading-relaxed pl-4 border-l-2 border-amber-500/30">
                {log.result}
              </pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Console Input Bar */}
        <form onSubmit={handleCommand} className="p-4 bg-zinc-900/90 border-t border-amber-500/20 flex items-center gap-3">
          <span className="text-emerald-400 font-bold text-sm">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'projects', 'skills', 'experience', 'gui')..."
            className="w-full bg-transparent text-zinc-100 focus:outline-none font-mono text-xs sm:text-sm placeholder-zinc-600"
            autoFocus
          />
          <button type="submit" className="text-xs px-3 py-1.5 rounded bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400">
            EXEC
          </button>
        </form>

      </div>
    </div>
  );
};
