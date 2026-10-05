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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        aria-describedby="project-description"
        className="max-w-[680px] max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] rounded-2xl shadow-2xl space-y-6"
      >
        {/* Header Section */}
        <DialogHeader className="space-y-3 text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 pr-6">
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              {project.title}
            </DialogTitle>
          </div>

          <DialogDescription
            id="project-description"
            className="text-sm text-[var(--text-muted)] leading-relaxed"
          >
            {project.shortDescription}
          </DialogDescription>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--primary-blue)] transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium bg-[var(--primary-blue)] hover:bg-[var(--primary-hover)] text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </DialogHeader>

        {/* Modal Body Sections */}
        <div className="space-y-6 pt-2 border-t border-[var(--border-color)]">
          {/* Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>The Problem & Context</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-primary)]/50 p-4 rounded-xl border border-[var(--border-color)]/70">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Technical Solution</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-primary)]/50 p-4 rounded-xl border border-[var(--border-color)]/70">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features</span>
            </div>
            <ul className="space-y-2">
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
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Technologies Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2.5 py-1 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]/80">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
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
