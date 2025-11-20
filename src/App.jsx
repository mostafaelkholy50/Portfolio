import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Skills from "./components/5-skills/skills";
import Contact from "./components/4-contact/Contact";

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

  // Scroll to top when navigating (except when coming back from project detail)
  useEffect(() => {
    if (!location.pathname.startsWith("/project/")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />

      <div id="up" className="container">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <section id="about">
                  <Hero />
                </section>
                <div className="divider" />

                <section id="projects">
                  <Main />
                </section>
                <div className="divider" />

                <section id="skills">
                  <Skills />
                </section>
                <div className="divider" />

                <section id="contact">
                  <Contact />
                </section>
                <div className="divider" />
              </>
            }
          />
        </Routes>
      </div>

      {/* Back to Top Button – uses your existing .scroll2Top styles */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll2Top"
        aria-label="Scroll to top"
      ></button>
    </>
  );
}

export default App;
