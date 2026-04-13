import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/kadupoku', label: 'GitHub' },
  { href: 'https://linkedin.com/in/kadupoku', label: 'LinkedIn' },
  { href: 'https://twitter.com/kadupoku', label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs tracking-wider text-white/30 uppercase">
            © {currentYear} Kevin Adu-Poku. All rights reserved.
          </p>

          <nav className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-lime font-mono text-xs tracking-wider text-white/30 uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
