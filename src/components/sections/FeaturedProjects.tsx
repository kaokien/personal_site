'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/lib/types';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <span className="text-accent-lime mb-2 block font-mono text-xs font-bold tracking-widest uppercase">
              § 01 &nbsp;·&nbsp; Work Showcase
            </span>
            <h2 className="text-foreground font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2 font-mono text-xs tracking-wider uppercase">
              A select catalog of deployed products & engineering solutions.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
