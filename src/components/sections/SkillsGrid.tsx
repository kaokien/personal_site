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
  [SkillLevel.BEGINNER]: 'bg-neutral-300 dark:bg-neutral-600',
  [SkillLevel.INTERMEDIATE]: 'bg-blue-400 dark:bg-blue-500',
  [SkillLevel.ADVANCED]: 'bg-emerald-400 dark:bg-emerald-500',
  [SkillLevel.EXPERT]: 'bg-purple-500 dark:bg-purple-400',
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
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
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
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-3">
                  {categorySkills
                    .sort((a, b) => a.order - b.order)
                    .map((skill) => (
                      <div key={skill.id}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-neutral-500 capitalize dark:text-neutral-500">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full rounded-full ${levelColors[skill.level as SkillLevel]} ${levelWidth[skill.level as SkillLevel]}`}
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
