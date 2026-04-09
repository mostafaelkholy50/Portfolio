import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import { allProjectsData } from "./projectsData";
import { animate, stagger, inView } from "motion";
import { BsArrowRight } from "react-icons/bs";

const Main = () => {
  const [projects] = useState(allProjectsData);
  const [filter, setFilter] = useState("All");
  
  const parentRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const filterCategories = ["All", "Laravel", "SaaS", "E-Commerce", "WebSocket", "API"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.some((c) => c === filter));

  /* Animate cards on first view */
  useEffect(() => {
    if (!sectionRef.current) return;
    return inView(sectionRef.current, () => {
      const cards = parentRef.current?.querySelectorAll(".project-card");
      if (cards?.length > 0) {
        animate(
          cards,
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.7, delay: stagger(0.08), easing: "ease-out" }
        );
      }
    });
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <main className="projects-wrapper" ref={sectionRef}>
      {/* Section Header */}
      <div className="section-heading">
        <h2>My Projects</h2>
        <p>A selection of real-world applications I've built from scratch</p>
      </div>

      {/* Filter Pills */}
      <div className="filter-pills">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div ref={parentRef} className="projects-grid">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="project-card"
            onClick={() => handleProjectClick(item)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${item.projectTitle}`}
            onKeyDown={(e) => e.key === "Enter" && handleProjectClick(item)}
          >
            {/* Card Image */}
            <div className="card-img-wrap">
              <img
                src={item.imgPath}
                alt={item.projectTitle}
                loading="lazy"
                className="card-img"
              />
              <div className="card-img-overlay">
                <span className="card-view-btn">
                  View Project <BsArrowRight />
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <span className="card-type">{item.type}</span>
              <h3 className="card-title">{item.projectTitle}</h3>
              <p className="card-desc">{item.description}</p>
              <div className="card-tags">
                {item.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {item.technologies.length > 4 && (
                  <span className="tech-tag">+{item.technologies.length - 4}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Main;
