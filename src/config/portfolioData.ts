import type { PortfolioData } from '@/types/portfolio';

/**
 * Portfolio Data Configuration
 * Single source of truth for portfolio content.
 * 
 * NOTE: Values marked with [YOUR ...] or [NEEDS USER INPUT]
 * are placeholders awaiting final user data.
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
    role: '[YOUR PROFESSIONAL TITLE]',
    headline: 'Building fast, intentional, and accessible web experiences.',
    subheadline:
      '[YOUR VALUE PROPOSITION: e.g. Web developer focusing on clean code, responsive interfaces, and modern web architectures.]',
    portraitUrl: '/assets/profile-placeholder.png', // Placeholder path (asset to be provided)

    // About Section structured blocks per PRD
    shortIntro:
      '[NEEDS USER INPUT: Concise background summary, core motivations, and professional interests in web development.]',
    developmentFocus:
      '[NEEDS USER INPUT: Web architecture focus areas e.g. clean code principles, responsive design, performance optimization, and accessible UI.]',
    howIWork:
      '[NEEDS USER INPUT: Problem-solving approach, technical workflow, modular code organization, and collaborative mindset.]',
    currentFocus:
      '[NEEDS USER INPUT: Technologies, methodologies, or design patterns currently being learned and explored.]',
  },

  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML5 & CSS3' },
        { name: '[Language Placeholder]', isExploring: true },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: '[Frontend Library/Framework Placeholder]' },
        { name: '[Exploring Frontend Tech]', isExploring: true },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: '[Backend Runtime/Language Placeholder]' },
        { name: '[Database / ORM Placeholder]' },
        { name: '[RESTful API Architecture Placeholder]' },
        { name: '[Exploring Backend Tech]', isExploring: true },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'Vite' },
        { name: 'VS Code' },
        { name: '[Workflow Tool Placeholder]' },
      ],
    },
  ],

  projects: [
    {
      id: 'project-1',
      title: 'Project 1 [NEEDS USER INPUT: Project Title]',
      shortDescription:
        '[NEEDS USER INPUT: Brief 1-2 sentence tagline describing what the project does and its core purpose.]',
      thumbnail: '/assets/projects/project-1.png', // Placeholder path (asset to be provided)
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/[YOUR GITHUB URL]/project-1',
      demoUrl: 'https://[YOUR DEMO URL 1]',
      problem:
        '[NEEDS USER INPUT: Detail the real-world problem or inefficiency that necessitated building this solution.]',
      solution:
        '[NEEDS USER INPUT: Explain the technical approach and architecture chosen to solve the stated problem.]',
      keyFeatures: [
        '[NEEDS USER INPUT: Key feature 1 - Core functional capability]',
        '[NEEDS USER INPUT: Key feature 2 - User interface / workflow highlight]',
        '[NEEDS USER INPUT: Key feature 3 - Performance or technical handling]',
      ],
      myRole:
        '[NEEDS USER INPUT: Detail your specific responsibilities, design decisions, and breakdown of tools/libraries utilized.]',
    },
    {
      id: 'project-2',
      title: 'Project 2 [NEEDS USER INPUT: Project Title]',
      shortDescription:
        '[NEEDS USER INPUT: Brief 1-2 sentence tagline describing what the project does and its core purpose.]',
      thumbnail: '/assets/projects/project-2.png', // Placeholder path (asset to be provided)
      technologies: ['TypeScript', 'React', 'REST API'],
      githubUrl: 'https://github.com/[YOUR GITHUB URL]/project-2',
      demoUrl: 'https://[YOUR DEMO URL 2]',
      problem:
        '[NEEDS USER INPUT: Detail the problem or user requirements addressed by Project 2.]',
      solution:
        '[NEEDS USER INPUT: Explain the technical solution and implementation details for Project 2.]',
      keyFeatures: [
        '[NEEDS USER INPUT: Key feature 1 - Core functional capability]',
        '[NEEDS USER INPUT: Key feature 2 - Data handling or UI behavior]',
        '[NEEDS USER INPUT: Key feature 3 - Optimization or integration]',
      ],
      myRole:
        '[NEEDS USER INPUT: Detail your specific responsibilities and technical contributions in Project 2.]',
    },
    {
      id: 'project-3',
      title: 'Project 3 [NEEDS USER INPUT: Project Title]',
      shortDescription:
        '[NEEDS USER INPUT: Brief 1-2 sentence tagline describing what the project does and its core purpose.]',
      thumbnail: '/assets/projects/project-3.png', // Placeholder path (asset to be provided)
      technologies: ['JavaScript', 'Tailwind CSS', 'Web APIs'],
      githubUrl: 'https://github.com/[YOUR GITHUB URL]/project-3',
      demoUrl: 'https://[YOUR DEMO URL 3]',
      problem:
        '[NEEDS USER INPUT: Detail the problem or technical challenge addressed by Project 3.]',
      solution:
        '[NEEDS USER INPUT: Explain the technical solution and architecture implemented for Project 3.]',
      keyFeatures: [
        '[NEEDS USER INPUT: Key feature 1 - Core functional capability]',
        '[NEEDS USER INPUT: Key feature 2 - Key interaction or workflow]',
        '[NEEDS USER INPUT: Key feature 3 - Reliability or performance feature]',
      ],
      myRole:
        '[NEEDS USER INPUT: Detail your specific responsibilities and libraries used in Project 3.]',
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
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/[YOUR LINKEDIN USERNAME]',
      },
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/[YOUR GITHUB USERNAME]',
      },
      {
        platform: 'instagram',
        label: 'Instagram',
        url: 'https://instagram.com/[YOUR INSTAGRAM USERNAME]',
      },
    ],
  },
};
