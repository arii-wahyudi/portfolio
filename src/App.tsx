import { AuroraBackground } from '@/components/common/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/common/BackToTop';
import { ScrollReveal } from '@/components/common/ScrollReveal';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[var(--primary-blue)] selection:text-white">
      {/* Ambient Aurora Glow Background */}
      <AuroraBackground />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Area (Phase 3 Layout verification with section anchors) */}
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-[1150px] mx-auto w-full">
        <ScrollReveal className="text-center space-y-4 max-w-xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border border-[var(--primary-blue)]/20">
            Phase 3 Ready: Common & Layout Components
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Layout & Common Foundations Loaded
          </h1>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Floating Navbar, Ambient Aurora Glow, Theme Toggle, ScrollReveal, Back-To-Top, and Footer are active.
          </p>
        </ScrollReveal>

        {/* Placeholder anchors to verify navigation scrolling */}
        <section id="home" className="h-64 flex items-center justify-center text-xs text-[var(--text-muted)]">
          [#home section target]
        </section>
        <section id="about" className="h-64 flex items-center justify-center text-xs text-[var(--text-muted)]">
          [#about section target]
        </section>
        <section id="skills" className="h-64 flex items-center justify-center text-xs text-[var(--text-muted)]">
          [#skills section target]
        </section>
        <section id="projects" className="h-64 flex items-center justify-center text-xs text-[var(--text-muted)]">
          [#projects section target]
        </section>
        <section id="contact" className="h-64 flex items-center justify-center text-xs text-[var(--text-muted)]">
          [#contact section target]
        </section>
      </main>

      {/* Back to top floating button */}
      <BackToTop />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
