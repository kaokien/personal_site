import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { ExperienceTimeline, SkillsGrid } from '@/components/sections';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import {
  Experience,
  Skill,
  ExperienceType,
  SkillCategory,
  SkillLevel,
} from '@/lib/types';

export const metadata: Metadata = {
  title: 'About | Kevin Adupoku',
  description:
    'Learn more about Kevin Adupoku, a Software Engineer passionate about building exceptional digital experiences.',
};

// Map JSON data to typed objects
const experiences: Experience[] = experienceData.map((e) => ({
  ...e,
  type: e.type as unknown as ExperienceType,
}));

const skills: Skill[] = skillsData.map((s) => ({
  ...s,
  category: s.category as unknown as SkillCategory,
  level: s.level as unknown as SkillLevel,
}));

export default function AboutPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I&apos;m a Solutions Engineer and Creative Developer with a
              passion for crafting elegant solutions to complex problems. With
              expertise in modern web technologies and video engineering, I
              specialize in building performant, user-centric applications that
              make a real impact.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              From engineering custom video implementations for major clients to
              providing technical mentorship, my approach combines technical
              excellence with strategic thinking to drive business results.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                5+
              </div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Years Experience
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                20+
              </div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Projects Delivered
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                10k+
              </div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Users Reached
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline experiences={experiences} />

      {/* Skills Grid */}
      <SkillsGrid skills={skills} />

      {/* CTA Section */}
      <section className="bg-neutral-50 py-20 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Interested in working together?
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </BaseLayout>
  );
}
