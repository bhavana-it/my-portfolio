import React from "react";

const AreasOfExpertise = () => {
  return (
    <section id="expertise" className="reveal">
      <div className="container">
        <div className="section-header">
          <h3>Areas of Expertise</h3>
          <p className="text-muted">
            Core strengths across frontend, backend, and reliable delivery.
          </p>
        </div>

        <div className="expertise-grid">
          <div className="card expertise-card">
            <h4>Frontend Engineering</h4>
            <div className="expertise-list" aria-label="Frontend expertise">
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">React UI, components, state management</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">Responsive, accessible, performance-focused UX</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">Design systems, reusable patterns, clean UI</span>
              </div>
            </div>
          </div>

          <div className="card expertise-card">
            <h4>Backend & APIs</h4>
            <div className="expertise-list" aria-label="Backend expertise">
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">REST APIs, validation, secure access control</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">Java / PHP (Zend), scalable service design</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">SQL optimization, query tuning, data modeling</span>
              </div>
            </div>
          </div>

          <div className="card expertise-card">
            <h4>Architecture & Delivery</h4>
            <div className="expertise-list" aria-label="Architecture and delivery expertise">
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">System design, maintainable code, refactoring</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">Testing mindset, error handling, observability</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon" aria-hidden="true">◈</span>
                <span className="expertise-text">Performance profiling and production readiness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
