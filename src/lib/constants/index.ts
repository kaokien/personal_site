import { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: 'Kevin Adu-Poku',
  title: 'Kevin Adu-Poku | Growth Solutions Engineer',
  description:
    'Growth Solutions Engineer specializing in video technology, platform optimization, and driving measurable revenue through custom engineering solutions.',
  url: 'https://personal-site-zeta-snowy.vercel.app',
  email: 'kevin.adupoku@icloud.com',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/kaokien',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kevinadupoku',
      icon: 'linkedin',
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
