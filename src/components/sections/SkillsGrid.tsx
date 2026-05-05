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
  [SkillLevel.BEGINNER]: 'bg-foreground/15',
  [SkillLevel.INTERMEDIATE]: 'bg-foreground/25',
  [SkillLevel.ADVANCED]: 'bg-foreground/40',
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
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
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
                className="border-border bg-muted/30 rounded-none border p-6"
              >
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-3">
                  {categorySkills
                    .sort((a, b) => a.order - b.order)
                    .map((skill) => (
                      <div key={skill.id}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-foreground/60 font-mono text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground font-mono text-xs capitalize">
                            {skill.level}
                          </span>
                        </div>
                        <div className="bg-muted/30 h-1 w-full">
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
