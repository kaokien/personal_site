'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types';

interface ProjectsFilterProps {
  projects: Project[];
  categories: { value: string; label: string }[];
}

export function ProjectsFilter({ projects, categories }: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => a.order - b.order);
    if (activeCategory === 'all') return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
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
            variant={activeCategory === category.value ? 'default' : 'outline'}
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
          <p className="text-muted-foreground">
            No projects in this category yet.
          </p>
        </motion.div>
      )}
    </>
  );
}
