const Experience = () => {
  return (
    <section id="experience" className="reveal">
      <div className="container">
        <div className="section-header">
          <h3>My Journey</h3>
          <p className="text-muted">
            Career growth and impact at Graebert India Software.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item timeline-left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card timeline-card">
              <div className="timeline-top">
                <h4>Senior Software Engineer · Graebert India Software (Noida, India)</h4>
                <p className="text-muted"><strong>Jan 2024 – Present</strong></p>
              </div>
              <ul>
                <li>Own end-to-end delivery of features across UI, backend services, and database changes</li>
                <li>Drive architecture decisions and improve maintainability through clean, scalable patterns</li>
                <li>Optimize performance via profiling, query tuning, and proactive refactoring</li>
                <li>Support team quality through code reviews, mentoring, and technical guidance</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item timeline-right">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card timeline-card">
              <div className="timeline-top">
                <h4>Software Engineer · Graebert India Software (Noida, India)</h4>
                <p className="text-muted"><strong>Jan 2021 – 2024</strong></p>
              </div>
              <ul>
                <li>Delivered production features end-to-end across frontend, backend, and data layers</li>
                <li>Built and integrated REST APIs with secure access control and solid error handling</li>
                <li>Improved stability and performance by addressing bottlenecks and reducing regressions</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item timeline-left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card timeline-card">
              <div className="timeline-top">
                <h4>Associate Software Engineer · Graebert India Software (Noida, India)</h4>
                <p className="text-muted"><strong>Oct 2018 – Jan 2021</strong></p>
              </div>
              <ul>
                <li>Implemented UI and backend enhancements, collaborating with senior engineers for design reviews</li>
                <li>Worked on bug fixing, feature delivery, and improving code quality through refactoring</li>
                <li>Supported releases by validating fixes and ensuring smooth handoffs</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item timeline-right">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card timeline-card">
              <div className="timeline-top">
                <h4>Trainee · Graebert India Software (Noida, India)</h4>
                <p className="text-muted"><strong>Jul 2018 – Oct 2018</strong></p>
              </div>
              <ul>
                <li>Onboarded into full-stack workflows and learned team conventions, tools, and delivery process</li>
                <li>Contributed to small fixes and enhancements while building a strong foundation in the codebase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
