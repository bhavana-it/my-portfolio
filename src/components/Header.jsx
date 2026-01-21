import { useEffect, useMemo, useState } from "react";

const Header = () => {
  const roles = useMemo(
    () => ["Full Stack Developer", "Backend & API Engineer", "React Frontend Engineer"],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero-modern reveal">
      <div className="container hero-split">
        <div className="hero-left">
          <p className="hero-kicker text-muted">Hello, I’m</p>
          <h1 className="hero-title">
            Bhavana <span>Sharma</span>
          </h1>
          <h2 className="hero-roles" aria-live="polite">
            <span className="hero-role-static">A</span>
            <span key={roles[roleIndex]} className="hero-role-dynamic">
              {roles[roleIndex]}
            </span>
          </h2>

          <p className="hero-tagline">
            I build scalable, secure web applications end-to-end — from clean React UIs to reliable APIs and database design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
