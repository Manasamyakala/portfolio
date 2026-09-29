import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-zinc-950/50">
          <div>
            <span className="text-xs font-mono text-amber-400">{project.period}</span>
            <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">{project.title}</h3>
            <p className="text-xs text-zinc-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                  <span className="text-xs sm:text-sm font-semibold text-amber-300 font-mono block">{metric}</span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">Project Breakdown & Architecture</h4>
            <ul className="space-y-2.5">
              {project.description.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800 border border-white/10 text-amber-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-zinc-950/50 flex items-center justify-between">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 border border-white/10 text-amber-300 text-xs font-mono hover:bg-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 text-xs font-semibold hover:bg-amber-400 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
