import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, QAData } from '../data/portfolioData';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, FileText, Check, Search, Shield, Cpu, RefreshCw } from 'lucide-react';

export const AiTerminal: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeQA, setActiveQA] = useState<QAData | null>(PORTFOLIO_DATA.qaList[0]);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>([
    { type: 'output', text: 'Welcome to Manasa Myakala\'s Interactive Resume Engine.\nType a question or select a quick prompt below to search projects, skills, and work experience.' }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Quick Prompts list
  const promptPills = [
    { label: "🤖 Tell me about PetTrack", qaId: "pettrack-qa" },
    { label: "🛡️ Drone Defense System", qaId: "drone-qa" },
    { label: "💼 Work Experience", qaId: "experience-qa" },
    { label: "⚡ Core Skills & Tech Stack", qaId: "skills-qa" },
    { label: "🏆 Certifications & ECET Rank", qaId: "cert-qa" },
    { label: "📋 Resume Overview", qaId: "summary-qa" }
  ];

  // Handle typing animation when active QA changes
  useEffect(() => {
    if (!activeQA) return;
    setIsTyping(true);
    setTypedAnswer('');
    
    let index = 0;
    const fullText = activeQA.answer;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedAnswer(fullText.slice(0, index + 3));
        index += 3;
      } else {
        setTypedAnswer(fullText);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeQA]);

  // Command & Natural Language Query Processor
  const handleProcessQuery = (textToSubmit: string) => {
    const trimmed = textToSubmit.trim();
    if (!trimmed) return;

    // Add to terminal history
    setTerminalHistory(prev => [...prev, { type: 'input', text: trimmed }]);
    const lower = trimmed.toLowerCase();

    // Check terminal commands
    if (lower === 'clear') {
      setTerminalHistory([]);
      setQuery('');
      return;
    }
    if (lower === 'help') {
      const helpMsg = `Available commands:\n• help - Show this help menu\n• cat resume - Print summary overview\n• projects - List all projects\n• skills - List technical skills\n• education - Print academic records\n• contact - Show social links & contact details\n• clear - Clear screen\nOr type any natural language question!`;
      setTerminalHistory(prev => [...prev, { type: 'output', text: helpMsg }]);
      setQuery('');
      return;
    }
    if (lower === 'cat resume' || lower === 'summary') {
      const match = PORTFOLIO_DATA.qaList.find(q => q.id === 'summary-qa');
      if (match) setActiveQA(match);
      setQuery('');
      return;
    }
    if (lower === 'projects' || lower === 'pettrack' || lower === 'drone') {
      const match = PORTFOLIO_DATA.qaList.find(q => q.id === 'drone-qa');
      if (match) setActiveQA(match);
      setQuery('');
      return;
    }
    if (lower === 'skills') {
      const match = PORTFOLIO_DATA.qaList.find(q => q.id === 'skills-qa');
      if (match) setActiveQA(match);
      setQuery('');
      return;
    }
    if (lower === 'certifications' || lower === 'ecet' || lower === 'rank') {
      const match = PORTFOLIO_DATA.qaList.find(q => q.id === 'cert-qa');
      if (match) setActiveQA(match);
      setQuery('');
      return;
    }

    // Match best QA item based on search query keywords
    const match = PORTFOLIO_DATA.qaList.find(qa => {
      const combined = (qa.question + ' ' + qa.answer + ' ' + qa.tags.join(' ')).toLowerCase();
      return trimmed.split(' ').some(word => word.length > 2 && combined.includes(word.toLowerCase()));
    });

    if (match) {
      setActiveQA(match);
      setTerminalHistory(prev => [...prev, { type: 'output', text: `Retrieved source [${match.sources[0]?.title}] for "${trimmed}"` }]);
    } else {
      // Dynamic fallback answer
      const customFallback: QAData = {
        id: "dynamic-fallback",
        question: trimmed,
        answer: `Regarding "${trimmed}": Manasa Myakala is a Computer Science undergraduate at KMIT Hyderabad specializing in Generative AI, Computer Vision (YOLOv8, CLIP ViT), FastAPI, and full-stack backend development. She holds a Diploma CGPA of 9.88, ECET State Rank 169 (Top 0.8%), and OCI 2025 DevOps certification.`,
        sources: [
          { title: "Search Match", doc: "resume.pdf", text: `Retrieved records corresponding to "${trimmed}"` }
        ],
        tags: ["Search", "Resume Engine"]
      };
      setActiveQA(customFallback);
      setTerminalHistory(prev => [...prev, { type: 'output', text: `Processed query: "${trimmed}"` }]);
    }

    setQuery('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleProcessQuery(query);
  };

  const handlePillClick = (qaId: string) => {
    const item = PORTFOLIO_DATA.qaList.find(q => q.id === qaId);
    if (item) {
      setActiveQA(item);
      setTerminalHistory(prev => [...prev, { type: 'input', text: item.question }]);
    }
  };

  return (
    <section id="ai-resume" className="py-12 bg-zinc-950/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <TerminalIcon className="w-4 h-4" />
              <span>RAG RESUME RETRIEVAL ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">Ask My Resume Anything</h2>
            <p className="text-zinc-400 text-sm mt-1">
              Answers are retrieved instantly from Manasa's projects, work history, and technical background with source citations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Vector Index: 100% Ingested</span>
          </div>
        </div>

        {/* Main Terminal Window */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-zinc-400">manasa-ai-rag-terminal — bash</span>
            </div>
            <div className="text-[11px] font-mono text-amber-400/80 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>porto.nandish style vector-search</span>
            </div>
          </div>

          {/* Terminal Body Split: Query Input & AI Answer Box */}
          <div className="p-4 sm:p-6 space-y-6">
            
            {/* Quick Prompt Pills */}
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Suggested Questions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {promptPills.map((pill) => (
                  <button
                    key={pill.qaId}
                    onClick={() => handlePillClick(pill.qaId)}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800/80 border border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all text-left"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center gap-2 bg-zinc-950 border border-amber-500/30 rounded-xl px-4 py-3 shadow-inner focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/50 transition-all">
                <span className="text-amber-400 font-mono text-sm">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question or type 'help', 'projects', 'skills', 'certifications'..."
                  className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 font-mono text-xs sm:text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 hover:text-amber-300 transition-colors"
                  title="Submit Query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* AI Retrieved Answer Output Card */}
            {activeQA && (
              <div className="rounded-xl border border-amber-500/20 bg-zinc-950/80 p-4 sm:p-5 space-y-4">
                
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-amber-300 font-semibold">
                      Q: "{activeQA.question}"
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                    <span>Relevance: 99.4%</span>
                  </div>
                </div>

                {/* Answer Text */}
                <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-line">
                  {typedAnswer}
                  {isTyping && <span className="terminal-cursor" />}
                </div>

                {/* Source Citations (porto.nandish signature feature) */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-zinc-500 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    Cited Sources:
                  </span>
                  {activeQA.sources.map((src, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-zinc-800 text-amber-300 border border-white/10 text-[11px]"
                      title={src.text}
                    >
                      [{src.doc} — {src.title}]
                    </span>
                  ))}
                </div>

              </div>
            )}

            {/* Terminal Command History Stream */}
            {terminalHistory.length > 1 && (
              <div className="pt-2 border-t border-white/5 font-mono text-xs space-y-1.5 text-zinc-400 max-h-36 overflow-y-auto pr-2">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Command Log</div>
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className={item.type === 'input' ? 'text-amber-400/90' : 'text-zinc-300 whitespace-pre-line pl-3 border-l border-white/10'}>
                    {item.type === 'input' ? `$ ${item.text}` : item.text}
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
