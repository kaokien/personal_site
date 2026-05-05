import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import projectsData from '@/data/projects.json';
import { Project, ProjectCategory, ProjectStatus } from '@/lib/types';
import { ProjectsFilter } from './ProjectsFilter';

export const metadata: Metadata = {
  title: 'Projects | Kevin Adu-Poku',
  description:
    'A collection of web applications, enterprise video solutions, community platforms, and creative projects by Kevin Adu-Poku.',
};

// Map JSON data to typed objects
const projects: Project[] = projectsData.map((p) => ({
  ...p,
  category: p.category as unknown as ProjectCategory,
  status: p.status as unknown as ProjectStatus,
}));

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web_app', label: 'Web Apps' },
  { value: 'design', label: 'Community' },
  { value: 'art_culture', label: 'Art & Culture' },
];

export default function ProjectsPage() {
  return (
    <BaseLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              A collection of my work spanning web applications, mobile apps,
              and open-source contributions.
            </p>
          </div>

          {/* Client-side filtering */}
          <ProjectsFilter projects={projects} categories={categories} />
        </div>
      </section>
    </BaseLayout>
  );
}
