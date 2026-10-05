import { useState } from 'react';
import { ExternalLink, GitBranch, ArrowRight, Code2 } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import type { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ProjectDetailModal } from '@/components/common/ProjectDetailModal';

export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleImageError = (projectId: string) => {
    setBrokenImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects Portfolio"
      className="py-20 sm:py-24 border-t border-[var(--border-color)]/60"
    >
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
            <span className="text-[var(--text-muted)]">// 03</span>
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
            Curated Projects & Applications
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl">
            Selected web applications highlighting architectural clarity, problem solving, and modern frontend practices.
          </p>
        </ScrollReveal>

        {/* Project Card Grid (1 col mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.08}
              className="flex flex-col justify-between rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-sm border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-blue)]/50 hover:shadow-lg group"
            >
              {/* Card Top: 16:9 Thumbnail Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900/30 border-b border-[var(--border-color)] flex items-center justify-center">
                {!brokenImages[project.id] ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                ) : (
                  /* Clean intentional fallback illustration for placeholder screenshots */
                  <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/50">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                      </span>
                      <span>preview</span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 py-4">
                      <Code2 className="w-8 h-8 text-[var(--primary-blue)]/70" />
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        {project.id}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-1.5 w-1/3 rounded bg-[var(--primary-blue)]/30" />
                      <div className="h-1.5 w-1/4 rounded bg-slate-700" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body: Info & Badges */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[var(--text-main)] group-hover:text-[var(--primary-blue)] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-2.5 py-0.5 text-[11px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] text-[var(--text-muted)] font-mono self-center">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="px-6 py-3.5 border-t border-[var(--border-color)]/70 flex items-center justify-between gap-3 bg-[var(--bg-primary)]/40">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenDetail(project)}
                  className="text-xs font-medium flex items-center gap-1.5 cursor-pointer hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                >
                  <span>Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>

                <div className="flex items-center gap-1.5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--primary-blue)] hover:bg-[var(--bg-surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                  >
                    <GitBranch className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
}
