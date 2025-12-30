import { useEffect, useMemo, useState } from "react";

const Header = () => {
  const roles = useMemo(
    () => ["Full Stack Developer", "Creative Designer", "Software Architect"],
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
           Combining development with thoughtful design, I transform concepts into secure, scalable, user-centered web solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="social-links hero-socials" aria-label="Social links">
            <a href="https://github.com/bhavana-it" className="social-link" aria-label="GitHub" target="_blank" rel="noreferrer">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.596 2 12.255c0 4.528 2.865 8.37 6.839 9.727.5.096.682-.224.682-.497 0-.245-.009-.895-.014-1.757-2.782.62-3.369-1.372-3.369-1.372-.454-1.18-1.11-1.494-1.11-1.494-.907-.635.069-.622.069-.622 1.003.073 1.531 1.055 1.531 1.055.892 1.566 2.341 1.114 2.91.852.09-.664.349-1.114.635-1.37-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.034 1.029-2.75-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.05A9.252 9.252 0 0 1 12 6.844a9.26 9.26 0 0 1 2.503.347c1.909-1.326 2.748-1.05 2.748-1.05.545 1.412.202 2.455.1 2.714.64.716 1.028 1.63 1.028 2.75 0 3.944-2.339 4.81-4.566 5.064.359.316.678.94.678 1.895 0 1.368-.012 2.47-.012 2.807 0 .275.18.597.688.496C19.137 20.62 22 16.782 22 12.255 22 6.596 17.523 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/bhavana1996/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0ZM2.5 21.5h4.9V9H2.5v12.5ZM9.5 9h4.7v1.7h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.2 5.84 7.36v5.97h-4.9v-5.29c0-1.26-.03-2.88-1.8-2.88-1.8 0-2.08 1.37-2.08 2.79v5.38H9.5V9Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a href="mailto:bhavanait@outlook.com" className="social-link" aria-label="Email">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    d="M4 6.5h16c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5V8c0-.83.67-1.5 1.5-1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 8l7.2 5.3c.2.15.47.15.67 0L19.5 8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
