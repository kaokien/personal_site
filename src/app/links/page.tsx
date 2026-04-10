'use client';

import Image from 'next/image';

/* ─────────────────────────── Data ─────────────────────────── */

const BADGES = [
  { icon: '⚙️', label: 'Solutions Engineer' },
  { icon: '🥊', label: 'Fitness & Boxing' },
  { icon: '🎮', label: 'PC Hardware' },
];

const ENTERPRISE_BRANDS = [
  'JW Player',
  'Forbes',
  'NBCU',
  'NPR',
  'TMZ',
  'Fox',
  'Thomson Reuters',
  'Guitar Center',
  'Hedgeye',
  'Weather Channel',
  'Pelmorex',
  'StockX',
  'Skilljar',
  'GoNoodle',
  'Barre3',
  'Accessible Media',
  'Journy.tv',
];

interface LinkItem {
  id: string;
  href: string;
  icon: string;
  title: string;
  desc: string;
  external?: boolean;
  primary?: boolean;
}

const LINKS: LinkItem[] = [
  {
    id: 'scale',
    href: 'https://calendly.com/adupokukevin/scale-application',
    icon: '⚡',
    title: 'Scale Your Brand',
    desc: 'Apply to have me build your digital ecosystem',
    external: true,
    primary: true,
  },
  {
    id: 'case-study',
    href: '/projects/coachjosh-official',
    icon: '📈',
    title: 'The Coach Josh Case Study',
    desc: 'How we beat the IG algorithm with owned infrastructure',
    external: false,
  },
  {
    id: 'twitch',
    href: 'https://twitch.tv/kinetic_logic',
    icon: '🟣',
    title: 'Twitch: kinetic_logic',
    desc: 'Live Gaming, PC Builds & RTX 5090 Hardware',
    external: true,
  },
  {
    id: 'fitness',
    href: 'https://instagram.com/kevysupr3me',
    icon: '🥊',
    title: 'Fitness & Boxing Lifestyle',
    desc: 'Training behind the scenes on Instagram',
    external: true,
  },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/kevysupr3me',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="links-social-icon"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/kevysupr3me',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="links-social-icon"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kadupoku',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="links-social-icon"
        fill="currentColor"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@adupokukevin.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="links-social-icon"
        fill="currentColor"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
];

/* ─────────────────────────── Component ─────────────────────────── */

export default function LinksPage() {
  return (
    <>
      {/* Scoped styles for the links page — uses the site's design DNA
          (neon lime, brutalist corners, Inter/Oswald/JetBrains Mono)
          but in a standalone bio-link layout. */}
      <style jsx global>{`
        .links-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow */
        .links-page::before {
          content: '';
          position: fixed;
          top: -30%;
          left: -20%;
          width: 60%;
          height: 60%;
          background: radial-gradient(
            circle,
            oklch(0.89 0.208 125 / 0.08) 0%,
            transparent 60%
          );
          pointer-events: none;
          z-index: 0;
        }

        .links-page::after {
          content: '';
          position: fixed;
          bottom: -20%;
          right: -20%;
          width: 50%;
          height: 50%;
          background: radial-gradient(
            circle,
            oklch(0.89 0.208 125 / 0.04) 0%,
            transparent 60%
          );
          pointer-events: none;
          z-index: 0;
        }

        .links-container {
          max-width: 480px;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* Staggered entrance */
        .links-container > * {
          opacity: 0;
          transform: translateY(24px);
          animation: linksReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .links-container > *:nth-child(1) {
          animation-delay: 0.05s;
        }
        .links-container > *:nth-child(2) {
          animation-delay: 0.1s;
        }
        .links-container > *:nth-child(3) {
          animation-delay: 0.15s;
        }
        .links-container > *:nth-child(4) {
          animation-delay: 0.2s;
        }
        .links-container > *:nth-child(5) {
          animation-delay: 0.25s;
        }
        .links-container > *:nth-child(6) {
          animation-delay: 0.3s;
        }
        .links-container > *:nth-child(7) {
          animation-delay: 0.35s;
        }
        .links-container > *:nth-child(8) {
          animation-delay: 0.4s;
        }

        @keyframes linksReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Avatar ── */
        .links-avatar-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .links-avatar {
          width: 110px;
          height: 110px;
          border: 2px solid oklch(1 0 0 / 0.12);
          object-fit: cover;
          position: relative;
          z-index: 2;
          transition: border-color 0.3s ease;
        }

        .links-avatar:hover {
          border-color: oklch(0.89 0.208 125);
        }

        .links-avatar-glow {
          position: absolute;
          inset: -4px;
          background: oklch(0.89 0.208 125 / 0.15);
          filter: blur(20px);
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .links-avatar-wrap:hover .links-avatar-glow {
          opacity: 1;
          background: oklch(0.89 0.208 125 / 0.25);
        }

        /* ── Header ── */
        .links-name {
          font-family: var(--font-heading), 'Oswald', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: oklch(1 0 0);
          margin-bottom: 0.25rem;
        }

        .links-subtitle {
          font-family: var(--font-mono), 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: oklch(1 0 0 / 0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        /* ── Badges ── */
        .links-badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .links-badge {
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.08);
          padding: 0.35rem 0.75rem;
          font-size: 0.72rem;
          font-family: var(--font-mono), monospace;
          color: oklch(1 0 0 / 0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
        }

        .links-badge:hover {
          border-color: oklch(0.89 0.208 125 / 0.3);
          color: oklch(0.89 0.208 125);
        }

        /* ── Enterprise Trust ── */
        .links-trust {
          margin-bottom: 2rem;
          padding: 1rem;
          background: oklch(1 0 0 / 0.02);
          border: 1px solid oklch(1 0 0 / 0.06);
        }

        .links-trust-title {
          font-family: var(--font-mono), monospace;
          font-size: 0.6rem;
          color: oklch(1 0 0 / 0.25);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .links-brands {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem 1.2rem;
        }

        .links-brand {
          font-family: var(--font-heading), 'Oswald', sans-serif;
          font-size: 0.75rem;
          color: oklch(1 0 0 / 0.2);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .links-brand:hover {
          color: oklch(1 0 0 / 0.4);
        }

        /* ── Divider ── */
        .links-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            oklch(0.89 0.208 125 / 0.2),
            transparent
          );
          margin-bottom: 2rem;
        }

        /* ── Link Cards ── */
        .links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .link-card {
          background: oklch(1 0 0 / 0.03);
          border: 1px solid oklch(1 0 0 / 0.08);
          padding: 1rem 1.25rem;
          text-decoration: none;
          color: oklch(1 0 0);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        /* Scan line hover effect */
        .link-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            oklch(0.89 0.208 125 / 0.04),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .link-card:hover {
          transform: translateY(-2px);
          border-color: oklch(0.89 0.208 125 / 0.5);
          background: oklch(0.89 0.208 125 / 0.04);
          box-shadow: 0 8px 32px oklch(0.89 0.208 125 / 0.08);
        }

        .link-card:hover::before {
          left: 150%;
        }

        .link-card:active {
          transform: translateY(0);
        }

        /* Primary CTA variant */
        .link-card--primary {
          border-color: oklch(0.89 0.208 125 / 0.3);
          background: linear-gradient(
            145deg,
            oklch(0.89 0.208 125 / 0.06),
            oklch(1 0 0 / 0.02)
          );
        }

        .link-card--primary:hover {
          border-color: oklch(0.89 0.208 125 / 0.7);
          background: oklch(0.89 0.208 125 / 0.08);
          box-shadow:
            0 8px 32px oklch(0.89 0.208 125 / 0.12),
            inset 0 1px 0 oklch(0.89 0.208 125 / 0.1);
        }

        .link-card--primary .link-card-title {
          color: oklch(0.89 0.208 125);
        }

        .link-card-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .link-card-icon {
          font-size: 1.4rem;
          width: 44px;
          height: 44px;
          background: oklch(1 0 0 / 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          border: 1px solid oklch(1 0 0 / 0.06);
        }

        .link-card:hover .link-card-icon {
          background: oklch(0.89 0.208 125 / 0.1);
          border-color: oklch(0.89 0.208 125 / 0.3);
        }

        .link-card-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .link-card-title {
          font-family: var(--font-heading), 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 0.15rem;
        }

        .link-card-desc {
          font-size: 0.78rem;
          color: oklch(1 0 0 / 0.4);
          font-weight: 300;
          line-height: 1.3;
        }

        .link-card-arrow {
          color: oklch(1 0 0 / 0.2);
          font-size: 0.85rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
          font-family: var(--font-mono), monospace;
        }

        .link-card:hover .link-card-arrow {
          transform: translateX(4px);
          color: oklch(0.89 0.208 125);
        }

        /* ── Socials Footer ── */
        .links-socials {
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .links-social-link {
          color: oklch(1 0 0 / 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .links-social-icon {
          width: 20px;
          height: 20px;
        }

        .links-social-link:hover {
          color: oklch(0.89 0.208 125);
          transform: scale(1.15);
        }

        /* ── Footer Credit ── */
        .links-credit {
          margin-top: 2.5rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.6rem;
          color: oklch(1 0 0 / 0.12);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .links-credit a {
          color: oklch(0.89 0.208 125 / 0.3);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .links-credit a:hover {
          color: oklch(0.89 0.208 125);
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .links-page {
            padding: 2rem 1rem;
          }

          .links-name {
            font-size: 1.5rem;
          }

          .links-avatar {
            width: 90px;
            height: 90px;
          }

          .link-card {
            padding: 0.85rem 1rem;
          }

          .link-card-icon {
            width: 38px;
            height: 38px;
            font-size: 1.2rem;
          }

          .link-card-title {
            font-size: 0.85rem;
          }

          .link-card-desc {
            font-size: 0.72rem;
          }
        }
      `}</style>

      <main className="links-page">
        <div className="links-container">
          {/* Avatar */}
          <div className="links-avatar-wrap">
            <div className="links-avatar-glow" />
            <Image
              src="/images/kevin-monogram.png"
              alt="Kevin Adu-Poku"
              width={110}
              height={110}
              className="links-avatar"
              priority
            />
          </div>

          {/* Name & Subtitle */}
          <h1 className="links-name">Kevin Adu-Poku</h1>
          <p className="links-subtitle">Growth Systems Engineer</p>

          {/* Badges */}
          <div className="links-badges">
            {BADGES.map((b) => (
              <span key={b.label} className="links-badge">
                <span>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>

          {/* Enterprise Trust */}
          <div className="links-trust">
            <p className="links-trust-title">
              Enterprise Systems Engineering For
            </p>
            <div className="links-brands">
              {ENTERPRISE_BRANDS.map((name) => (
                <span key={name} className="links-brand">
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="links-divider" />

          {/* Link Cards */}
          <div className="links-grid">
            {LINKS.map((link) => (
              <a
                key={link.id}
                id={`link-${link.id}`}
                href={link.href}
                className={`link-card ${link.primary ? 'link-card--primary' : ''}`}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <div className="link-card-content">
                  <div className="link-card-icon">{link.icon}</div>
                  <div className="link-card-text">
                    <span className="link-card-title">{link.title}</span>
                    <span className="link-card-desc">{link.desc}</span>
                  </div>
                </div>
                <span className="link-card-arrow">→</span>
              </a>
            ))}
          </div>

          {/* Social Footer */}
          <div className="links-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="links-social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p className="links-credit">
            Built by{' '}
            <a href="/" target="_blank" rel="noopener noreferrer">
              adupokukevin.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
