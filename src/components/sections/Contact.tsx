import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, GitBranch, Briefcase, Camera } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <GitBranch className="w-5 h-5" />;
      case 'linkedin':
        return <Briefcase className="w-5 h-5" />;
      case 'instagram':
        return <Camera className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Professional Links"
      className="py-20 sm:py-28 border-t border-[var(--border-color)]/60"
    >
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal className="space-y-2 mb-12 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--primary-blue)] uppercase tracking-wider">
            <span className="text-[var(--text-muted)]">// 04</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Let's Start a Conversation
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Interested in discussing opportunities, project collaborations, or technical questions? Reach out directly via email or connect through professional networks.
          </p>
        </ScrollReveal>

        {/* Contact Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Main Email CTA Card (7 cols) */}
          <ScrollReveal
            delay={0.1}
            className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] space-y-6"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">
                Direct Email Communication
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                The fastest way to reach me for job inquiries, technical discussions, or interview schedules.
              </p>
            </div>

            {/* Email Address Display Box with Copy Button */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <span className="text-xs sm:text-sm font-mono text-[var(--text-main)] truncate mr-2 select-all">
                  {contact.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-[var(--text-muted)] hover:text-[var(--primary-blue)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium bg-[var(--primary-blue)] hover:bg-[var(--primary-hover)] text-white transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Email Langsung</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Professional Channels Card (5 cols) */}
          <ScrollReveal
            delay={0.2}
            className="md:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-[var(--text-main)]">
                Professional Networks
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Explore code repositories, verified credentials, and professional activity.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-2.5 pt-2">
              {contact.socials
                .filter((s) => s.platform !== 'email')
                .map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] hover:border-[var(--primary-blue)]/50 text-[var(--text-main)] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--text-muted)] group-hover:text-[var(--primary-blue)] transition-colors">
                        {getSocialIcon(social.platform)}
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {social.label}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--primary-blue)] transition-colors" />
                  </a>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
