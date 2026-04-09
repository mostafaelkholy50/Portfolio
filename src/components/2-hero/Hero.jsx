import { useEffect, useRef, useState } from "react";
import { animate, inView, stagger } from "motion";
import "./hero.css";

const roles = [
  "Laravel Backend Developer",
  "PHP Expert",
  "API Architect",
  "Multi-Tenant SaaS Builder",
  "Full Stack Developer",
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Social Links
  const socialLinks = {
    github: "https://github.com/mostafaelkholy50",
    linkedin: "https://www.linkedin.com/in/mostafa-elkholy-4333b3262/",
    facebook: "https://www.facebook.com/mostafaelkhol/",
    whatsapp: "https://wa.me/201148016161",
  };

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Animate on scroll into view
  useEffect(() => {
    if (!sectionRef.current) return;

    return inView(sectionRef.current, () => {
      animate(
        ".hero-badge",
        { opacity: [0, 1], y: [-10, 0] },
        { duration: 0.6, delay: 0.1, easing: "ease-out" }
      );
      animate(
        ".hero-title",
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.9, delay: 0.2, easing: [0.16, 1, 0.3, 1] }
      );
      animate(
        ".hero-role-line",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.7, delay: 0.4, easing: "ease-out" }
      );
      animate(
        ".hero-description",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: 0.5, easing: "ease-out" }
      );
      animate(
        ".hero-cta-group",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.7, delay: 0.6, easing: "ease-out" }
      );
      animate(
        ".hero-social a",
        { opacity: [0, 1], scale: [0.7, 1] },
        { duration: 0.5, delay: stagger(0.08, { start: 0.7 }), easing: [0.34, 1.56, 0.64, 1] }
      );
      animate(
        ".hero-stat",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: stagger(0.1, { start: 0.8 }), easing: "ease-out" }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      {/* Floating Orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge" aria-label="Status" style={{ opacity: 0 }}>
          <span className="hero-badge-dot" />
          Available for freelance work
        </div>

        {/* Name */}
        <h1 className="hero-title" style={{ opacity: 0 }}>
          Mostafa Ahmed
          <span className="hero-title-accent"> ElKholy</span>
        </h1>

        {/* Typing Role */}
        <div className="hero-role-line" style={{ opacity: 0 }}>
          <span className="hero-role-prefix">&lt;</span>
          <span className="hero-role-text">{displayed}</span>
          <span className="hero-cursor" aria-hidden="true">|</span>
          <span className="hero-role-prefix">/&gt;</span>
        </div>

        {/* Description */}
        <p className="hero-description" style={{ opacity: 0 }}>
          21-year-old Computer Science graduate specializing in robust
          backend development using <strong>Laravel</strong>. I build highly efficient,
          scalable systems — from secure APIs and multi-tenant SaaS platforms
          to real-time features and seamless payment integrations.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group" style={{ opacity: 0 }}>
          <a href="#projects" className="hero-btn hero-btn-primary">
            View My Work
            <span>→</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-social flex">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ opacity: 0 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ opacity: 0 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ opacity: 0 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ opacity: 0 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat" style={{ opacity: 0 }}>
            <span className="hero-stat-number">8+</span>
            <span className="hero-stat-label">Projects Built</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat" style={{ opacity: 0 }}>
            <span className="hero-stat-number">3+</span>
            <span className="hero-stat-label">Years Coding</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat" style={{ opacity: 0 }}>
            <span className="hero-stat-number">Laravel</span>
            <span className="hero-stat-label">Main Stack</span>
          </div>
        </div>
      </div>

      {/* Right Side - Code Card */}
      <div className="hero-code-card" aria-hidden="true">
        <div className="code-card-header">
          <span className="code-dot dot-red" />
          <span className="code-dot dot-yellow" />
          <span className="code-dot dot-green" />
          <span className="code-card-filename">developer.php</span>
        </div>
        <div className="code-card-body">
          <div className="code-line">
            <span className="code-keyword">class </span>
            <span className="code-class">Developer</span>
          </div>
          <div className="code-line code-indent">
            <span className="code-keyword">public </span>
            <span className="code-var">$name </span>
            <span className="code-op">= </span>
            <span className="code-string">'Mostafa ElKholy'</span><span>;</span>
          </div>
          <div className="code-line code-indent">
            <span className="code-keyword">public </span>
            <span className="code-var">$role </span>
            <span className="code-op">= </span>
            <span className="code-string">'Laravel Dev'</span><span>;</span>
          </div>
          <div className="code-line code-indent">
            <span className="code-keyword">public </span>
            <span className="code-var">$passion </span>
            <span className="code-op">= </span>
            <span className="code-string">'Clean Code'</span><span>;</span>
          </div>
          <div className="code-line code-mt">
            <span className="code-keyword">function </span>
            <span className="code-fn">getStack</span>
            <span>()</span>
          </div>
          <div className="code-line code-indent">
            <span className="code-keyword">return </span>
            <span>[</span>
          </div>
          <div className="code-line code-indent-2">
            <span className="code-string">'Laravel'</span><span>, </span>
            <span className="code-string">'PHP'</span><span>, </span>
            <span className="code-string">'MySQL'</span>
          </div>
          <div className="code-line code-indent-2">
            <span className="code-string">'REST APIs'</span><span>, </span>
            <span className="code-string">'WebSockets'</span>
          </div>
          <div className="code-line code-indent">
            <span>];</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
