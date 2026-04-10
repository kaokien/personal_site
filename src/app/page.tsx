import { BaseLayout } from '@/components/layouts';
import { Hero, FeaturedProjects } from '@/components/sections';
import { CreativeIntelligence } from '@/components/sections/CreativeIntelligence';
import { Marquee } from '@/components/ui/marquee';
import projectsData from '@/data/projects.json';
import { Project, ProjectCategory, ProjectStatus } from '@/lib/types';

// Map JSON data to typed objects
const projects: Project[] = projectsData.map((p) => ({
  ...p,
  category: p.category as unknown as ProjectCategory,
  status: p.status as unknown as ProjectStatus,
}));

const trustedByLogos = ['JW Player', 'Apple', 'Forbes', 'NBCU', 'Datto'];

export default function HomePage() {
  return (
    <BaseLayout>
      <Hero />

      {/* Trusted By Strip */}
      <div className="border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-center font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">
            Enterprise Systems Experience
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {trustedByLogos.map((name) => (
              <span
                key={name}
                className="font-heading text-lg font-bold tracking-widest text-white/15 uppercase transition-colors hover:text-white/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-b border-white/10 py-4 text-white/30">
        <Marquee>
          <span className="font-heading mx-8 text-lg font-bold tracking-widest uppercase">
            {'///'} LATEST DROPS {'///'}
          </span>
          <span className="font-heading text-accent-lime mx-8 text-lg font-bold tracking-widest uppercase">
            AVAILABLE FOR HIRE
          </span>
          <span className="font-heading mx-8 text-lg font-bold tracking-widest uppercase">
            {'///'} NEW VISUALS {'///'}
          </span>
          <span className="font-heading text-accent-lime mx-8 text-lg font-bold tracking-widest uppercase">
            ENGINEERING EXCELLENCE
          </span>
        </Marquee>
      </div>

      <FeaturedProjects projects={projects} />
      <CreativeIntelligence />
    </BaseLayout>
  );
}
