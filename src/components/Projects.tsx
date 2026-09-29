import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, ExternalLink, Github, Sparkles, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>FEATURED WORK & AI SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Shipped Projects</h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-2 md:mt-0 font-sans">
            Real-world AI applications ranging from military-grade drone defense engines to zero-tag CLIP vector search platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Meta Badge */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-amber-400 font-semibold">{project.period}</span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
                      Featured AI
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-white group-hover:text-amber-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mb-4">
                  {project.subtitle}
                </p>

                {/* Highlights preview */}
                <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                  {project.description.slice(0, 2).map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono">›</span>
                      <span className="line-clamp-2">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-1 text-[10px] font-mono text-zinc-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
