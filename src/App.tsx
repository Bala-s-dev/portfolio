import { useState, useEffect, useCallback } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Send,
  User,
  ChevronLeft,
  ChevronRight,
  Images,
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>(
    'idle'
  );

  // Gallery State
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smooth scrolling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

  // Gallery Navigation Handlers
  const openGallery = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
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

  // Keyboard navigation for gallery
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              {PERSONAL_INFO.name}
            </button>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'text-emerald-600'
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
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
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-4 py-3 capitalize rounded-lg transition-colors ${
                      activeSection === section
                        ? 'bg-emerald-50 text-emerald-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section}
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
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium animate-pulse">
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            {PERSONAL_INFO.role}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 bg-white text-emerald-600 border border-emerald-200 rounded-full hover:bg-emerald-50 transition-all shadow-sm font-medium"
            >
              Contact Me
            </button>
          </div>
          <div className="flex justify-center gap-6 text-gray-400">
            {Object.entries(PERSONAL_INFO.social).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-600 transition-colors transform hover:scale-110"
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
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-200/50 -z-10"></span>
            </h2>
            <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                {PERSONAL_INFO.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Proficiency
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skillGroup) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 text-emerald-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md text-sm font-medium border border-gray-100"
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hover over the images to explore project galleries and source
              code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image Container with Hover Overlay */}
                <div className="relative overflow-hidden h-56 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button
                      onClick={() => openGallery(index)}
                      className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
                    >
                      View Gallery <Images size={18} />
                    </button>

                    <div className="flex gap-3">
                      {project.repoLink && project.repoLink !== '#' && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 bg-gray-800/80 text-white rounded-full hover:bg-black transition-colors border border-gray-700"
                          title="View Source Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 bg-gray-800/80 text-white rounded-full hover:bg-emerald-600 transition-colors border border-gray-700"
                          title="View Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
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
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold tracking-wide uppercase"
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-600">
                Interested in collaborating? I'd love to hear from you.
              </p>
            </div>
            {formStatus === 'sent' ? (
              <div className="bg-emerald-50 text-emerald-800 p-8 rounded-xl text-center">
                <Send size={32} className="mx-auto mb-4" />
                <p className="text-xl font-bold">Message Sent!</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <div className="w-full h-full relative">
              <img
                src={PROJECTS[selectedProjectIndex].gallery[currentImageIndex]}
                alt={`${PROJECTS[selectedProjectIndex].title} screenshot ${
                  currentImageIndex + 1
                }`}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1.5 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} /{' '}
                {PROJECTS[selectedProjectIndex].gallery.length}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
            {PROJECTS[selectedProjectIndex].gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {Object.values(PERSONAL_INFO.social).map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                {i === 0 ? (
                  <Github size={20} />
                ) : i === 1 ? (
                  <Linkedin size={20} />
                ) : (
                  <Mail size={20} />
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
