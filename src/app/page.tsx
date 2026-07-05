'use client';

import { BaseLayout } from '@/components/layouts';
import { Hero, FeaturedProjects } from '@/components/sections';
import projectsData from '@/data/projects.json';
import { Project, ProjectCategory, ProjectStatus } from '@/lib/types';

// Map JSON data to typed objects
const projects: Project[] = projectsData.map((p) => ({
  ...p,
  category: p.category as unknown as ProjectCategory,
  status: p.status as unknown as ProjectStatus,
}));
const jwpClients = [
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

const previousCompanies = ['Apple', 'Yale University', 'Datto'];

export default function HomePage() {
  return (
    <BaseLayout>
      <Hero />

      {/* Client & Experience Strips */}
      <div className="dark:border-border border-b border-black/10 py-6">
        <div className="container mx-auto px-4">
          {/* JW Player Clients */}
          <p className="dark:text-muted-foreground/60 mb-4 text-center font-mono text-[10px] tracking-[0.3em] text-black/20 uppercase">
            Clients Engineered For @ JW Player
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {jwpClients.map((name) => (
              <span
                key={name}
                className="font-heading dark:hover:text-muted-foreground text-lg font-bold tracking-widest text-black/15 uppercase transition-colors hover:text-black/40 dark:text-white/15"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="dark:bg-muted/30 mx-auto my-5 h-px w-32 bg-black/5" />

          {/* Previous Companies */}
          <p className="mb-3 text-center font-mono text-[10px] tracking-[0.3em] text-black/15 uppercase dark:text-white/15">
            Previously At
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {previousCompanies.map((name) => (
              <span
                key={name}
                className="font-heading dark:hover:text-muted-foreground text-sm font-bold tracking-widest text-black/10 uppercase transition-colors hover:text-black/30 dark:text-white/10"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FeaturedProjects projects={projects} />
    </BaseLayout>
  );
}
