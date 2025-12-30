const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <div className="section-header">
          {/* <p className="text-muted">Get To Know</p> */}
          <h3>About Me</h3>
          <p className="text-muted">
            Get to know my approach to building modern, scalable web applications.
          </p>
        </div>

        <div className="card about-card">
          <p>
            Hi, I’m Bhavana Sharma — a Full Stack Developer with 7+ years of
            experience building secure, scalable, and user-centric web
            applications.
          </p>
          <p>
            My journey in tech has been driven by curiosity and a constant
            desire to learn and innovate. From crafting polished user
            interfaces to architecting robust backend systems, I enjoy every
            stage of building software.
          </p>

          <p>
            I focus on clean architecture, performance, and maintainability —
            delivering solutions that are reliable today and easy to evolve
            tomorrow.
          </p>

          <div className="about-pill-grid" aria-label="Focus areas">
            <span className="about-pill">Full Stack Development</span>
            <span className="about-pill">Responsive Design</span>
            <span className="about-pill">API Integration</span>
            <span className="about-pill">Database Management</span>
            <span className="about-pill">Scalable Solutions</span>
            <span className="about-pill">Project Architecture</span>
            <span className="about-pill">Team Collaboration</span>
            <span className="about-pill">Performance Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
