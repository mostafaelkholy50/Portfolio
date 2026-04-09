import { useEffect, useState, useRef } from "react";
import "./header.css";
import { animate } from "motion";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme !== "light");
  }, [theme]);

  // Animate modal open
  useEffect(() => {
    if (showModal && modalRef.current) {
      animate(
        modalRef.current,
        { scale: [0.85, 1.03, 1], opacity: [0, 1], y: [-30, 0] },
        { duration: 0.4, easing: [0.16, 1, 0.3, 1] }
      );
    }
  }, [showModal]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  const closeModal = () => setShowModal(false);

  const handleNavClick = (e, targetId) => {
    // If we're on the project detail page, just normal link behavior might navigate to /#id
    // But since this is a Single Page Application, clicking an anchor link from /project/:id
    // should actually navigate to /#id. Let's just let it be, but smooth scroll if we are on /
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeModal();
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="flex sticky-header">
        {/* Brand Logo */}
        <span className="header-logo">&lt;MElKholy /&gt;</span>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex">
            <li><a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex" style={{ gap: "0.6rem" }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mode flex"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <span className="icon-moon-o" aria-hidden="true" />
            ) : (
              <span className="icon-sun" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setShowModal(true)}
            className="menu icon-menu flex"
            aria-label="Open navigation menu"
            aria-expanded={showModal}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU MODAL ===== */}
      {showModal && (
        <div
          className="fixed"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          <ul
            ref={modalRef}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <button
                className="icon-close"
                onClick={closeModal}
                aria-label="Close menu"
                style={{ fontSize: "1.2rem", cursor: "pointer" }}
              >
                ✕
              </button>
            </li>
            <li><a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
