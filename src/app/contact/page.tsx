import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts';
import { ContactForm } from '@/components/sections';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Kevin Adu-Poku',
  description:
    'Get in touch with Kevin Adu-Poku for project inquiries, collaborations, or just to say hello.',
};

export default function ContactPage() {
  return (
    <BaseLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-white/50">
              Have a project in mind? Let&apos;s talk about how I can help bring
              your ideas to life.
            </p>
          </div>

          {/* Contact Options */}
          <div className="mx-auto mt-12 max-w-lg">
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:border-accent-lime flex items-center gap-3 rounded-none border border-white/10 bg-white/[0.02] p-4 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5">
                  <svg
                    className="h-5 w-5 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="font-mono text-xs text-white/30">
                    {siteConfig.email}
                  </div>
                </div>
              </a>
              <a
                href={
                  siteConfig.socials.find((s) => s.name === 'LinkedIn')?.url ||
                  '#'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-accent-lime flex items-center gap-3 rounded-none border border-white/10 bg-white/[0.02] p-4 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5">
                  <svg
                    className="h-5 w-5 text-white/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">LinkedIn</div>
                  <div className="font-mono text-xs text-white/30">
                    Connect with me
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
