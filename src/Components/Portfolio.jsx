import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaTimes, FaExternalLinkAlt, FaRocket, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Portfolio() {
  const containerRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: "pro-1",
      title: "PTPA Official website",
      url: "https://www.ptpa.codeecom.in",
      desc: "A community-focused web platform for the Pandikkad Town Pravasi Association (PTPA).",
      tags: ["React.js", "Responsive", "UI/UX", "AI-Assisted"],
      longDesc: {
        overview: "The Pandikkad Town Pravasi Association (PTPA) website is a community-focused web platform developed to provide an official online presence for the expatriate members of Pandikkad town. The platform acts as an information and awareness portal that showcases association activities, events, and community initiatives.",
        goals: [
          "Build a professional digital identity for PTPA",
          "Provide centralized access to association information",
          "Improve community visibility and engagement",
          "Deliver a fast, responsive, and accessible website"
        ],
        features: [
          "Association Information Portal: Detailed presentation of background, mission, and objectives.",
          "Events & Activities Showcase: Dedicated sections to highlight association programs.",
          "Media & Gallery Display: Visual representation of association activities.",
          "Fully Responsive Design: Mobile-first approach compatible with all devices."
        ],
        tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
        outcome: "Successfully delivered a complete preview website, establishing a strong online presence and improving accessibility for members worldwide."
      }
    },
    {
      id: "pro-2",
      title: "Website for LuneLivings",
      url: "https://preview.codeecom.in",
      desc: "An interactive, visually stunning preview site showcasing advanced animations and fully fluid layouts.",
      tags: ["GSAP", "Creative", "Responsive", "Frontend"],
      longDesc: {
        overview: "A premium digital experience built for LuneLivings, focusing on high-end animations and sophisticated user interaction using GSAP.",
        goals: ["Create a luxury feel", "Demonstrate high-end animations", "Fluid responsive layout"],
        features: ["Glassmorphism effects", "Scroll-triggered animations", "Interactive product showcases"],
        tech: ["React.js", "GSAP ScrollTrigger", "Modern CSS", "Framer Motion"],
        outcome: "An industry-leading design that captures user attention and provides a unique brand experience."
      }
    },
    {
      id: "pro-3",
      title: "Roshan's Personal Portfolio",
      url: "https://roshan.codeecom.in",
      desc: "A premium personal portfolio website showcasing professional skills, projects, and expertise.",
      tags: ["Personal", "React.js", "GSAP", "Branding"],
      longDesc: {
        overview: "A sleek and modern personal portfolio designed to establish a powerful digital identity. It serves as a comprehensive showcase of professional expertise and creative projects.",
        goals: [
          "Create a distinct personal brand",
          "Showcase professional achievements",
          "Provide easy contact options",
          "Highlight technical versatility"
        ],
        features: [
          "Dynamic Project Gallery: Highlighted work with detailed case studies.",
          "Interactive Experience Timeline: Visual journey of professional growth.",
          "Optimized Hero Section: High-impact introduction with premium visuals.",
          "Full Responsive Integration: Flawless performance across all viewport sizes."
        ],
        tech: ["React.js", "GSAP Animations", "Tailwind CSS", "Vite"],
        outcome: "Established a state-of-the-art online presence that effectively communicates personal value and technical proficiency."
      }
    },
    {
      id: "pro-4",
      title: "Your Digital Presence",
      url: "/contact",
      desc: "Ready to transform your business with a premium responsive website? Let's build your success story together.",
      tags: ["Custom Design", "Future-Proof", "Scalable"],
      isCTA: true
    }
  ];

  // Auto Carousal Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [projects.length]);

  useGSAP(() => {
    gsap.fromTo('.portfolio-card',
      { opacity: 0, x: 50, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, [currentIndex]);

  const handleCardClick = (project) => {
    if (project.isCTA) return;
    setSelectedProject(project);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      gsap.fromTo(".modal-content-inner",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }, 10);
  };

  const closeModal = () => {
    gsap.to(".modal-content-inner", {
      opacity: 0, scale: 0.9, y: 30, duration: 0.3, ease: "power3.in",
      onComplete: () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
      }
    });
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="portfolio-section text-white" ref={containerRef}>
      <h2 className="portfolio-title">Featured Work</h2>

      <p className="portfolio-intro">
        Explore our curated selection of high-performance digital solutions.
        We specialize in crafting premium <strong>business</strong>, <strong>personal</strong>, and <strong>professional</strong> websites
        tailored to your unique success.
      </p>

      <div className="portfolio-carousel-wrapper">
        <button className="carousel-nav-btn prev" onClick={prevProject} aria-label="Previous Project">
          <FaChevronLeft />
        </button>

        <div className="portfolio-carousel-container">
          {projects.map((project, index) => (
            index === currentIndex && (
              <div
                className={`portfolio-card active-slide ${project.isCTA ? 'cta-card' : ''}`}
                key={project.id}
                onClick={() => handleCardClick(project)}
                style={{ cursor: project.isCTA ? 'default' : 'pointer' }}
              >
                <div className="project-id text-dim mb-2 project-num">
                  {project.id.toUpperCase()}
                </div>
                <h3>{project.title}</h3>
                <p className="project-desc mb-4">{project.desc}</p>

                <div className="project-tags mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                {!project.isCTA ? (
                  <button className="btn-neon btn-primary-neon" style={{ width: '100%', padding: '12px' }}>
                    View Case Study
                  </button>
                ) : (
                  <a href={project.url} style={{ width: '100%' }}>
                    <button className="btn-neon btn-primary-neon" style={{ width: '100%', padding: '12px' }}>
                      Get Started
                    </button>
                  </a>
                )}
              </div>
            )
          ))}
        </div>

        <button className="carousel-nav-btn next" onClick={nextProject} aria-label="Next Project">
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      <div className="cta-buttons">
        <a href="https://wa.me/919778256046" target="_blank" rel="noopener noreferrer">
          <button className="btn-neon btn-primary-neon">Connect on WhatsApp</button>
        </a>
        <a href="mailto:codeecom.in@gmail.com">
          <button className="btn-neon btn-secondary-neon">Plan Your Project</button>
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="modal-content-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <span className="modal-project-id">{selectedProject.id.toUpperCase()}</span>
              <h2>{selectedProject.title}</h2>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3><FaRocket className="section-icon" /> Project Overview</h3>
                <p>{selectedProject.longDesc.overview}</p>
              </div>

              <div className="modal-grid">
                <div className="modal-section">
                  <h3><FaCheckCircle className="section-icon" /> Project Goals</h3>
                  <ul>
                    {selectedProject.longDesc.goals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3><FaCheckCircle className="section-icon" /> Technologies Used</h3>
                  <div className="tech-pills">
                    {selectedProject.longDesc.tech.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3><FaCheckCircle className="section-icon" /> Key Features</h3>
                <ul>
                  {selectedProject.longDesc.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section outcome-section">
                <h3><FaCheckCircle className="section-icon" /> Project Outcome</h3>
                <p>{selectedProject.longDesc.outcome}</p>
              </div>
            </div>

            <div className="modal-footer">
              <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="modal-live-btn">
                <span>Live Preview</span> <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
