import { Header } from './Header';
import { Footer } from './Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Editorial Masthead Strip */}
      <div className="border-b border-black/10 dark:border-white/10">
        <div className="text-muted-foreground container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] uppercase">
          <span>Vol. 01 &nbsp;·&nbsp; Issue 02</span>
          <span className="text-accent-lime hidden font-serif text-xs tracking-normal normal-case italic md:inline">
            A log of high-performance growth engineering and digital products
          </span>
          <span>Est. 2025 &nbsp;·&nbsp; New Haven, CT</span>
        </div>
      </div>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
