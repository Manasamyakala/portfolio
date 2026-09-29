import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EducationCertifications: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="education" className="py-16 border-b border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-3xl font-serif text-white">Education</h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-serif text-white">{edu.degree}</h3>
                      <p className="text-xs font-mono text-amber-400 mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400">{edu.period}</div>
                  {edu.highlight && (
                    <p className="text-xs text-zinc-300 border-t border-white/5 pt-2 font-sans">
                      {edu.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Honors Column */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <Trophy className="w-4 h-4" />
                <span>RECOGNITION & HONORS</span>
              </div>
              <h2 className="text-3xl font-serif text-white">Achievements & Certs</h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={idx === 0 ? triggerConfetti : undefined}
                  className={`glass-card rounded-2xl p-6 border border-white/10 space-y-3 cursor-pointer group ${
                    idx === 0 ? 'hover:border-amber-400/60 bg-gradient-to-r from-amber-500/10 to-transparent' : ''
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-5 h-5 text-amber-400 shrink-0" />
                      <h3 className="text-base font-serif text-white group-hover:text-amber-300 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    {cert.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-zinc-950 text-[11px] font-bold font-mono shrink-0 shadow-md">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  {cert.issuer && (
                    <div className="text-xs font-mono text-zinc-400">Issuer: {cert.issuer}</div>
                  )}
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {cert.details}
                  </p>
                  {idx === 0 && (
                    <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1 pt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Click to celebrate rank! 🎉</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
