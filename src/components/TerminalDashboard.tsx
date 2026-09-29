import React, { useState } from 'react';
import { PORTFOLIO_DATA, QAData } from '../data/portfolioData';
import { GitHubSnake } from './GitHubSnake';
import { AnalogClock } from './AnalogClock';
import { ResumeModal } from './ResumeModal';
import { ProjectModal } from './ProjectModal';
import { SkillsModal } from './SkillsModal';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Share2,
  Send,
  Maximize2,
  FolderGit2,
  ChevronRight,
  Code2
} from 'lucide-react';

export const TerminalDashboard: React.FC = () => {
  const [activeQA, setActiveQA] = useState<QAData | null>(PORTFOLIO_DATA.qaList[0]);
  const [inputVal, setInputVal] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const handlePromptClick = (qaId: string) => {
    const found = PORTFOLIO_DATA.qaList.find((q) => q.id === qaId);
    if (found) {
      setActiveQA(found);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const lower = inputVal.trim().toLowerCase();
    const found = PORTFOLIO_DATA.qaList.find((q) =>
      lower.split(' ').some((w) => w.length > 2 && (q.question + ' ' + q.answer).toLowerCase().includes(w))
    );

    if (found) {
      setActiveQA(found);
    } else {
      setActiveQA({
        id: 'dynamic',
        question: inputVal,
        answer: `Manasa Myakala specializes in Python, FastAPI, React, YOLOv8, and CLIP vector search. She built real-time drone defense systems and tagless pet recovery platforms.`,
        sources: [{ title: 'Resume Overview', doc: 'resume.pdf', text: 'Technical details' }],
        tags: ['Dynamic']
      });
    }
    setInputVal('');
  };

  return (
    <div className="min-h-screen bg-[#070707] text-zinc-100 font-mono text-xs selection:bg-amber-500/30 selection:text-amber-200 flex flex-col">
      
      {/* Top Header Bar */}
      <header className="h-10 bg-[#0c0c0b] border-b border-white/10 px-4 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">1 MANASA@PORTFOLIO: ~</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="font-bold text-amber-400">MANASA</span>
            <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              • open to work
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors">
              <Github className="w-3.5 h-3.5" /> github
            </a>
            <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-3.5 h-3.5" /> linkedin
            </a>
            <a href={PORTFOLIO_DATA.profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors">
              <Code2 className="w-3.5 h-3.5" /> leetcode
            </a>
            <a href={PORTFOLIO_DATA.profile.socials.email} className="flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> email
            </a>
            <button onClick={() => setIsResumeOpen(true)} className="flex items-center gap-1 text-amber-400 hover:underline">
              <FileText className="w-3.5 h-3.5" /> résumé.pdf
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-3 sm:p-4 max-w-[1700px] w-full mx-auto">
        
        {/* Left Column (Main Area - 9 cols) */}
        <div className="lg:col-span-9 space-y-4 flex flex-col justify-between">
          
          {/* Main Hero Card ($ !whoami) */}
          <div className="space-y-2">
            <div className="text-amber-400 font-bold text-xs tracking-wider flex items-center gap-2">
              <span>$ !whoami</span>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-zinc-950/90 p-4 sm:p-5 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-5 shadow-2xl">
              
              {/* Left Picture Frame */}
              <div className="md:col-span-3 flex flex-col items-center justify-center space-y-2">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-lg overflow-hidden border border-amber-500/40 bg-zinc-900 shadow-xl group">
                  <img
                    src={PORTFOLIO_DATA.profile.avatar}
                    alt={PORTFOLIO_DATA.profile.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    style={{ filter: 'sepia(0.65) hue-rotate(5deg) contrast(1.15) brightness(0.88)' }}
                  />
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
                  <div className="absolute bottom-1 left-0 right-0 py-1 bg-black/80 text-center text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    • TAP TO TALK
                  </div>
                </div>
              </div>

              {/* Middle Profile & Heatmap Info */}
              <div className="md:col-span-9 space-y-4">
                
                {/* Name */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight font-bold">
                      {PORTFOLIO_DATA.profile.name}
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      open to work
                    </span>
                    <button onClick={() => setIsResumeOpen(true)} className="p-1 text-zinc-400 hover:text-amber-400">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats Bar with Acmegrade */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded bg-zinc-900/80 border border-white/5">
                    <div className="text-amber-400 font-bold text-sm">1y 118d</div>
                    <div className="text-[10px] text-zinc-400">IN INDUSTRY ›</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-white/5">
                    <div className="text-amber-400 font-bold text-sm">Acmegrade</div>
                    <div className="text-[10px] text-zinc-400">ML INTERN ›</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-white/5">
                    <div className="text-amber-400 font-bold text-sm">3</div>
                    <div className="text-[10px] text-zinc-400">PROJECTS ›</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-white/5">
                    <div className="text-amber-400 font-bold text-sm">25+</div>
                    <div className="text-[10px] text-zinc-400">SKILLS ++</div>
                  </div>
                </div>

                {/* GitHub Contribution Heatmap Matrix with Snake Game */}
                <GitHubSnake />

                {/* Footer details with LeetCode Link below heatmap */}
                <div className="flex flex-wrap items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <div>📍 Hyderabad · UTC+5:30</div>
                  <div className="flex items-center gap-3">
                    <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">github</a>
                    <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">linkedin</a>
                    <a href={PORTFOLIO_DATA.profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline">leetcode</a>
                    <a href={PORTFOLIO_DATA.profile.socials.email} className="hover:text-amber-400">email</a>
                    <button onClick={() => setIsResumeOpen(true)} className="text-amber-400 underline">résumé.pdf</button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Shipped Projects Showcase Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400">
              <span className="flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                SHIPPED PROJECTS & ARCHITECTURES
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">3 Featured Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="p-4 rounded-xl bg-zinc-950 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer space-y-2 group"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
                    <span>{proj.period}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-bold text-zinc-100 group-hover:text-amber-300 text-xs sm:text-sm line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">
                    {proj.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt / AI Assistant Section */}
          <div className="space-y-3">
            <div className="text-zinc-400 text-xs">
              Ask me anything, or type <span className="text-amber-400">/</span> for commands, <span className="text-amber-400">!</span> for shell.
            </div>

            {/* Clickable prompt options */}
            <div className="space-y-1 text-xs">
              <button
                onClick={() => handlePromptClick('drone-qa')}
                className="w-full text-left px-3 py-1.5 rounded bg-zinc-900/80 border border-white/5 hover:border-amber-500/30 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
              >
                <span>› tell me about the counter-drone defense system</span>
                <span className="text-[10px] text-zinc-500 font-mono">YOLOv8 + ONNX</span>
              </button>
              <button
                onClick={() => handlePromptClick('pettrack-qa')}
                className="w-full text-left px-3 py-1.5 rounded bg-zinc-900/80 border border-white/5 hover:border-amber-500/30 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
              >
                <span>› tell me about the PetTrack vector search</span>
                <span className="text-[10px] text-zinc-500 font-mono">CLIP ViT-B/32</span>
              </button>
              <button
                onClick={() => handlePromptClick('experience-qa')}
                className="w-full text-left px-3 py-1.5 rounded bg-zinc-900/80 border border-white/5 hover:border-amber-500/30 text-zinc-300 hover:text-amber-300 transition-colors flex items-center justify-between"
              >
                <span>› !cat experience.json | jq</span>
                <span className="text-[10px] text-zinc-500 font-mono">Work History</span>
              </button>
            </div>

            {/* Display Active QA Output */}
            {activeQA && (
              <div className="p-4 rounded-xl bg-zinc-950 border border-amber-500/30 space-y-2 text-xs">
                <div className="text-amber-400 font-bold">Q: "{activeQA.question}"</div>
                <div className="text-zinc-200 leading-relaxed font-sans">{activeQA.answer}</div>
                <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-2 pt-1 border-t border-white/5">
                  <span>Source: [{activeQA.sources[0]?.doc} — {activeQA.sources[0]?.title}]</span>
                </div>
              </div>
            )}

            {/* Bottom Interactive Command Bar */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
              <div className="flex-1 bg-zinc-950 border border-amber-500/30 rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-amber-400 font-bold">❯</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask a question about projects, skills, experience..."
                  className="w-full bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none text-xs font-mono"
                />
                <button type="submit" className="p-1 text-amber-400 hover:text-amber-300">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">CHAT</span>
                <span>Theme:default</span>
              </div>
              <div>ask me anything · / commands · ! shell</div>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar Area - 3 cols) */}
        <div className="lg:col-span-3 space-y-4 font-mono">
          
          {/* Top Social Sidebar Header */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400 text-sm">MANASA</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                open to work
              </span>
            </div>

            <div className="space-y-1.5 pt-1">
              <a href={PORTFOLIO_DATA.profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/5 transition-colors">
                <span className="flex items-center gap-2"><Github className="w-3.5 h-3.5" /> github</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/5 transition-colors">
                <span className="flex items-center gap-2"><Linkedin className="w-3.5 h-3.5" /> linkedin</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 transition-colors">
                <span className="flex items-center gap-2"><Code2 className="w-3.5 h-3.5 text-amber-400" /> leetcode</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
              </a>
              <a href={PORTFOLIO_DATA.profile.socials.email} className="flex items-center justify-between p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/5 transition-colors">
                <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> email</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
              <button onClick={() => setIsResumeOpen(true)} className="w-full flex items-center justify-between p-2 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors">
                <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> résumé.pdf</span>
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Analog Clock UPTIME Widget */}
          <AnalogClock />

          {/* RÉSUMÉ Document Preview Widget */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-4 space-y-3 relative group">
            <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">RÉSUMÉ</div>
            
            <div
              onClick={() => setIsResumeOpen(true)}
              className="relative rounded-lg overflow-hidden border border-white/10 bg-zinc-900 h-48 p-3 cursor-pointer group-hover:border-amber-500/50 transition-all shadow-inner space-y-2 text-[8px] text-zinc-400 select-none opacity-80 group-hover:opacity-100"
            >
              <div className="font-bold text-zinc-200 text-[10px]">MANASA MYAKALA</div>
              <div className="border-t border-white/10 pt-1 leading-tight">
                Computer Science engineer with hands-on experience in full-stack development, YOLOv8, CLIP ViT-B/32, and FastAPI...
              </div>
              <div className="border-t border-white/10 pt-1 space-y-1">
                <div className="font-bold text-zinc-300 text-[8px]">PROJECTS</div>
                <div>• Counter-Drone Defense System for AFVs</div>
                <div>• PetTrack AI Pet Identification Platform</div>
              </div>

              {/* Overlay Button */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center p-2 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1.5 rounded bg-amber-500 text-zinc-950 font-bold text-[10px] tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  RÉSUMÉ • CLICK TO ENLARGE
                </span>
              </div>
            </div>
          </div>

          {/* Clickable Languages & Skills Section -> Opens Terminal Popup */}
          <div
            onClick={() => setIsSkillsOpen(true)}
            className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 hover:border-amber-500/40 cursor-pointer text-[10px] text-zinc-400 space-y-1.5 transition-all group"
          >
            <div className="flex items-center justify-between font-bold text-zinc-300 group-hover:text-amber-400">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                LANGUAGES & SKILLS
              </span>
              <span className="text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                • live CLI
              </span>
            </div>
            <div className="text-zinc-500 flex items-center justify-between">
              <span>Click to open skills CLI terminal ($ cat skills.json)</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

        </div>

      </div>

      {/* Resume Modal Viewer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Skills Terminal Popup */}
      <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

    </div>
  );
};
