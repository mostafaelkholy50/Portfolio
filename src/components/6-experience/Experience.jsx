import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";
import "./experience.css";

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      role: "Backend Developer",
      company: "Al-Noor Online",
      date: "05/2026 – 10/2026",
      details: [
        "Delivered features across up to 5 concurrent Laravel projects simultaneously, prioritizing scope and shipping reliably under overlapping deadlines.",
        "Rewa — Consultation Platform (mobile-app backed): built out core backend modules on a Laravel platform connecting clients with consultants, including polymorphic multi-role user architecture, RBAC via Spatie Permission, FCM-powered real-time chat, availability/exception-based scheduling, and an escrow-style financial workflow.",
        "Mohamina — Legal Services Platform (mobile-app backed, 10,000+ users): contributed to a Laravel 12 legal platform serving lawyers, clients, and law firms.",
        "Strengthened application security on live systems through mass-assignment protection, whitelisted model operations, and granular authorization Policies.",
        "Diagnosed and resolved bugs in live, production Laravel systems, improving stability without disrupting active users."
      ]
    },
    {
      role: "Backend Developer",
      company: "Data Expert",
      date: "09/2025 – 01/2026",
      details: [
        "Built a full Help Desk & ticket management system from scratch using Laravel.",
        "Implemented RBAC, multi-language localization, and granular user permissions.",
        "Designed and optimized RESTful APIs and complex MySQL queries for performance."
      ]
    },
    {
      role: "Laravel Developer Intern",
      company: "Instant Company",
      date: "01/2025 – 09/2024",
      details: [
        "Developed reusable Laravel modules deployed across multiple client projects.",
        "Optimized MySQL queries and implemented efficient CRUD pipelines.",
        "Collaborated via Git/GitHub in a team environment with regular code reviews."
      ]
    }
  ];

  const education = {
    degree: "Bachelors in Computer Science",
    institution: "Beni Suef Higher Technological Institute",
    date: "Sep 2021 – July 2025"
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    return inView(sectionRef.current, () => {
      const cards = sectionRef.current.querySelectorAll(".exp-card");
      if (cards.length > 0) {
        animate(
          cards,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.6, delay: stagger(0.15), easing: [0.16, 1, 0.3, 1] }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-section">
      <div className="section-heading">
        <h2>Experience & Education</h2>
        <p>My professional journey and academic background</p>
      </div>

      <div className="exp-container">
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card" style={{ opacity: 0 }}>
              <div className="exp-header">
                <h3>{exp.role} <span>@ {exp.company}</span></h3>
                <span className="exp-date">{exp.date}</span>
              </div>
              <ul className="exp-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          <div className="exp-card edu-card" style={{ opacity: 0 }}>
             <div className="exp-header">
                <h3>{education.degree} <span>@ {education.institution}</span></h3>
                <span className="exp-date">{education.date}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
