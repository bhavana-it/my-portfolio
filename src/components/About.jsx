const About = () => {
  const skills = [
    {
      title: "React Development",
      description: "Skilled in developing dynamic & interactive user interfaces using React JS, enhancing user engagement & experience.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        </svg>
      ),
      color: "#61dafb"
    },
    {
      title: "PHP Development",
      description: "Experienced in building robust backend applications using PHP and Zend Framework with scalable architecture.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="currentColor" opacity="0.15"/>
          <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5"/>
          <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">php</text>
        </svg>
      ),
      color: "#777bb4"
    },
    {
      title: "Frontend Technologies",
      description: "Proficient in HTML5, CSS3, JavaScript, TypeScript, and modern frontend frameworks for responsive web design.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <path d="M4 4h16v16H4z" fill="currentColor" opacity="0.15"/>
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 8l4 4-4 4M12 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#f7df1e"
    },
    {
      title: "Database & MySQL",
      description: "Experienced in designing and optimizing database schemas using MySQL and managing data efficiently.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" opacity="0.3"/>
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: "#00758f"
    },
    {
      title: "API Integration",
      description: "Expert in designing and integrating RESTful APIs for seamless data communication between services.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "#e535ab"
    },
    {
      title: "UI/UX Design",
      description: "Passionate about creating intuitive user interfaces with focus on usability, accessibility, and modern design principles.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.15"/>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
          <path d="M14 10l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="about" className="reveal">
      <div className="container">
        <div className="section-title-row">
          <h3 className="section-title-decorated">About</h3>
        </div>

        <div className="about-content">
          <p>
            With over <strong>7+ years</strong> of experience in <span className="highlight">Full Stack development</span>, including expertise in <span className="highlight-alt">React</span>, <span className="highlight-alt">PHP</span>, & <span className="highlight-alt">JavaScript</span>, I've contributed to multiple projects within my organization, leveraging cutting-edge technologies to enhance user interactions and build robust web applications. Skilled in <span className="highlight">responsive design</span> & <span className="highlight">API integration</span>, I bring a robust skill set to drive innovation and efficiency.
          </p>

          <p>
            As a <strong>Software Engineer at Graebert India Software</strong>, I've worked across diverse projects while demonstrating proficiency in <span className="highlight-alt">React</span>, <span className="highlight-alt">TypeScript</span>, & <span className="highlight-alt">MySQL</span>. My contributions have centered around:
          </p>

          <ul className="about-highlights">
            <li><strong>Building Scalable Web Applications</strong></li>
            <li><strong>Frontend Development & UI/UX</strong></li>
            <li><strong>API Design & Integration</strong></li>
          </ul>

          <p>
            Passionate about creating seamless user experiences, I've developed applications utilizing <span className="highlight-alt">React</span> and modern <span className="highlight-alt">Frontend Technologies</span>, showcasing my commitment to leveraging technology for intuitive user interfaces.
          </p>
        </div>

        <div className="what-i-do">
          <h4 className="what-i-do-title">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            What I do!
          </h4>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ "--skill-color": skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-content">
                  <h5 className="skill-title">{skill.title}</h5>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
