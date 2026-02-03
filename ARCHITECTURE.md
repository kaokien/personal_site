# Personal Site Architecture Document - Kevin Adupoku

## Project Overview

**Repository Reference**: Based on previous site at https://adupokukevin.vercel.app  
**Objective**: Rebuild personal portfolio/website with modern best practices, maintainability, and scalability

---

## Technology Stack & Core Libraries

### Framework & Core

- **Next.js 14+** (App Router) - Primary framework
- **TypeScript** - Strict mode enabled for type safety
- **React 18+** - UI library

### Styling & UI

- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library for consistent design system
- **Framer Motion** - Animation library for smooth interactions
- **next-themes** - Dark/light mode support

### State Management & Data Fetching

- **React Server Components** - Default for data fetching
- **TanStack Query (React Query)** - Client-side data fetching and caching
- **Zustand** - Lightweight state management for global UI state (if needed)

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation with TypeScript inference

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

### Testing

- **Vitest** - Unit testing framework
- **Testing Library (React)** - Component testing
- **Playwright** - E2E testing for critical user flows
- **Coverage requirement**: Minimum 80% for utility functions and business logic

### Analytics & Monitoring

- **Vercel Analytics** - Performance and visitor tracking
- **Sentry** (optional Phase 2) - Error monitoring

---

## Architecture & Best Practices

### Code Organization

```
/src
  /app                  # Next.js app router pages
    /(root)            # Main site pages
    /api               # API routes
  /components
    /ui                # shadcn components
    /sections          # Page sections (Hero, About, Projects, etc.)
    /layouts           # Layout components
  /lib                 # Utility functions
    /constants         # Enums and constants
    /types             # TypeScript types
    /validations       # Zod schemas
  /hooks               # Custom React hooks
  /styles              # Global styles
  /data                # Static data and content
```

### Programming Methodologies

1. **Component Composition** - Prefer composition over props drilling
2. **Server-First Approach** - Use React Server Components by default, only use 'use client' when necessary
3. **Separation of Concerns** - Keep business logic separate from UI components
4. **DRY Principle** - Extract reusable logic into custom hooks and utilities
5. **Type Safety** - No `any` types; use proper TypeScript generics and inference
6. **Accessibility First** - WCAG 2.1 AA compliance minimum
7. **Performance** - Code splitting, lazy loading, optimized images with next/image
8. **SEO Optimization** - Proper metadata, semantic HTML, structured data

### Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants/Enums**: UPPER_SNAKE_CASE or PascalCase for enums
- **Hooks**: camelCase with 'use' prefix (e.g., `useScrollPosition.ts`)
- **Types/Interfaces**: PascalCase with descriptive names

### Testing Requirements

- **Unit tests** for all utility functions and custom hooks
- **Component tests** for interactive components
- **E2E tests** for contact form submission and navigation flows
- Write tests alongside feature development, not after

---

## Data Models & Content Structure

### Core Entities

#### Project

```typescript
enum ProjectStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  ARCHIVED = 'archived',
}

enum ProjectCategory {
  WEB_APP = 'web_app',
  MOBILE_APP = 'mobile_app',
  DESIGN = 'design',
  OPEN_SOURCE = 'open_source',
}

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  thumbnailUrl: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Experience

```typescript
enum ExperienceType {
  FULL_TIME = 'full_time',
  CONTRACT = 'contract',
  FREELANCE = 'freelance',
  INTERNSHIP = 'internship',
}

interface Experience {
  id: string;
  company: string;
  position: string;
  type: ExperienceType;
  location: string;
  remote: boolean;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  order: number;
}
```

#### Skill

```typescript
enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  MOBILE = 'mobile',
  DESIGN = 'design',
  TOOLS = 'tools',
  SOFT_SKILLS = 'soft_skills',
}

enum SkillLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  order: number;
}
```

#### BlogPost (Phase 2)

```typescript
enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // MDX content
  coverImage: string;
  status: PostStatus;
  tags: string[];
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  readingTime: number; // in minutes
  views: number;
}
```

#### Contact Form Submission

```typescript
enum SubmissionStatus {
  PENDING = 'pending',
  READ = 'read',
  REPLIED = 'replied',
  SPAM = 'spam',
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: SubmissionStatus;
  ipAddress?: string;
  userAgent?: string;
  submittedAt: Date;
}
```

### Validation Schemas (Zod)

Create corresponding Zod schemas for all data models for runtime validation

---

## Site Navigation & Features

### Site Structure

```
/                       # Home (Hero + Featured Projects)
/about                  # About Me + Experience + Skills
/projects               # Projects Grid with filtering
/projects/[slug]        # Individual Project Page
/blog                   # Blog listing (Phase 2)
/blog/[slug]            # Blog post page (Phase 2)
/contact                # Contact form
/resume                 # Downloadable resume / viewer
/uses                   # Tech stack & tools (Phase 3)
```

### Core Features by Section

#### Home Page

- Hero section with animated introduction
- Brief bio/tagline
- Featured projects showcase (3-4 projects)
- CTA buttons (View Projects, Contact Me)
- Social links

#### About Page

- Personal story/bio
- Professional experience timeline
- Skills organized by category with visual indicators
- Education section
- Personal interests/hobbies

#### Projects Page

- Grid/list view toggle
- Filter by category and tags
- Search functionality
- Sort options (newest, featured, A-Z)
- Load more/pagination

#### Individual Project Page

- Hero image/gallery
- Detailed description
- Technologies used
- Key features/achievements
- Links to live site and repository
- Related projects

#### Contact Page

- Contact form with validation
- Alternative contact methods
- Social media links
- Availability status

---

## Phased Development Plan

### MVP (Phase 1) - Core Portfolio

**Timeline**: 2-3 weeks  
**Goal**: Launch functional portfolio with essential features

**Features**:

- [ ] Home page with hero and featured projects
- [ ] About page with bio and skills
- [ ] Projects page with filtering
- [ ] Individual project pages
- [ ] Contact form with email delivery
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark/light mode
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Analytics integration
- [ ] Resume download functionality

**Data Management**: Static JSON files in `/data` directory

**Testing**:

- [ ] Unit tests for utilities
- [ ] Component tests for interactive elements
- [ ] E2E test for contact form
- [ ] Performance audit (Lighthouse score > 90)

---

### Phase 2 - Content & Engagement

**Timeline**: 3-4 weeks  
**Goal**: Add blogging capability and enhance engagement

**Features**:

- [ ] Blog listing and individual post pages
- [ ] MDX support for blog posts
- [ ] Blog search and tag filtering
- [ ] Reading time calculator
- [ ] Table of contents for blog posts
- [ ] Social sharing buttons
- [ ] Comments system (Giscus or similar)
- [ ] Newsletter signup (Mailchimp/ConvertKit)
- [ ] RSS feed
- [ ] View counter for blog posts

**Data Management**: Migrate to CMS (Sanity.io or Contentful) OR file-based CMS (Contentlayer)

**Testing**:

- [ ] Tests for MDX rendering
- [ ] E2E tests for blog navigation
- [ ] Newsletter form validation tests

---

### Phase 3 - Advanced Features

**Timeline**: 4-5 weeks  
**Goal**: Add interactive elements and optimize user experience

**Features**:

- [ ] /uses page (tech stack and tools)
- [ ] Interactive project demos/embeds where applicable
- [ ] Testimonials/recommendations section
- [ ] Advanced animations and micro-interactions
- [ ] Case studies for select projects
- [ ] Command palette (Cmd+K navigation)
- [ ] Page transitions
- [ ] Print-optimized resume view
- [ ] Multi-language support (if needed)
- [ ] Admin dashboard for content management

**Data Management**: Full CMS integration with preview mode

**Testing**:

- [ ] Comprehensive E2E test suite
- [ ] Performance optimization (Core Web Vitals)
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

### Phase 4 - Optimization & Scaling (Ongoing)

**Features**:

- [ ] Advanced analytics and heatmaps
- [ ] A/B testing for CTA optimization
- [ ] Progressive Web App (PWA) capabilities
- [ ] Advanced caching strategies
- [ ] CDN optimization for assets
- [ ] Automated content backups
- [ ] Security hardening

---

## Deployment Strategy

### Primary Platform: **Vercel**

**Why**: Native Next.js support, automatic deployments, edge functions, analytics

### Deployment Workflow

1. **Development**: Local development with hot reload
2. **Preview**: Automatic preview deployments for all PRs
3. **Staging**: Deploy to staging branch for final testing
4. **Production**: Deploy to main branch with manual approval

### Environment Variables

```
# Production
NEXT_PUBLIC_SITE_URL=https://adupokukevin.com
CONTACT_EMAIL_API_KEY=xxx
RESEND_API_KEY=xxx (for email delivery)
NEXT_PUBLIC_GA_ID=xxx
SENTRY_DSN=xxx (Phase 2)

# CMS (Phase 2)
SANITY_PROJECT_ID=xxx
SANITY_DATASET=production
SANITY_API_TOKEN=xxx
```

### Content Management Options

**MVP (Phase 1)**:

- Static JSON files in `/data` directory
- Manual updates through code commits
- Type-safe with TypeScript interfaces

**Phase 2+ Options**:

**Option A: Sanity.io (Recommended)**

- Hosted CMS with excellent Next.js integration
- Real-time preview
- Portable Text/rich content
- Free tier sufficient for personal site
- GROQ queries for flexible data fetching

**Option B: Contentlayer**

- File-based CMS (MDX files)
- Type-safe content
- No external dependencies
- Version controlled with Git
- Excellent for blog-focused content

**Option C: Notion API**

- Use Notion as CMS
- Familiar interface
- Free
- Limited customization

**Decision**: Start with static JSON (MVP), migrate to Sanity.io in Phase 2

### Database (If needed for Phase 3+)

- **Vercel Postgres** - For contact form submissions, analytics
- **Upstash Redis** - For rate limiting and caching
- Alternative: **Supabase** for full backend features

### Email Delivery

- **Resend** - Modern email API for transactional emails
- Alternative: **SendGrid** or **Mailgun**

### Asset Storage

- **Vercel Blob Storage** - For user uploads (if needed)
- **Cloudinary** - For optimized image delivery (alternative)
- Default: Store optimized images in `/public` for MVP

### CI/CD Pipeline

1. **Pre-commit**: Lint and format with Husky
2. **PR Checks**:
   - ESLint
   - TypeScript type checking
   - Unit tests
   - Build verification
3. **Post-deploy**:
   - Lighthouse CI
   - Visual regression testing (Phase 3)

---

## Performance Targets

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores (Mobile)

- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Bundle Size

- Initial JS bundle: < 100KB (gzipped)
- Total page weight: < 500KB

---

## Accessibility Requirements

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratio ≥ 4.5:1
- Alt text for all images
- Skip to main content link
- Screen reader tested

---

## Security Considerations

- Environment variables for sensitive data
- Rate limiting on contact form (5 submissions/hour per IP)
- CSRF protection on form submissions
- Content Security Policy headers
- Input sanitization (especially for contact form)
- Regular dependency updates
- No sensitive data in client-side code

---

## Development Workflow

### Feature Implementation Process

1. Reference this architecture document
2. Switch AI to "Planning Mode" with review enabled
3. Request implementation plan for specific feature
4. Review plan, add comments, request revisions
5. Approve plan and generate code
6. Write tests alongside implementation
7. Run local testing and validation
8. Create PR with preview deployment
9. Review and merge

### Code Review Checklist

- [ ] TypeScript types properly defined
- [ ] Unit tests written and passing
- [ ] Accessibility standards met
- [ ] Performance optimized (lazy loading, code splitting)
- [ ] Mobile responsive
- [ ] Dark mode compatible
- [ ] No console errors or warnings
- [ ] Follows established patterns in codebase

### When to Use Claude vs Gemini

- **Gemini/Antigravity**: Feature implementation, rapid development, new components
- **Claude Opus 4.5**: Troubleshooting crashes, codebase review, architecture decisions, debugging complex issues

---

## Content Strategy

### Projects to Feature (Update with actual projects)

- List your key projects with descriptions
- Prioritize 3-4 for "featured" status
- Gather screenshots, demos, testimonials

### Initial Content Needed

- Professional headshot
- Bio (short and long versions)
- Work experience details
- Skills inventory
- Project descriptions and assets
- Social media links
- Resume PDF

---

## Success Metrics

### MVP Launch Criteria

- [ ] All Phase 1 features complete and tested
- [ ] Mobile responsive on iOS and Android
- [ ] Lighthouse scores meet targets
- [ ] Contact form delivers emails successfully
- [ ] Zero critical accessibility issues
- [ ] SEO meta tags implemented
- [ ] Analytics tracking functional
- [ ] Custom domain configured

### Post-Launch Tracking

- Monthly visitor count
- Bounce rate
- Average session duration
- Contact form conversion rate
- Most viewed projects
- Page load performance

---

## Maintenance Plan

### Weekly

- Monitor analytics
- Check for contact form submissions
- Review error logs (if Sentry integrated)

### Monthly

- Update dependencies
- Review performance metrics
- Content updates (add new projects)

### Quarterly

- Security audit
- Accessibility re-evaluation
- Feature additions based on feedback
- Codebase review with Claude

---

## Notes for AI Assistant

When implementing features, always:

1. Reference the relevant section of this document
2. Maintain type safety throughout
3. Write tests before marking feature complete
4. Consider mobile experience first
5. Optimize for performance
6. Follow established patterns in codebase
7. Update this document if architecture decisions change

### Example Implementation Prompt

```
Reference: Architecture Document - Section "Projects Page" and "Data Models > Project"

Create implementation plan for the Projects page with filtering functionality.
Requirements:
- Use ProjectCategory enum for filtering
- Implement search across title and tags
- Use React Server Components for initial data fetch
- Client-side filtering for better UX
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Include unit tests for filter logic
```

---

**Document Version**: 1.0  
**Last Updated**: 2026-01-27  
**Next Review**: After MVP completion
