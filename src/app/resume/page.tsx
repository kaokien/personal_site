import { Metadata } from 'next';
import Link from 'next/link';
import { BaseLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume | Kevin Adu-Poku',
  description:
    'Technical Specification: Kevin Adu-Poku - Growth Solutions Engineer',
};

export default function ResumePage() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date
      .toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })
      .replace('/', '.');
  };

  return (
    <BaseLayout>
      <section className="bg-background min-h-screen py-12 font-mono sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Header Block */}
          <div className="mb-12 border-y border-white/20 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
              <div className="tracking-widest uppercase">
                <h1 className="font-heading text-5xl leading-none font-bold">
                  KEVIN
                  <br />
                  ADU-POKU
                </h1>
                <p className="text-muted-foreground mt-2 text-sm">
                  SPEC_SHEET_VOL_01
                </p>
              </div>

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="text-muted-foreground space-y-1 text-xs tracking-wider uppercase">
                  <p>ROLE: Growth Solutions Engineer</p>
                  <p>LOC: New York, NY</p>
                  <p>ID: {siteConfig.email}</p>
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-8 text-xs"
                  >
                    <a href="/resume.pdf" download>
                      DOWNLOAD_PDF
                    </a>
                  </Button>
                  <Button asChild size="sm" className="h-8 text-xs">
                    <Link href="/contact">INITIATE_CONTACT</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="mb-6 border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-white/40 uppercase">
              01 // Experience_Log
            </h2>

            <div className="space-y-12">
              {experienceData
                .sort((a, b) => a.order - b.order)
                .map((exp) => (
                  <div
                    key={exp.id}
                    className="group grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]"
                  >
                    {/* Left Column: Meta */}
                    <div className="text-muted-foreground text-xs">
                      <div className="text-foreground mb-1 font-bold">
                        {formatDate(exp.startDate)} —{' '}
                        {exp.current
                          ? 'PRESENT'
                          : exp.endDate
                            ? formatDate(exp.endDate)
                            : ''}
                      </div>
                      <div className="tracking-wider uppercase">
                        {exp.company}
                      </div>
                      <div className="mt-2 text-[10px] opacity-60">
                        {exp.location || 'Remote'}
                      </div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                      <h3 className="font-heading mb-2 text-xl leading-none font-bold tracking-tight uppercase">
                        {exp.position}
                      </h3>
                      <p className="text-muted-foreground mb-4 max-w-2xl font-sans text-sm">
                        {exp.description}
                      </p>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2 text-xs"
                          >
                            <span className="text-accent-lime mt-0.5">::</span>
                            <span className="font-sans">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="mb-6 border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-white/40 uppercase">
              02 // Technical_Modules
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-1 md:col-span-3">
                <div className="flex flex-wrap gap-2">
                  {skillsData
                    .sort((a, b) => a.order - b.order)
                    .map((skill) => (
                      <Badge
                        key={skill.id}
                        variant="outline"
                        className="hover:bg-accent-lime rounded-none px-3 py-1 font-mono text-[10px] text-white/40 uppercase hover:text-black"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="mb-6 border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-white/40 uppercase">
              03 // Education_Database
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]">
              <div className="text-muted-foreground text-xs">
                <div className="text-foreground font-bold">2019 — 2020</div>
                <div className="uppercase">Holberton School</div>
              </div>
              <div>
                <h3 className="font-heading mb-1 text-lg font-bold uppercase">
                  Full Stack Engineering
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
                  Advanced curriculum in C, Python, DevOps, and Web Stack
                  technologies. Focus: System Architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
