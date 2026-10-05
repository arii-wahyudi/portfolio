import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Terminal } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction & Overview"
      className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center py-16 sm:py-24 lg:py-28"
    >
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Introduction & CTA (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 1, 0.35, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-mono text-[var(--primary-blue)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.role}</span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold tracking-tight text-[var(--text-main)] leading-[1.18]">
                {personal.headline}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[var(--primary-blue)] tracking-wide">
                {personal.name}
              </p>
            </div>

            {/* Subheadline / Value Proposition */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              {personal.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[var(--primary-blue)] hover:bg-[var(--primary-hover)] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg border-[var(--border-color)] bg-[var(--bg-surface)]/80 hover:bg-[var(--bg-surface)] text-[var(--text-main)] hover:border-[var(--primary-blue)]/50 text-sm font-medium transition-colors"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <span>Lihat Project</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Clean Professional Portrait Container (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.21, 1, 0.35, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl p-2 bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] shadow-xl overflow-hidden group">
              {/* Inner frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900/10 dark:bg-slate-900/60 flex items-center justify-center border border-[var(--border-color)]/60">
                {!imageError ? (
                  <img
                    src={personal.portraitUrl}
                    alt={`${personal.name} portrait`}
                    width={320}
                    height={320}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-103"
                  />
                ) : (
                  /* Elegant minimal fallback if profile asset fails to load */
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/30 flex items-center justify-center text-[var(--primary-blue)]">
                      <Terminal className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-mono font-medium text-[var(--text-main)]">
                        {personal.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Web Developer Profile
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
