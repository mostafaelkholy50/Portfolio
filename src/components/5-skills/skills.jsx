import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";
import "./skills.css";

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    {
      category: "Backend Development",
      icon: "⚙️",
      color: "#7c3aed",
      items: ["PHP 8.2+", "Laravel 12", "Filament v3", "Livewire", "RESTful APIs", "MVC"],
    },
    {
      category: "Database & Storage",
      icon: "🗄️",
      color: "#06b6d4",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Eloquent ORM", "Query Optimization"],
    },
    {
      category: "Architecture & Security",
      icon: "🔐",
      color: "#a855f7",
      items: ["Multi-Tenancy", "RBAC (Spatie)", "Policies & Gates", "Laravel Passport", "Sanctum"],
    },
    {
      category: "Real-time & Notifications",
      icon: "⚡",
      color: "#f59e0b",
      items: ["FCM", "OneSignal", "WebSockets", "Laravel Queue", "Multi-Channel Alerts"],
    },
    {
      category: "Frontend & Tools",
      icon: "🛠️",
      color: "#ef4444",
      items: ["Tailwind CSS", "Alpine.js", "Git", "Postman", "Agile/Scrum"],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    return inView(sectionRef.current, () => {
      const cards = sectionRef.current.querySelectorAll(".skill-card");
      if (cards.length > 0) {
        animate(
          cards,
          { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
          { duration: 0.6, delay: stagger(0.08), easing: [0.16, 1, 0.3, 1] }
        );
      }

      const badges = sectionRef.current.querySelectorAll(".skill-badge");
      if (badges.length > 0) {
        animate(
          badges,
          { opacity: [0, 1], scale: [0.8, 1] },
          { duration: 0.4, delay: stagger(0.03, { start: 0.4 }), easing: [0.34, 1.56, 0.64, 1] }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      <div className="section-heading">
        <h2>Technical Skills</h2>
        <p>Specialized in backend development with modern PHP frameworks and scalable architectures</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ "--card-color": skill.color }}
            aria-labelledby={`skill-category-${index}`}
          >
            <div className="skill-card-header">
              <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
              <h3 id={`skill-category-${index}`} className="skill-category">
                {skill.category}
              </h3>
            </div>
            <div className="skill-items">
              {skill.items.map((item, itemIndex) => (
                <span
                  key={`${skill.category}-${itemIndex}`}
                  className="skill-badge"
                  style={{ opacity: 0 }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="skill-card-glow" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;