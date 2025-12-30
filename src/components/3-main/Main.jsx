import { useState, useEffect, useRef } from "react";
import "./main.css";
import { allProjectsData } from "./projectsData";
import autoAnimate from "@formkit/auto-animate";
import { animate, stagger } from "motion";
import {
  BsArrowRight,
  BsArrowLeft,
  BsXLg,
  BsArrowsFullscreen,
} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

// Helper to get project images - MOCK DATA
const getProjectImages = (folderPath) => {
  const projectFiles = {
    "images/ascend quran": [
      "Main.png",
      "Screenshot (166).png",
      "Screenshot (167).png",
      "Screenshot (168).png",
      "Screenshot (169).png",
      "Screenshot (170).png",
      "Screenshot (171).png",
      "Screenshot (172).png",
      "Screenshot (173).png",
      "Screenshot (174).png",
      "Screenshot (175).png",
      "Screenshot (176).png",
      "Screenshot (177).png",
      "Screenshot (178).png",
      "Screenshot (179).png",
    ],
    "images/ecommerce-app": [
      "home.png",
      "hero.png",
      "category.png",
      "products.png",
      "ProudactDetales.png",
      "edit.png",
    ],
    "images/medical": [
      "home.png",
      "doctors.png",
      "hospitals.png",
      "details.png",
    ],
    "images/replay": [
      "home.png",
      "Screenshot (152).png",
      "Screenshot (154).png",
      "Screenshot (158).png",
      "dashboard.png",
      "data.png",
      "details.png",
    ],
    "images/university": [
      "home.png",
      "courses.png",
      "dashboard.png",
      "details.png",
    ],
  };

  return (
    projectFiles[folderPath]?.map((name) => `/${folderPath}/${name}`) || []
  );
};

const Main = () => {
  const [projects] = useState(allProjectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectScreenshots, setProjectScreenshots] = useState([]); // NEW STATE: For image maximization toggle

  const parentRef = useRef(null);
  const detailRef = useRef(null); // AutoAnimate (smooth filtering)

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current, {
        duration: 400,
        easing: "ease-out",
      });
    }
  }, []); // First load animation

  useEffect(() => {
    const cards = parentRef.current?.querySelectorAll(".card");
    if (!cards || cards.length === 0) return;

    animate(
      cards,
      { opacity: [0, 1], y: [60, 0] },
      {
        duration: 0.8,
        delay: stagger(0.1),
        easing: "ease-out",
      }
    );
  }, []); // Modal animation

  useEffect(() => {
    if (selectedProject && detailRef.current) {
      // Small animation for the detail modal
      animate(
        detailRef.current,
        { opacity: [0, 1], scale: [0.95, 1] },
        { duration: 0.3 }
      );
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    const images = getProjectImages(project.detailImageFolder);
    setProjectScreenshots(images.length > 0 ? images : [project.imgPath]);
    setCurrentSlide(0);
    setSelectedProject(project);
  };

  const closeDetail = () => {
    animate(
      detailRef.current,
      { opacity: [1, 0], scale: [1, 0.95] },
      { duration: 0.25 }
    ).finished.then(() => {
      setSelectedProject(null);
      setProjectScreenshots([]);
    });
  };

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + projectScreenshots.length) % projectScreenshots.length
    );
  };

  // Function to open current image in a new tab
  const openImageInNewTab = () => {
    if (projectScreenshots.length > 0) {
      window.open(projectScreenshots[currentSlide], "_blank");
    }
  };

  return (
    <main className="flex">
      {/* Header */}
      <div className="projects-header">
        <h2 className="projects-title">Technical Projects</h2>
      </div>
      {/* Projects Grid */}
      <section className="flex right-section">

        <div ref={parentRef} className="grid-auto-animate">

          {projects.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => handleProjectClick(item)}
            >

              <img
                width={266}
                src={item.imgPath}
                alt={item.projectTitle}
                loading="lazy"
                className="card-project-image"
              />

              <div className="box">
                {/* ✅ PROJECT TITLE IS HERE */}
                <h1 className="title">{item.projectTitle}</h1>
                {/* ✅ PROJECT DESCRIPTION IS HERE */}
                <p className="sub-title">{item.description}</p>
                <div className="flex icons">

                  <div className="link flex">
                    View Details
                    <BsArrowRight style={{ marginLeft: "5px" }} />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-detail-overlay" onClick={closeDetail}>

          <div
            ref={detailRef}
            className="project-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={closeDetail}
              className="close-button"
              aria-label="Close project details"
            >
              <BsXLg />
            </button>
            {/* START: Image Slider */}
            <div className="modal-slider-container">

              <button
                onClick={openImageInNewTab}
                className="maximize-button"
                aria-label="Open image in new tab"
              >
                <BsArrowsFullscreen />
              </button>

              <img
                src={projectScreenshots[currentSlide]}
                alt={`${selectedProject.projectTitle} screenshot ${currentSlide + 1
                  }`}
                className="modal-image"
              />

              {projectScreenshots.length > 1 && (
                <>

                  <button
                    onClick={prevSlide}
                    className="slider-btn prev-btn"
                    aria-label="Previous image"
                  >
                    <BsArrowLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="slider-btn next-btn"
                    aria-label="Next image"
                  >
                    <BsArrowRight />
                  </button>
                  {/* Dots logic for navigation */}

                  <div className="slider-dots">

                    {projectScreenshots.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""
                          }`}
                        onClick={() => setCurrentSlide(index)}
                      ></span>
                    ))}

                  </div>

                </>
              )}

            </div>
            {/* Modal Content */}
            <div className="modal-content">
              {/* ✅ MODAL TITLE IS HERE */}
              <h2>{selectedProject.projectTitle}</h2>
              {/* ✅ MODAL DESCRIPTION IS HERE */}
              <p className="modal-description">

                {selectedProject.longDescription || selectedProject.description}

              </p>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link-modal"
                >
                  <FaGithub style={{ marginRight: "8px" }} />  View on GitHub

                </a>
              )}

            </div>

          </div>

        </div>
      )}
    </main>
  );
};

export default Main;
