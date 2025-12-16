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
    linkedin: 'https://linkedin.com/in/bala-subramanian012',
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
    title: 'AI Voice Call Fitness Assistant & Scheduler',
    description:
      'An AI-powered voice call application that interacts with users to collect fitness details such as age, weight, goals, and availability. The assistant generates personalized workout and diet plans, schedules sessions, and resolves booking conflicts through intelligent conversation.',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Vapi AI',
      'Gemini API',
      'Convex',
      'LiveKit',
    ],
    image:
      'https://www.aidlab.com/static/blog-imgs/the-era-of-ai-based-fitness/hero.svg',
    liveLink: '#',
    repoLink:
      'https://github.com/Bala-s-dev/AI-Fitness_VoiceCall-Assistant-and-Scheduler.git',
    gallery: [
      '/public/assets/ai-fitness/1.png',
      '/public/assets/ai-fitness/2.png',
      '/public/assets/ai-fitness/3.png',
    ],
  },
  {
    title: 'Real-Time Secure Chat Application',
    description:
      'A full-featured real-time chat application with user authentication, private messaging, status updates, user blocking, and chat locking using passwords. Designed with a modern UI and secure Firebase-backed infrastructure.',
    tech: [
      'React',
      'Firebase Authentication',
      'Firestore',
      'Zustand',
      'Tailwind CSS',
    ],
    image:
      'https://i.pcmag.com/imagery/articles/002UA0jmq1cLhHLC4kkoQjK-3.fit_lim.v1569490057.jpg',
    liveLink: '#',
    repoLink: 'https://github.com/Bala-s-dev/balachat.git',
    gallery: [
      '/public/assets/secure-chat/Screenshot (388).png',
      '/public/assets/secure-chat/Screenshot (389).png',
      '/public/assets/secure-chat/Screenshot (390).png',
    ],
  },
  {
    title: 'AI-Powered Smart Exam Platform',
    description:
      'An intelligent EdTech application where instructors generate exams instantly from raw syllabus text using Google Gemini AI, and students receive predictive performance analytics to identify weak topics.',
    tech: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Google Gemini AI',
      'Tailwind CSS',
    ],
    image:
      'https://www.eklavvya.com/wp-content/uploads/2023/11/generative-ai-assessment-scaled-1.webp',
    repoLink: 'https://github.com/Bala-s-dev/smart-exam-platform.git',
    gallery: [
      // Coding/Tech context
    ],
  },
  {
    title: 'AI Career Coach Application',
    description:
      'An AI-powered career guidance platform that provides personalized career recommendations, skill gap analysis, and learning roadmaps based on user interests and goals. The system also assists with resume building and interview preparation using intelligent AI insights.',
    tech: ['React', 'Vite', 'Node.js', 'AI APIs', 'Firebase', 'Tailwind CSS'],
    image: 'https://blog.vocaliv.com/wp-content/uploads/2025/10/AI-Coach.png',
    liveLink: '#',
    repoLink: 'https://github.com/Bala-s-dev/ai-career-coach',
    gallery: [
      '/public/assets/ai-coach/1.png',
      '/public/assets/ai-coach/Screenshot (392).png',
      '/public/assets/ai-coach/Screenshot (393).png',
      '/public/assets/ai-coach/Screenshot (394).png',
      '/public/assets/ai-coach/Screenshot (397).png',
    ],
  },
  {
    title: 'EMI-Based Precious Metal Investment Application',
    description:
      'A financial investment platform that allows users to invest in precious metals such as gold and silver through flexible EMI plans. The application provides real-time price tracking, EMI calculations, and a secure dashboard to manage investments efficiently.',
    tech: [
      'React Native',
      'Firebase',
      'Expo',
      'Tailwind CSS',
      'Payment Gateway Integration',
    ],
    image:
      'https://thumbs.dreamstime.com/b/rising-gold-prices-business-analysis-precious-metal-investment-stock-exchange-rising-gold-prices-business-analysis-222377695.jpg',
    liveLink: '#',
    repoLink: 'https://github.com/Bala-s-dev/gopi-proj.git',
    gallery: [
      '/public/assets/metal-inv/1.jpg',
      '/public/assets/metal-inv/2.jpg',
      '/public/assets/metal-inv/3.jpg',
      '/public/assets/metal-inv/4.jpg',
      '/public/assets/metal-inv/5.jpg',
      '/public/assets/metal-inv/6.jpg',
    ],
  },
];

