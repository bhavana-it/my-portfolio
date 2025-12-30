const Services = () => {
  return (
    <section id="services" className="reveal services-section">
      <div className="container">
        <div className="section-header">
          <h3>Services</h3>
          <p className="text-muted">
            What I can help you build, improve, and ship.
          </p>
        </div>

        <div className="services-grid">
          <div className="card stack-card services-card">
            <h4>Frontend Engineering</h4>
            <p className="text-muted">
              Build modern, responsive interfaces that are fast, accessible, and easy to maintain.
            </p>
            <div className="services-pill-row" aria-label="Frontend deliverables">
              <span className="services-pill">Responsive UI</span>
              <span className="services-pill">Reusable components</span>
              <span className="services-pill">Accessibility</span>
              <span className="services-pill">Design systems</span>
            </div>
          </div>

          <div className="card stack-card services-card">
            <h4>Backend & APIs</h4>
            <p className="text-muted">
              Design secure, scalable services and APIs with clear contracts and predictable behavior.
            </p>
            <div className="services-pill-row" aria-label="Backend deliverables">
              <span className="services-pill">REST APIs</span>
              <span className="services-pill">Authentication</span>
              <span className="services-pill">Integrations</span>
              <span className="services-pill">Error handling</span>
            </div>
          </div>

          <div className="card stack-card services-card">
            <h4>Performance & Reliability</h4>
            <p className="text-muted">
              Improve speed and stability through profiling, optimization, and clean architecture.
            </p>
            <div className="services-pill-row" aria-label="Performance deliverables">
              <span className="services-pill">Query optimization</span>
              <span className="services-pill">Caching</span>
              <span className="services-pill">Refactoring</span>
              <span className="services-pill">Release support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
