const Services = () => {
  return (
    <section id="services" className="reveal services-section">
      <div className="container">
        <div className="section-header">
          <h3>Services</h3>
          <p className="text-muted">
            How I help teams ship high-quality software — and how I can help you.
          </p>
        </div>

        <div className="services-grid">
          <div className="card stack-card services-card">
            <h4>Frontend Engineering</h4>
            <p className="text-muted">
              Deliver polished, responsive UIs with reusable components, accessibility best practices, and performance in mind.
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
              Build secure APIs and backend services with clear contracts, validation, and robust error handling.
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
              Improve speed and stability through profiling, query tuning, refactoring, and production-focused practices.
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
