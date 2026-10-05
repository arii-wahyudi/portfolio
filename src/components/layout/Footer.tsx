import { portfolioData } from '@/config/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-surface)]/50 backdrop-blur-sm mt-auto">
      <div className="max-w-[1150px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        {/* Copyright info */}
        <div>
          <p>
            © {currentYear}{' '}
            <span className="text-[var(--text-main)] font-medium">
              {portfolioData.personal.name}
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Quick Anchor Navigation */}
        <div className="flex items-center gap-5">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social channels link summary */}
        <div className="flex items-center gap-4">
          {portfolioData.contact.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform !== 'email' ? '_blank' : undefined}
              rel={social.platform !== 'email' ? 'noopener noreferrer' : undefined}
              className="hover:text-[var(--primary-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)] rounded-sm"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
