import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Skills from "./components/5-skills/skills";
import Contact from "./components/4-contact/Contact";
import Experience from "./components/6-experience/Experience";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function App() {
  const location = useLocation();

  // Sticky + Shrinking Header on Scroll
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show / hide scroll-to-top button
  useEffect(() => {
    const btn = document.querySelector(".scroll2Top");
    if (!btn) return;
    const handleScroll = () => {
      btn.classList.toggle("show", window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <>
      <Header />

      <div id="up" className="container">
        
        {/* HOMEPAGE CONTENT: Prevent Unmounting to fix crashes and preserve state/animations */}
        <div style={{ display: isProjectPage ? "none" : "block" }}>
          <section id="about" aria-label="About Me">
            <Hero />
          </section>

          <div className="divider" role="separator" />

          <section id="projects" aria-label="Projects">
            <Main />
          </section>

          <div className="divider" role="separator" />

          <section id="skills" aria-label="Skills">
            <Skills />
          </section>

          <div className="divider" role="separator" />

          <Experience />

          <div className="divider" role="separator" />

          <section id="contact" aria-label="Contact">
            <Contact />
          </section>

          {/* Footer */}
          <footer className="site-footer">
            <p>
              Crafted with{" "}
              <span aria-label="love" style={{ color: "#ef4444" }}>♥</span>{" "}
              by{" "}
              <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Mostafa ElKholy
              </span>
              {" "}· {new Date().getFullYear()}
            </p>
          </footer>
        </div>

        {/* DETAILS PAGE ROUTING */}
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* We do NOT need a root route anymore because the div above handles it */}
          <Route path="*" element={isProjectPage ? <Navigate to="/" replace /> : null} />
        </Routes>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll2Top"
        aria-label="Scroll to top"
        title="Back to top"
      />
    </>
  );
}

export default App;
