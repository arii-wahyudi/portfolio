import { AuroraBackground } from '@/components/common/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/common/BackToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[var(--primary-blue)] selection:text-white">
      {/* Ambient Atmospheric Glow (fixed in background) */}
      <AuroraBackground />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Primary Page Content Sections */}
      <main className="flex-1 w-full pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating Utilities */}
      <BackToTop />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
