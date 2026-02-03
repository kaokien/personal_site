'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

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
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            My professional journey building digital products
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200 md:left-1/2 md:-translate-x-px dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />

          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:ml-auto md:pl-12 md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1.5 left-2.5 h-3 w-3 rounded-full border-2 border-neutral-900 bg-white md:left-auto dark:border-white dark:bg-neutral-950 ${
                  index % 2 === 0 ? 'md:right-[-7px]' : 'md:left-[-7px]'
                }`}
              />

              {/* Content card */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                {/* Date range */}
                <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500 md:justify-end dark:text-neutral-500">
                  {index % 2 !== 0 && <span className="hidden md:inline" />}
                  <span>
                    {formatDate(exp.startDate)} —{' '}
                    {exp.current
                      ? 'Present'
                      : exp.endDate
                        ? formatDate(exp.endDate)
                        : ''}
                  </span>
                </div>

                {/* Company & Role */}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {exp.position}
                </h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {exp.company} • {exp.remote ? 'Remote' : exp.location}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <ul
                    className={`mt-3 space-y-1 text-sm text-neutral-500 dark:text-neutral-500 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 md:justify-end"
                      >
                        <span className="shrink-0 text-emerald-500">✓</span>
                        <span
                          className={index % 2 === 0 ? 'md:order-first' : ''}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div
                  className={`mt-4 flex flex-wrap gap-1.5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                >
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
