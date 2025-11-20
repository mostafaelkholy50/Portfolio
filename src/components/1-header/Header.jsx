import { useEffect, useState, useRef } from "react";
import "./header.css";
import { animate } from "motion";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  // Toggle theme
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme !== "light");
  }, [theme]);

  // Animate modal
  useEffect(() => {
    if (showModal && modalRef.current) {
      animate(
        modalRef.current,
        {
          scale: [0.85, 1.05, 1],
          opacity: [0, 1],
          y: [-40, 0],
        },
        {
          duration: 0.45,
          easing: [0.16, 1, 0.3, 1],
        }
      );
    }
  }, [showModal]);

  return (
    <>
      {/* HEADER */}
      <header className="flex sticky-header">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowModal(true)}
          className="menu icon-menu flex"
          aria-label="Open navigation menu"
        />

        <div />

        {/* Desktop Nav */}
        <nav aria-label="Main navigation">
          <ul className="flex">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Theme Button */}
        <button
          onClick={() => {
            const newTheme = theme === "dark" ? "light" : "dark";
            localStorage.setItem("currentMode", newTheme);
            setTheme(newTheme);
          }}
          className="mode flex"
        >
          {theme === "dark" ? (
            <span className="icon-moon-o" />
          ) : (
            <span className="icon-sun" />
          )}
        </button>
      </header>

      {/* FULL SCREEN MODAL — OUTSIDE HEADER */}
      {showModal && (
        <div
          className="fixed"
          onClick={() => setShowModal(false)}
          aria-modal="true"
          role="dialog"
        >
          <ul
            ref={modalRef}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>

            <li><a href="#about" onClick={() => setShowModal(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setShowModal(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setShowModal(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setShowModal(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
