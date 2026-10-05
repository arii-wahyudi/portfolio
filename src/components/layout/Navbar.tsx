import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Navbar() {
  const { isScrolledPast } = useScrollPosition();
  const isScrolled = isScrolledPast(40);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer if screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 inset-x-0 mx-auto z-50 px-4 w-full max-w-[760px]">
      {/* Floating Pill Container */}
      <nav
        aria-label="Main Navigation"
        className={`relative w-full rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-surface)]/85 dark:bg-[#111827]/85 light:bg-white/90 backdrop-blur-md border border-[var(--border-color)] shadow-sm'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-3.5 py-1.5 sm:px-4 sm:py-2">
          {/* Brand Logo */}
          <a
            href="#home"
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--text-main)] hover:text-[var(--primary-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)] rounded-md px-2 py-1"
          >
            PORTFOLIO
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-0.5"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {portfolioData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredHref(item.href)}
                className="relative px-3 py-1.5 text-xs lg:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)] rounded-full"
              >
                {hoveredHref === item.href && (
                  <motion.div
                    layoutId="navbar-hover-indicator"
                    className="absolute inset-0 rounded-full bg-slate-800/40 dark:bg-slate-800/60 light:bg-slate-200/70 -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action: Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <ThemeToggle />

            {/* Mobile Menu Button with 40px touch area */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-slate-800/40 dark:hover:bg-slate-800/60 light:hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mt-2 p-3.5 rounded-2xl bg-[var(--bg-surface)]/95 dark:bg-[#111827]/95 light:bg-white/95 backdrop-blur-lg border border-[var(--border-color)] shadow-xl"
          >
            <ul className="flex flex-col gap-1">
              {portfolioData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-slate-800/30 dark:hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
