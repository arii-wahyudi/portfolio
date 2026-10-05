import { Code, Compass, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function About() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About the Developer"
      className="py-20 sm:py-24 border-t border-[var(--border-color)]/60"
    >
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
            <span className="text-[var(--text-muted)]">// 01</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
            Professional Context & Approach
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl">
            A focused look into engineering values, problem-solving methodology, and current technical endeavors.
          </p>
        </ScrollReveal>

        {/* Asymmetrical Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Background & Focus Column (7 cols) */}
          <ScrollReveal className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-sm border border-[var(--border-color)] space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[var(--primary-blue)]">
                <Code className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-[var(--text-main)]">
                  Background & Development Focus
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {personal.shortIntro}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)]/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[var(--primary-blue)]" />
                <span>Architecture & Engineering Focus</span>
              </div>
              <p className="text-sm text-[var(--text-main)] leading-relaxed">
                {personal.developmentFocus}
              </p>
            </div>
          </ScrollReveal>

          {/* Workflow & Current Study Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* How I Work */}
            <ScrollReveal
              delay={0.1}
              className="flex-1 p-6 rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-sm border border-[var(--border-color)] space-y-3"
            >
              <div className="flex items-center gap-2.5 text-[var(--primary-blue)]">
                <Compass className="w-5 h-5" />
                <h3 className="text-base font-semibold text-[var(--text-main)]">
                  How I Work
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {personal.howIWork}
              </p>
            </ScrollReveal>

            {/* Current Focus */}
            <ScrollReveal
              delay={0.2}
              className="flex-1 p-6 rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-sm border border-[var(--border-color)] space-y-3"
            >
              <div className="flex items-center gap-2.5 text-[var(--primary-blue)]">
                <Cpu className="w-5 h-5" />
                <h3 className="text-base font-semibold text-[var(--text-main)]">
                  Current Technical Focus
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {personal.currentFocus}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
