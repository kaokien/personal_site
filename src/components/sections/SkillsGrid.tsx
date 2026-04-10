'use client';

import { motion } from 'framer-motion';
import { Skill, SkillCategory, SkillLevel } from '@/lib/types';

interface SkillsGridProps {
  skills: Skill[];
}

const categoryLabels: Record<SkillCategory, string> = {
  [SkillCategory.FRONTEND]: 'Frontend',
  [SkillCategory.BACKEND]: 'Backend',
  [SkillCategory.MOBILE]: 'Mobile',
  [SkillCategory.DESIGN]: 'Design',
  [SkillCategory.TOOLS]: 'Tools & DevOps',
  [SkillCategory.SOFT_SKILLS]: 'Soft Skills',
};

const levelColors: Record<SkillLevel, string> = {
  [SkillLevel.BEGINNER]: 'bg-white/15',
  [SkillLevel.INTERMEDIATE]: 'bg-white/25',
  [SkillLevel.ADVANCED]: 'bg-white/40',
  [SkillLevel.EXPERT]: 'bg-accent-lime',
};

const levelWidth: Record<SkillLevel, string> = {
  [SkillLevel.BEGINNER]: 'w-1/4',
  [SkillLevel.INTERMEDIATE]: 'w-1/2',
  [SkillLevel.ADVANCED]: 'w-3/4',
  [SkillLevel.EXPERT]: 'w-full',
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  // Group skills by category
  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Define the order of categories to display
  const categoryOrder: SkillCategory[] = [
    SkillCategory.FRONTEND,
    SkillCategory.BACKEND,
    SkillCategory.MOBILE,
    SkillCategory.DESIGN,
    SkillCategory.TOOLS,
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/40">
            A comprehensive toolkit built over years of hands-on experience
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((category, categoryIndex) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills?.length) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-none border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-3">
                  {categorySkills
                    .sort((a, b) => a.order - b.order)
                    .map((skill) => (
                      <div key={skill.id}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-mono text-sm font-medium text-white/60">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-white/30 capitalize">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full ${levelColors[skill.level as SkillLevel]} ${levelWidth[skill.level as SkillLevel]}`}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
