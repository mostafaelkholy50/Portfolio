import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";
import "./hero.css";

const Hero = () => {
  const sectionRef = useRef(null);

  // --- Social Links ---
  const socialLinks = {
    github: "https://github.com/mostafaelkholy50",
    linkedin: "https://www.linkedin.com/in/mostafa-elkholy-4333b3262/",
    facebook: "https://www.facebook.com/mostafaelkhol/",
  };

  // Animate on scroll into view
  useEffect(() => {
    if (!sectionRef.current) return;

    inView(sectionRef.current, () => {
      // Avatar pop-in
      animate(
        ".avatar",
        { opacity: [0, 1], scale: [0.7, 1.1, 1] },
        { duration: 0.8, easing: "ease-out" }
      );

      // Title fade-in + slide up
      animate(
        ".title",
        { opacity: [0, 1], y: [30, 0] },
        { duration: 1, delay: 0.3, easing: "ease-out" }
      );

      // Subtitle fade-in
      animate(
        ".sub-title",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 1, delay: 0.5, easing: "ease-out" }
      );

      // Social icons stagger
      animate(
        ".all-icons a",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: stagger(0.1), easing: "ease-out" }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero flex">
      {/* The Avatar Section (Left Column) */}
      <div className="avatar-section flex">
        <div className="parent-avatar flex">
          <img
            src="./me.jpg"
            className="avatar"
            alt="Mostafa Ahmed ElKholy"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info Section - Name, Description, and Social Links (Right Column) */}
      <div className="info-section">
        <h1 className="title">Mostafa Ahmed ElKholy</h1>

        <p className="sub-title">
          I'm a 21-year-old Computer Science graduate specializing in robust
          backend development using Laravel. My core focus is building highly
          efficient systems, including secure, scalable APIs, comprehensive
          authentication methods, and seamless payment integration solutions.
          I'm driven to translate modern web development concepts into
          practical, reliable backend architecture.
        </p>

        {/* Social Icons */}
        <div className="all-icons flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github" aria-label="GitHub" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin" aria-label="LinkedIn" />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-facebook" aria-label="Facebook" />
          </a>
        </div>
      </div>

      {/* The right-section animation div has been removed as requested. */}
    </section>
  );
};

export default Hero;
