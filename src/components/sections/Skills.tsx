import { Binary, LayoutGrid, Database, Wrench, Sparkles } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/common/ScrollReveal';

// Map category titles to lucide-react icons
function getCategoryIcon(title: string) {
  switch (title) {
    case 'Programming Languages':
      return <Binary className="w-5 h-5 text-[var(--primary-blue)]" />;
    case 'Frontend Development':
      return <LayoutGrid className="w-5 h-5 text-[var(--primary-blue)]" />;
    case 'Backend & Database':
      return <Database className="w-5 h-5 text-[var(--primary-blue)]" />;
    case 'Tools & Workflow':
      return <Wrench className="w-5 h-5 text-[var(--primary-blue)]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[var(--primary-blue)]" />;
  }
}

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-label="Technical Skills & Competencies"
      className="py-20 sm:py-24 border-t border-[var(--border-color)]/60"
    >
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
            <span className="text-[var(--text-muted)]">// 02</span>
            <span>SKILLS & EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
            Technical Stack & Capabilities
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl">
            Categorized overview of active production technologies and exploratory skillsets.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <ScrollReveal
              key={category.title}
              delay={index * 0.08}
              className="p-6 rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-sm border border-[var(--border-color)] hover:border-[var(--primary-blue)]/40 transition-colors space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]/80">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(category.title)}
                  <h3 className="text-base font-semibold font-mono text-[var(--text-main)]">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {category.skills.length} items
                </span>
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="inline-flex items-center gap-1.5">
                    {skill.isExploring ? (
                      <Badge
                        variant="exploring"
                        className="px-3 py-1 text-xs gap-1.5 transition-transform hover:-translate-y-0.5"
                      >
                        <span>{skill.name}</span>
                        <span className="text-[10px] px-1 py-0.2 rounded uppercase tracking-wider bg-[var(--primary-blue)]/20 font-sans font-semibold">
                          Exploring
                        </span>
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-xs text-[var(--text-main)] transition-transform hover:-translate-y-0.5"
                      >
                        {skill.name}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
