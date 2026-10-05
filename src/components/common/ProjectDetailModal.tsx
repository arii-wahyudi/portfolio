import { ExternalLink, GitBranch, CheckCircle2, Layers, UserCheck, HelpCircle, Lightbulb } from 'lucide-react';
import type { Project } from '@/types/portfolio';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

  const hasLinks = Boolean(project.githubUrl || project.demoUrl);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        aria-describedby="project-description"
        className="max-w-[680px] max-h-[85vh] overflow-y-auto p-5 sm:p-7 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] rounded-2xl shadow-2xl space-y-6"
      >
        {/* Header Section with ample right padding for close button */}
        <DialogHeader className="space-y-3 text-left pr-8">
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            {project.title}
          </DialogTitle>

          <DialogDescription
            id="project-description"
            className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed"
          >
            {project.shortDescription}
          </DialogDescription>

          {/* Action Links - only rendered if URLs exist */}
          {hasLinks && (
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--primary-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[var(--primary-blue)] hover:bg-[var(--primary-hover)] text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </DialogHeader>

        {/* Modal Body Sections */}
        <div className="space-y-5 pt-3 border-t border-[var(--border-color)]">
          {/* Problem */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>The Problem & Context</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-primary)]/60 p-3.5 rounded-xl border border-[var(--border-color)]/70">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Technical Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-primary)]/60 p-3.5 rounded-xl border border-[var(--border-color)]/70">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Key Features</span>
            </div>
            <ul className="space-y-1.5 pl-1">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-blue)] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="space-y-1.5 pt-2 border-t border-[var(--border-color)]/80">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>My Role & Contributions</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {project.myRole}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
