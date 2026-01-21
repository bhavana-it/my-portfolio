import { useEffect, useState } from "react";

const RightRailNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "services",
      "testimonials",
      "contact"
    ];

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
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

  const items = [
    {
      id: "about",
      label: "About",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "experience",
      label: "Resume",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
          <path d="M12 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "projects",
      label: "Portfolio",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "contact",
      label: "Contact",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <aside className="right-rail" aria-label="Quick navigation">
      <div className="card right-rail-card">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`right-rail-item ${activeSection === item.id ? "active" : ""}`}
            aria-label={item.label}
            title={item.label}
          >
            <span className="right-rail-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="right-rail-label">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default RightRailNav;
