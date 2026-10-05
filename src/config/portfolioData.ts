import type { PortfolioData } from '@/types/portfolio';
import portraitPlaceholder from '@/assets/profile/portrait-placeholder.svg';
import projectPlaceholder from '@/assets/projects/project-placeholder.svg';

/**
 * Portfolio Data Configuration
 * Single source of truth for all portfolio content.
 * 
 * NOTE: Values containing [YOUR ...] or [NEEDS USER INPUT]
 * are personal placeholders designed to be easily replaced by the developer.
 */
export const portfolioData: PortfolioData = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  personal: {
    name: '[YOUR NAME]',
    role: 'Web Developer',
    headline: 'Building fast, intentional, and accessible web experiences.',
    subheadline:
      'A Web Developer focused on clean frontend architecture, responsive design systems, and robust full-stack integration.',
    portraitUrl: portraitPlaceholder,

    // About Section structured blocks per PRD
    shortIntro:
      'Web Developer with a strong foundation in modern web standards, component architecture, and responsive design. Passionate about turning complex problem spaces into intuitive, high-performance digital tools that users love to navigate.',
    developmentFocus:
      'Prioritizing clean modular code, accessible UI components adhering to WCAG AA guidelines, predictable state handling, and optimal frontend performance metrics across desktop and mobile form factors.',
    howIWork:
      'I approach software engineering with intentionality: decomposing user workflows into atomic components, maintaining strict type safety, validating accessibility early, and avoiding unnecessary dependencies.',
    currentFocus:
      'Deepening expertise in full-stack TypeScript patterns, design token workflows, micro-interaction ergonomics, and lighthouse performance optimization.',
  },

  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'TypeScript' },
        { name: 'JavaScript (ESNext)' },
        { name: 'HTML5 & Semantic Web' },
        { name: 'CSS3 & Modern Layouts' },
        { name: '[Language Placeholder]', isExploring: true },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: 'Next.js / Vite' },
        { name: 'Accessible UI Primitives' },
        { name: '[Exploring Frontend Tech]', isExploring: true },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'RESTful API Integration' },
        { name: 'Node.js / Express' },
        { name: 'SQL & Relational Schema' },
        { name: '[Exploring Backend Tech]', isExploring: true },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub Workflow' },
        { name: 'VS Code & Chrome DevTools' },
        { name: 'ESLint & Prettier' },
        { name: 'Figma & Design Tokens' },
      ],
    },
  ],

  projects: [
    {
      id: 'project-1',
      title: 'Enterprise Analytics Dashboard [Project 1]',
      shortDescription:
        'A comprehensive data monitoring dashboard featuring interactive visualization charts, responsive filter controls, and real-time metric tracking.',
      thumbnail: projectPlaceholder,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/analytics-dashboard',
      demoUrl: 'https://[YOUR DEMO URL 1]',
      problem:
        'Users experienced significant latency and visual clutter when monitoring complex operational datasets across multiple disparate views.',
      solution:
        'Architected a modular component library featuring memoized chart widgets, unified filter state, and responsive breakdown cards optimized for fast data rendering.',
      keyFeatures: [
        'Interactive telemetry charts with customizable range filters',
        'Responsive layout scaling seamlessly from 375px mobile to ultrawide displays',
        'Strict type contracts for all API request and response models',
      ],
      myRole:
        'Lead frontend development: designed component architecture, integrated data layers, and ensured compliance with WCAG contrast requirements.',
    },
    {
      id: 'project-2',
      title: 'Collaborative Workspace Platform [Project 2]',
      shortDescription:
        'A productivity and documentation platform designed for technical teams to organize specifications, workflows, and task progress.',
      thumbnail: projectPlaceholder,
      technologies: ['TypeScript', 'React', 'REST API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/workspace-platform',
      demoUrl: 'https://[YOUR DEMO URL 2]',
      problem:
        'Engineering teams required a frictionless interface to manage technical documentation without navigating cumbersome administrative interfaces.',
      solution:
        'Engineered an intuitive SPA layout with instant search filtering, keyboard shortcuts, and clean modal dialogs for item inspection.',
      keyFeatures: [
        'Keyboard-driven modal interactions and quick-search navigation',
        'Decoupled UI state ensuring smooth 60fps view transitions',
        'Accessible color modes with full dark and light theme parity',
      ],
      myRole:
        'Implemented core interaction flows, accessible modal primitives, and state synchronization across views.',
    },
    {
      id: 'project-3',
      title: 'Developer Resource Portal [Project 3]',
      shortDescription:
        'A curated technical catalog and documentation browser connecting developers to vetted tools, guidelines, and code snippets.',
      thumbnail: projectPlaceholder,
      technologies: ['JavaScript', 'React', 'Web APIs', 'Tailwind CSS'],
      githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/resource-portal',
      demoUrl: 'https://[YOUR DEMO URL 3]',
      problem:
        'Developers frequently lost time searching across fragmented bookmarks and unverified code snippets.',
      solution:
        'Created a centralized catalog with tag-based categorization, single-click code copying, and client-side offline caching.',
      keyFeatures: [
        'Fast client-side category filtering with zero network lag',
        'One-click copy to clipboard with tactile visual confirmation',
        'Lightweight bundle footprint under 50KB gzip for fast initial paint',
      ],
      myRole:
        'Designed information architecture, implemented client-side search logic, and optimized asset delivery.',
    },
  ],

  contact: {
    email: '[YOUR EMAIL: e.g. developer@example.com]',
    githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]',
    linkedinUrl: 'https://linkedin.com/in/[YOUR LINKEDIN USERNAME]',
    instagramUrl: 'https://instagram.com/[YOUR INSTAGRAM USERNAME]',
    socials: [
      {
        platform: 'email',
        label: 'Email',
        url: 'mailto:[YOUR EMAIL: e.g. developer@example.com]',
        isPrimary: true,
      },
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/[YOUR GITHUB USERNAME]',
      },
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/[YOUR LINKEDIN USERNAME]',
      },
      {
        platform: 'instagram',
        label: 'Instagram',
        url: 'https://instagram.com/[YOUR INSTAGRAM USERNAME]',
      },
    ],
  },
};
