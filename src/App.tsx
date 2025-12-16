import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket, ChevronDown, ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team analytics.",
      tech: ["TypeScript", "React", "Supabase", "Tailwind"],
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3183144/pexels-photo-3183144.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts and customizable reports.",
      tech: ["React", "D3.js", "PostgreSQL", "Express"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669122/pexels-photo-669122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3182754/pexels-photo-3182754.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with messaging and content sharing features.",
      tech: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3183591/pexels-photo-3183591.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code2, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend Development", icon: Rocket, items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { name: "Design & UX", icon: Palette, items: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
            >
              Portfolio
            </button>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-600 font-semibold'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 capitalize transition-colors rounded-lg ${
                    activeSection === section
                      ? 'text-emerald-600 bg-emerald-50 font-semibold'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-emerald-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-emerald-600">Alex Morgan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences that solve real-world problems
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Get In Touch
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-emerald-600 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building web applications
                that make a difference. My journey in tech started with a curiosity about how things work,
                and it's grown into a career I absolutely love.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in creating responsive, user-friendly applications using modern technologies.
                Whether it's crafting pixel-perfect interfaces or architecting scalable backend systems,
                I bring dedication and creativity to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-emerald-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button
                      onClick={() => {
                        setSelectedProject(index);
                        setGalleryIndex(0);
                        setGalleryOpen(true);
                      }}
                      className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      View Gallery <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Let's Work Together</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {galleryOpen && selectedProject !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
          >
            <CloseIcon size={32} />
          </button>

          <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
              <img
                src={projects[selectedProject].gallery[galleryIndex]}
                alt={`${projects[selectedProject].title} ${galleryIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-4 w-full">
              <button
                onClick={() => setGalleryIndex((prev) => (prev === 0 ? projects[selectedProject].gallery.length - 1 : prev - 1))}
                className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {projects[selectedProject].gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      idx === galleryIndex
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setGalleryIndex((prev) => (prev === projects[selectedProject].gallery.length - 1 ? 0 : prev + 1))}
                className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <h3 className="text-white text-xl font-semibold text-center">{projects[selectedProject].title}</h3>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alex Morgan. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
