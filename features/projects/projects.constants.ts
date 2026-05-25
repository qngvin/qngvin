import { ProjectType } from './projects.type';

export const projects: ProjectType[] = [
  {
    id: '1',
    name: 'qngvin.com',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'Personal portfolio website with dark/light mode, multi-language support, and micro-animations.',
    longDescription:
      'A high-end personal portfolio built with Next.js App Router. Features include a custom canvas background, splash screen animation, Framer Motion page transitions, theme toggling, and full EN/VI internationalization via next-intl.',
    linkUrl: 'https://qngvin.com',
    githubUrl: 'https://github.com/qngvin/qngvin',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41851-large.mp4',
    year: '2025',
    status: 'in-progress',
  },
  {
    id: '2',
    name: 'ERP Factory Management',
    tech: ['React', 'TypeScript', 'Ant Design', 'Redux Toolkit'],
    description: 'Web application for managing factory workflows, inventory, and ERP system integrations.',
    longDescription:
      'Developed and maintained a large-scale ERP frontend for factory management at GMO-Z.com RUNSYSTEM. Responsible for building inventory modules, real-time dashboards, and optimizing performance across complex data tables and forms.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-loop-41852-large.mp4',
    year: '2025',
    status: 'in-progress',
  },
  {
    id: '3',
    name: 'Real Estate Platform',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API'],
    description: 'Property listing and management platform with search, filters, and agent portals.',
    longDescription:
      'Built the frontend for a real estate SaaS platform, including property search with advanced filters, agent dashboards, and listing management. Integrated with a REST API backend and handled complex form workflows.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-blue-lights-42283-large.mp4',
    year: '2025',
    status: 'completed',
  },
  {
    id: '4',
    name: 'one-day-there-be',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Three.js'],
    description: 'An experimental creative project exploring generative visuals and interactive storytelling.',
    longDescription:
      'A personal creative experiment blending generative visuals and interactive web storytelling. Built with Next.js and Three.js, featuring shader-based animations, scroll-driven narratives, and immersive transitions.',
    githubUrl: 'https://github.com/qngvin/one-day-there-be',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-animation-of-orange-particles-41849-large.mp4',
    year: '2024',
    status: 'archived',
  },
  {
    id: '5',
    name: 'FPT Software Internship Project',
    tech: ['React', 'JavaScript', 'REST API', 'CSS Modules'],
    description: 'Internal web tooling built during internship at FPT Software for team productivity.',
    longDescription:
      'Developed internal web tools during my internship at FPT Software. Collaborated with senior developers to implement feature requirements, write clean component code, and participate in code reviews following agile workflows.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-background-with-abstract-digital-data-42284-large.mp4',
    year: '2023',
    status: 'completed',
  },
];

