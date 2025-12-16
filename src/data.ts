import {
  Github,
  Linkedin,
  Mail,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Globe,
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Bala Subramanian',
  role: 'Full Stack Developer',
  tagline: 'Building scalable, secure, and AI-powered web solutions.',
  about: `I am a dedicated Full Stack Developer with a strong foundation in building dynamic web applications and real-time systems. 
  With expertise in the MERN stack and a passion for AI integration, I specialize in creating seamless user experiences 
  backed by robust, secure server-side logic. My work focuses on delivering user-focused, high-performance, and security-driven products.`,
  social: {
    github: 'https://github.com/Bala-s-dev',
    linkedin: 'https://linkedin.com/in/bala-subramanian',
    email: 'mailto:balas21092004@gmail.com',
  },
};

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Ernestwell',
    location: 'United Kingdom (Remote)',
    period: 'Nov 2024 - Feb 2025',
    description: [
      'Built "Unibritind", a study-abroad guidance platform using React.js (Vite) with dynamic university filters for UK, USA, and Canada.',
      'Developed a secure Admin Portal using Firebase Auth and Firestore to manage college data efficiently.',
      'Created an interactive FAQ Chatbot, reducing manual support queries by 30%.',
      'Implemented responsive forms with phone number validation and real-time cloud submission.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Francis Xavier Engineering College, Tirunelveli',
    period: 'Graduating 2026',
    details: 'CGPA: 8.6/10.0 • Minor Specialization: Cyber Security',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Patent Filed (2024)',
    description:
      '"Animal Sound-Based Audiometry Test Using Software" (IP India) - Developed an innovative software-based audiometry system achieving 95% diagnostic accuracy without clinical hardware.',
    icon: Cpu,
  },
  {
    title: 'Research Publication (2024)',
    description:
      'Published a research paper titled "AI-Powered Voice Call Fitness Assistant and Scheduler," focusing on real-time voice interaction, data processing, and automated workout scheduling.',
    icon: Globe,
  },
];

export const SKILLS = [
  {
    category: 'Frontend',
    icon: Layout,
    items: [
      'React.js',
      'Redux',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Material UI',
      'HTML5/CSS3',
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'Socket.io', 'RESTful APIs', 'Helmet.js'],
  },
  {
    category: 'Database & Cloud',
    icon: Database,
    items: ['MongoDB', 'Firebase', 'MySQL', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    category: 'Tools & Security',
    icon: Terminal,
    items: [
      'Git/GitHub',
      'Postman',
      'VS Code',
      'Linux/Red Hat',
      'Penetration Testing',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'AI Voice Fitness Coach',
    description:
      'A serverless app integrating Vapi.ai for real-time conversational voice interaction. Orchestrates Convex actions to process voice data and query Gemini AI to generate structured JSON workout plans. Enforced type safety with TypeScript and session management via Clerk.',
    tech: ['Next.js', 'Convex', 'Vapi.ai', 'Gemini API', 'TypeScript', 'Clerk'],
    image:
      'https://www.aidlab.com/static/blog-imgs/the-era-of-ai-based-fitness/hero.svg',
    repoLink:
      'https://github.com/Bala-s-dev/AI-Fitness_VoiceCall-Assistant-and-Scheduler.git',
    gallery: [
      '/public/assets/ai-fitness/1.png',
      '/public/assets/ai-fitness/2.png',
      '/public/assets/ai-fitness/3.png',
    ],
  },
  {
    title: 'SecureChat - E2EE Messaging',
    description:
      'A low-latency real-time chat system using Socket.io. Engineered End-to-End Encryption (E2EE) using AES-256 on the client side for zero-knowledge privacy. Secured backend APIs with JWT rotation, Bcrypt hashing, and input sanitization.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'AES-256'],
    image:
      'https://i.pcmag.com/imagery/articles/002UA0jmq1cLhHLC4kkoQjK-3.fit_lim.v1569490057.jpg',
    repoLink: 'https://github.com/Bala-s-dev/balachat.git',
    gallery: [
      '/public/assets/secure-chat/Screenshot (388).png',
      '/public/assets/secure-chat/Screenshot (389).png',
      '/public/assets/secure-chat/Screenshot (390).png',
    ],
  },
  {
    title: 'AI Career Coach & Analyzer',
    description:
      'Integrated Groq API with optimized system prompts to deliver instant resume analysis and mock interview questions. Implemented Google OAuth 2.0 for frictionless onboarding and hardened the Express server with Helmet.js.',
    tech: ['MERN Stack', 'Groq API', 'Google OAuth', 'Helmet.js', 'Tailwind'],
    image: 'https://blog.vocaliv.com/wp-content/uploads/2025/10/AI-Coach.png',
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
    title: 'EMI Precious Metal Investment',
    description:
      'A financial investment platform allowing users to invest in gold/silver through flexible EMI plans. Features real-time price tracking, EMI calculations, and a secure dashboard for investment management.',
    tech: [
      'React Native',
      'Firebase',
      'Expo',
      'Tailwind CSS',
      'Payment Gateway',
    ],
    image:
      'https://thumbs.dreamstime.com/b/rising-gold-prices-business-analysis-precious-metal-investment-stock-exchange-rising-gold-prices-business-analysis-222377695.jpg',

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
