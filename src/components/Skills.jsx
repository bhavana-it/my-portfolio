const Skills = () => {
  return (
    <section id="skills" className="reveal skills-section">
      <div className="container">
        <div className="section-header">
          <h3>Skills</h3>
          <p className="text-muted">
            Technologies and practices I use to build reliable full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          <div className="card skills-card">
            <h4>Languages</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">JavaScript</span>
              <span className="skills-pill">Java</span>
              <span className="skills-pill">PHP</span>
              <span className="skills-pill">HTML</span>
              <span className="skills-pill">CSS</span>
            </div>
          </div>

          <div className="card skills-card">
            <h4>Frameworks & Libraries</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">React</span>
              <span className="skills-pill">Zend</span>
              <span className="skills-pill">REST APIs</span>
              <span className="skills-pill">Auth & RBAC</span>
            </div>
          </div>

          <div className="card skills-card">
            <h4>Databases</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">MySQL</span>
              <span className="skills-pill">Query Optimization</span>
              <span className="skills-pill">Indexes</span>
              <span className="skills-pill">Data Modeling</span>
            </div>
          </div>

          <div className="card skills-card">
            <h4>Testing</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">Unit Testing</span>
              <span className="skills-pill">Integration Testing</span>
              <span className="skills-pill">Regression Testing</span>
            </div>
          </div>

          <div className="card skills-card">
            <h4>Tools</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">Git</span>
              <span className="skills-pill">SVN</span>
              <span className="skills-pill">Debugging</span>
              <span className="skills-pill">Code Review</span>
            </div>
          </div>

          <div className="card skills-card">
            <h4>Expertise</h4>
            <div className="skills-pill-row">
              <span className="skills-pill">Responsive Design</span>
              <span className="skills-pill">Performance</span>
              <span className="skills-pill">Clean Architecture</span>
              <span className="skills-pill">API Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
