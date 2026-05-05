'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-sm dark:border-white/10 dark:bg-black/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-black dark:text-white"
        >
          Kevin Adu-Poku
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent-lime text-sm font-medium text-black/50 transition-colors dark:text-white/50"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-black dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav className="border-t border-black/10 bg-white/95 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-black/95">
          <div className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-accent-lime border-b border-black/5 py-3 text-base font-medium text-black/70 transition-colors dark:border-white/5 dark:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
