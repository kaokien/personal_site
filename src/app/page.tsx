import { BaseLayout } from '@/components/layouts';
import { Hero, FeaturedProjects, SkillsGrid } from '@/components/sections';
import { CreativeIntelligence } from '@/components/sections/CreativeIntelligence';
import { Marquee } from '@/components/ui/marquee';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import {
  Project,
  Skill,
  SkillCategory,
  SkillLevel,
  ProjectCategory,
  ProjectStatus,
} from '@/lib/types';

// Map JSON data to typed objects
const projects: Project[] = projectsData.map((p) => ({
  ...p,
  category: p.category as unknown as ProjectCategory,
  status: p.status as unknown as ProjectStatus,
}));

const skills: Skill[] = skillsData.map((s) => ({
  ...s,
  category: s.category as unknown as SkillCategory,
  level: s.level as unknown as SkillLevel,
}));

export default function HomePage() {
  return (
    <BaseLayout>
      <Hero />
      <div className="border-b border-neutral-800 bg-neutral-950 py-4 text-neutral-400">
        <Marquee>
          <span className="font-heading mx-8 text-lg font-bold tracking-widest uppercase">
            {'///'} LATEST DROPS {'///'}
          </span>
          <span className="font-heading text-primary mx-8 text-lg font-bold tracking-widest uppercase">
            AVAILABLE FOR HIRE
          </span>
          <span className="font-heading mx-8 text-lg font-bold tracking-widest uppercase">
            {'///'} NEW VISUALS {'///'}
          </span>
          <span className="font-heading text-primary mx-8 text-lg font-bold tracking-widest uppercase">
            ENGINEERING EXCELLENCE
          </span>
        </Marquee>
      </div>
      <FeaturedProjects projects={projects} />
      <CreativeIntelligence />
      <SkillsGrid skills={skills} />
    </BaseLayout>
  );
}
