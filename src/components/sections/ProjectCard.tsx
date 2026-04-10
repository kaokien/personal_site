'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="group-hover:border-accent-lime relative mb-4 aspect-[4/5] w-full overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-300">
          {project.thumbnailUrl ? (
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-white/[0.02]">
              <span className="font-heading text-6xl font-bold text-white/10 uppercase">
                {project.title.substring(0, 2)}
              </span>
            </div>
          )}

          {/* Overlay Status */}
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge
              variant="outline"
              className="border-white/10 bg-black/80 text-[10px]"
            >
              {project.year || '2024'}
            </Badge>
          </div>

          {/* Hover Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="bg-accent-lime flex h-12 w-12 items-center justify-center rounded-none text-black">
              <ArrowUpRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Content - "Lookbook" Caption Style */}
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading group-hover:text-accent-lime text-xl leading-none font-bold tracking-tight text-white uppercase transition-colors">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-[10px] tracking-widest text-white/30 uppercase">
              {project.category || 'CASE STUDY'}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-2 font-mono text-xs text-white/30">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={tag} className="tracking-wider uppercase">
                {tag}
                {i < project.tags.slice(0, 2).length - 1 ? ' /' : ''}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
