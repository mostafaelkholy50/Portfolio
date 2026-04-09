import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProjectsData, projectImages } from "../3-main/projectsData";
import { BsArrowLeft, BsGithub, BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";
import "./ProjectDetail.css";

const getProjectImages = (folder) => {
  const files = projectImages[folder] || [];
  return files.map((name) => `/images/${folder}/${name}`);
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const foundProject = allProjectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      const projImages = getProjectImages(foundProject.detailImageFolder);
      setImages(projImages.length > 0 ? projImages : [foundProject.imgPath]);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds delay
    return () => clearInterval(intervalId);
  }, [images.length, isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  if (!project) return <div className="loading-page">Loading...</div>;

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        {/* Back Button */}
        <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            <BsArrowLeft /> Back to Portfolio
          </button>
        </div>

        {/* Top Slider Section */}
        <div 
          className="auto-slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="slider-slide">
                <img 
                  src={src} 
                  alt={`${project.projectTitle} Screenshot ${index + 1}`} 
                  loading={index === 0 ? "eager" : "lazy"} 
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous image">
                <BsArrowLeft />
              </button>
              <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next image">
                <BsArrowRight />
              </button>

              {/* Dots */}
              <div className="slider-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Header Details */}
        <div className="detail-header">
          <span className="detail-type">{project.type}</span>
          <h1 className="detail-title">{project.projectTitle}</h1>
          <p className="detail-description">{project.longDescription || project.description}</p>
          
          <div className="detail-links">
            {project.link && project.link.includes("github") && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                <BsGithub /> GitHub Repo
              </a>
            )}
            {project.link && !project.link.includes("github") && project.link !== "" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                <BsBoxArrowUpRight /> Live View
              </a>
            )}
          </div>
        </div>

        {/* Info Grid */}
        <div className="detail-info-grid">
          <div className="info-box">
            <h3>Tech Stack</h3>
            <div className="tags-container">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="info-box">
            <h3>Key Features</h3>
            <ul>
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.contributions && project.contributions.length > 0 && (
            <div className="info-box">
              <h3>My Contributions</h3>
              <ul>
                {project.contributions.map((contribution, i) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
