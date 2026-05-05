'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { siteConfig } from '@/lib/constants';

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormInput) => {
    try {
      const subject = encodeURIComponent(
        data.subject || `Portfolio inquiry from ${data.name}`
      );
      const body = encodeURIComponent(
        `Hi Kevin,\n\n${data.message}\n\n— ${data.name}\n${data.email}`
      );

      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, '_self');

      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="dark:border-border dark:bg-muted/30 mx-auto max-w-lg rounded-none border border-black/10 bg-black/[0.02] p-6 shadow-none"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="dark:text-muted-foreground mb-1.5 block font-mono text-xs font-medium tracking-wider text-black/50 uppercase"
          >
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="dark:text-muted-foreground mb-1.5 block font-mono text-xs font-medium tracking-wider text-black/50 uppercase"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="dark:text-muted-foreground mb-1.5 block font-mono text-xs font-medium tracking-wider text-black/50 uppercase"
          >
            Subject{' '}
            <span className="dark:text-muted-foreground/60 text-black/20">
              (optional)
            </span>
          </label>
          <Input
            id="subject"
            type="text"
            placeholder="What's this about?"
            {...register('subject')}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="dark:text-muted-foreground mb-1.5 block font-mono text-xs font-medium tracking-wider text-black/50 uppercase"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={5}
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-accent-lime/10 text-accent-lime rounded-none p-4 text-center font-mono text-sm"
          >
            Opening your email client. Send when ready!
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-none bg-red-500/10 p-4 text-center font-mono text-sm text-red-400"
          >
            Something went wrong. Please email me directly at{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
