import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "expertise", "experience", "projects", "services", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -65% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onNavClick = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isMenuOpen ? "navbar-open" : ""}`}>
      <div className="container navbar-inner">
        {/* Left: Brand */}
        {/* <div className="navbar-brand">
          <a href="#home" className="navbar-brand-link">
            Bhavana<span>.</span>
          </a>
        </div> */}

        {/* Center: Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={onNavClick}>Home</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={onNavClick}>About</a></li>
          <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={onNavClick}>Skills</a></li>
          <li><a href="#expertise" className={activeSection === "expertise" ? "active" : ""} onClick={onNavClick}>Expertise</a></li>
          <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={onNavClick}>Journey</a></li>
          <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={onNavClick}>Projects</a></li>
          <li><a href="#services" className={activeSection === "services" ? "active" : ""} onClick={onNavClick}>Services</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={onNavClick}>Contact</a></li>
        </ul>

        {/* Right: Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <ThemeToggle />
          <a
            href="/Bhavana_Sharma_Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
