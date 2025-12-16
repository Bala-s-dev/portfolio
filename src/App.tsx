import { useState, useEffect, useCallback } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  ACHIEVEMENTS,
} from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>(
    'idle'
  );
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const openGallery = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setSelectedProjectIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = useCallback(() => {
    if (selectedProjectIndex !== null) {
      const galleryLength = PROJECTS[selectedProjectIndex].gallery.length;
      setCurrentImageIndex((prev) => (prev + 1) % galleryLength);
    }
  }, [selectedProjectIndex]);

  const prevImage = useCallback(() => {
    if (selectedProjectIndex !== null) {
      const galleryLength = PROJECTS[selectedProjectIndex].gallery.length;
      setCurrentImageIndex(
        (prev) => (prev - 1 + galleryLength) % galleryLength
      );
    }
  }, [selectedProjectIndex]);

  // Keyboard nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Modern Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-emerald-600">.</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-100 shadow-sm">
              {['home', 'about', 'experience', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {['home', 'about', 'experience', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeSection === section
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern"
      >
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                experiences that matter.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
              Hi, I'm{' '}
              <span className="font-semibold text-gray-900">
                {PERSONAL_INFO.name}
              </span>
              . {PERSONAL_INFO.role} based in India.
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-12 flex gap-6 items-center">
              {Object.entries(PERSONAL_INFO.social).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-600 transition-all transform hover:-translate-y-1 hover:scale-110"
                >
                  {platform === 'github' ? (
                    <Github size={24} />
                  ) : platform === 'linkedin' ? (
                    <Linkedin size={24} />
                  ) : (
                    <Mail size={24} />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Card */}
          <div className="bg-emerald-50/50 rounded-3xl p-8 md:p-12 border border-emerald-100 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-emerald-500" />
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Technical Arsenal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skillGroup) => {
                const Icon = skillGroup.icon;
                return (
                  <div
                    key={skillGroup.category}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-emerald-600" /> Experience
              </h2>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-emerald-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements Column */}
            <div className="space-y-12">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <GraduationCap className="text-emerald-600" /> Education
                </h2>
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-500 mb-4">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-emerald-600">
                        {edu.details}
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Award className="text-emerald-600" /> Achievements
                </h2>
                <div className="space-y-4">
                  {ACHIEVEMENTS.map((ach, idx) => {
                    const Icon = ach.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {ach.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {ach.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Work
              </h2>
              <p className="text-gray-500 text-lg">
                A selection of my recent projects.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1 group"
            >
              View Github{' '}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <button
                      onClick={() => openGallery(index)}
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
                      title="View Gallery"
                    >
                      <Images size={20} />
                    </button>
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold tracking-wide border border-emerald-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-semibold border border-gray-100">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-emerald-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-teal-800 rounded-full opacity-50 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
            <p className="text-emerald-200 text-lg">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {formStatus === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-emerald-200">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-emerald-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all placeholder-white/30 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all placeholder-white/30 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all placeholder-white/30 text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-400 font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {galleryOpen && selectedProjectIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                src={PROJECTS[selectedProjectIndex].gallery[currentImageIndex]}
                alt="Project Screenshot"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-emerald-950 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-emerald-400/60 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with
            React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
