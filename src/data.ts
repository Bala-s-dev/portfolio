import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Globe,
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Bala S',
  role: 'Full-Stack Developer',
  tagline:
    'Building scalable, user-centric web applications with modern technologies.',
  about: `I am a dedicated Full-Stack Developer with a strong foundation in building dynamic web applications. 
  With experience in both frontend and backend technologies, I specialize in creating seamless user experiences 
  backed by robust server-side logic. My journey involves continuous learning and applying best practices 
  to solve real-world problems efficiently.`,
  social: {
    github: 'https://github.com/bala-s-dev',
    linkedin: 'https://linkedin.com/in/bala-s',
    email: 'mailto:contact@example.com',
  },
};

export const SKILLS = [
  {
    category: 'Frontend Development',
    icon: Layout,
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma'],
  },
  {
    category: 'Tools & DevOps',
    icon: Terminal,
    items: ['Git/GitHub', 'Docker', 'AWS', 'CI/CD Pipelines', 'Vite'],
  },
];

export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description:
      'A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive user interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'SaaS Dashboard',
    description:
      'A modern analytics dashboard for a SaaS product, providing data visualization, user management, and reporting tools.',
    tech: ['TypeScript', 'React', 'Chart.js', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Learning Management System',
    description:
      'An educational platform enabling course creation, student progress tracking, and interactive learning modules.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.io'],
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    repoLink: '#',
  },
];
