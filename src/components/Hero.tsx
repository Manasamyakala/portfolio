import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin, Sparkles, Award, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onAskClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAskClick }) => {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Profile Picture Column */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-zinc-900 w-48 h-56 sm:w-56 sm:h-64 md:w-full md:h-72 object-cover shadow-2xl">
                <img
                  src={PORTFOLIO_DATA.profile.avatar}
                  alt={PORTFOLIO_DATA.profile.name}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for SDE / AI
                  </span>
                  <span className="text-zinc-400 font-mono">HYD, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Info Column */}
          <div className="md:col-span-8 space-y-5 text-center md:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{PORTFOLIO_DATA.profile.title}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">
              {PORTFOLIO_DATA.profile.name}
            </h1>

            {/* Tagline */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.profile.summary}
            </p>

            {/* Location & Institution */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {PORTFOLIO_DATA.profile.location}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Keshav Memorial Institute of Technology (KMIT)
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onAskClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ask My Resume Anything</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-sm"
              >
                <span>GitHub Projects</span>
              </a>
            </div>

            {/* Highlight Metric Cards */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PORTFOLIO_DATA.profile.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-200 font-medium">{stat.label}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
