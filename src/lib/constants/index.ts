import { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: 'Kevin Adupoku',
  title: 'Kevin Adupoku | Solutions Engineer & Creative Developer',
  description:
    'Software Engineer specializing in building exceptional digital experiences. Passionate about web development, mobile apps, and creating impactful solutions.',
  url: 'https://adupokukevin.com',
  email: 'hello@adupokukevin.com',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/kadupoku',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kadupoku',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kadupoku',
      icon: 'twitter',
    },
  ],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
