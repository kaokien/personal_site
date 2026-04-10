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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/40">
            My professional journey building digital products
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-white/10 md:left-1/2" />

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
                className={`border-accent-lime absolute top-1.5 left-2.5 h-3 w-3 border-2 bg-black md:left-auto ${
                  index % 2 === 0 ? 'md:right-[-7px]' : 'md:left-[-7px]'
                }`}
              />

              {/* Content card */}
              <div className="rounded-none border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20">
                {/* Date range */}
                <div className="mb-2 flex items-center gap-2 font-mono text-xs text-white/30 md:justify-end">
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
                <h3 className="text-lg font-semibold text-white">
                  {exp.position}
                </h3>
                <p className="mt-1 text-white/40">
                  {exp.company} • {exp.remote ? 'Remote' : exp.location}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-white/40">{exp.description}</p>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <ul
                    className={`mt-3 space-y-1 text-sm text-white/40 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 md:justify-end"
                      >
                        <span className="text-accent-lime shrink-0">✓</span>
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
                      className="rounded-none bg-white/5 px-2 py-0.5 font-mono text-xs text-white/40"
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
