import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <Briefcase className="w-4 h-4" />
            <span>WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-8 border-l border-amber-500/30 space-y-3 group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-400 group-hover:bg-amber-400 transition-colors"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-amber-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-amber-400 font-mono">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-lg border border-white/10 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="glass-card rounded-2xl p-5 space-y-3 mt-3">
                <ul className="space-y-2.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-amber-500/20 text-xs font-mono text-amber-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
