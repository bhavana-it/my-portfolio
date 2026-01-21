const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.15"/>
          <path d="M8 8l-3 4 3 4M16 8l3 4-3 4M13 6l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#3b82f6",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.15"/>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 9h18M3 15h18M9 9v12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: "#10b981",
      skills: ["PHP", "Zend Framework", "REST APIs", "MySQL", "Authentication"]
    },
    {
      title: "Database & Storage",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" opacity="0.15"/>
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: "#8b5cf6",
      skills: ["MySQL", "Query Optimization", "Data Modeling", "Indexing", "Database Design"]
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "#ec4899",
      skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Testing & QA",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.15"/>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: "#f59e0b",
      skills: ["Unit Testing", "Integration Testing", "Regression Testing", "Code Review"]
    },
    {
      title: "Tools & Support",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.15"/>
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#6366f1",
      skills: ["Git", "SVN", "VS Code", "Jira", "Debugging", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="reveal skills-section">
      <div className="container">
        <div className="section-title-row">
          <h3 className="section-title-decorated">Skills & Expertise</h3>
        </div>
        <p className="section-subtitle">
          Crafting solutions with precision and passion
        </p>

        <div className="skills-grid-new">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card" style={{ "--skill-accent": category.color }}>
              <div className="skill-category-icon">{category.icon}</div>
              <h4 className="skill-category-title">{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
