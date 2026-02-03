'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BaseLayout } from '@/components/layouts';
import { ProjectCard } from '@/components/sections';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import { Project, ProjectCategory, ProjectStatus } from '@/lib/types';

// Map JSON data to typed objects
const projects: Project[] = projectsData.map((p) => ({
  ...p,
  category: p.category as unknown as ProjectCategory,
  status: p.status as unknown as ProjectStatus,
}));

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web_app', label: 'Web Apps' },
  { value: 'mobile_app', label: 'Mobile Apps' },
  { value: 'design', label: 'Design' },
  { value: 'open_source', label: 'Open Source' },
  { value: 'art_culture', label: 'Art & Culture' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => a.order - b.order);
    if (activeCategory === 'all') return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <BaseLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              A collection of my work spanning web applications, mobile apps,
              and open-source contributions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  activeCategory === category.value ? 'default' : 'outline'
                }
                size="sm"
                onClick={() => setActiveCategory(category.value)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center"
            >
              <p className="text-neutral-600 dark:text-neutral-400">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </BaseLayout>
  );
}
