// src/components/1-header/Header.jsx
import { useEffect, useState, useRef } from "react";
import "./header.css";
import { animate } from "motion";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef < HTMLUListElement > null; // Fixed syntax

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  // Theme toggle
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme !== "light");
  }, [theme]);

  // Animate mobile modal entrance with Motion One
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
          duration: 0.5,
          easing: [0.16, 1, 0.3, 1], // smooth ease-out
        }
      );
    }
  }, [showModal]);

  const handleLinkClick = () => setShowModal(false);

  return (
    <header className="flex sticky-header">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
        aria-label="Open navigation menu"
      />
      <div /> {/* Spacer */}
      {/* Desktop Navigation */}
      <nav aria-label="Main navigation">
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* Theme Toggle */}
      <button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          localStorage.setItem("currentMode", newTheme);
          setTheme(newTheme);
        }}
        className="mode flex"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {/* Mobile Modal */}
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
                aria-label="Close menu"
              />
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
