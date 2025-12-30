const Resume = () => {
  return (
    <section id="resume" className="reveal">
      <div className="container">
        <div className="card resume-sheet resume-classic">
          <div className="resume-actions">
            <a
              className="btn btn-outline btn-sm"
              href="/Bhavana_Sharma_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
            </a>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => window.print()}
            >
              Print / Save as PDF
            </button>
          </div>

          <header className="resume-header">
            <h4 className="resume-name">Bhavana Sharma</h4>
            <div className="resume-header-rule" aria-hidden="true" />
            <div className="resume-contact-line">
              <span>Noida, India</span>
              <span className="resume-dot" aria-hidden="true">•</span>
              <a href="tel:+919627716196">+91 9627716196</a>
              <span className="resume-dot" aria-hidden="true">•</span>
              <a href="mailto:bhavanait@outlook.com">bhavanait@outlook.com</a>
              <span className="resume-dot" aria-hidden="true">•</span>
              <a href="https://www.linkedin.com/in/bhavana1996/" target="_blank" rel="noreferrer">
                linkedin.com/in/bhavana1996
              </a>
              <span className="resume-dot" aria-hidden="true">•</span>
              <a href="https://github.com/bhavana-it" target="_blank" rel="noreferrer">
                github.com/bhavana-it
              </a>
            </div>
          </header>

          <div className="resume-section">
            <h5>Professional Summary</h5>
            <p>
              Senior Software Engineer and Full Stack Developer with experience delivering production features end-to-end across UI, backend services, and databases.
              Strong focus on clean architecture, performance, maintainability, and collaboration.
            </p>
          </div>

          <div className="resume-section">
            <h5>Skills</h5>
            <div className="resume-skill-columns">
              <ul>
                <li><strong>Programming Language</strong>: PHP, JavaScript, Core Java, Python</li>
                <li><strong>Front-end Technologies</strong>: HTML, CSS, JavaScript, Bootstrap, React, responsive web design</li>
                <li><strong>Back-end Technologies</strong>: Zend, Laravel, Node.js, server-side frameworks</li>
              </ul>
              <ul>
                <li><strong>Database Management</strong>: MySQL, MongoDB</li>
                <li><strong>Version Control</strong>: Git, Subversion, Bitbucket</li>
                <li><strong>Additional Skills</strong>: Problem solving, debugging, testing, QA, Agile, collaboration, continuous learning</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h5>Work History</h5>
            <div className="resume-role">
              <div className="resume-role-top">
                <div className="resume-role-title">Senior Software Engineer</div>
                <div className="resume-role-time">Jan 2024 – Present</div>
              </div>
              <div className="resume-org">Graebert India Software — Noida</div>
              <ul>
                <li>Own end-to-end delivery across frontend, backend services, and database changes.</li>
                <li>Drive architecture decisions and improve maintainability through scalable patterns.</li>
                <li>Optimize performance via profiling, query tuning, and proactive refactoring.</li>
                <li>Support team quality through code reviews, mentoring, and technical guidance.</li>
              </ul>
            </div>

            <div className="resume-role">
              <div className="resume-role-top">
                <div className="resume-role-title">Software Engineer</div>
                <div className="resume-role-time">Jan 2021 – Dec 2023</div>
              </div>
              <div className="resume-org">Graebert India Software — Noida</div>
              <ul>
                <li>Delivered production features end-to-end across frontend, backend, and data layers.</li>
                <li>Built and integrated REST APIs with secure access control and reliable error handling.</li>
                <li>Improved stability and performance by addressing bottlenecks and reducing regressions.</li>
              </ul>
            </div>

            <div className="resume-role">
              <div className="resume-role-top">
                <div className="resume-role-title">Associate Software Engineer</div>
                <div className="resume-role-time">Oct 2018 – Jan 2021</div>
              </div>
              <div className="resume-org">Graebert India Software — Noida</div>
              <ul>
                <li>Implemented UI and backend enhancements, partnering with senior engineers for design reviews.</li>
                <li>Worked on bug fixing, feature delivery, and refactoring to improve code quality.</li>
                <li>Supported releases by validating fixes and ensuring smooth handoffs.</li>
              </ul>
            </div>

            <div className="resume-role">
              <div className="resume-role-top">
                <div className="resume-role-title">Trainee</div>
                <div className="resume-role-time">Jul 2018 – Oct 2018</div>
              </div>
              <div className="resume-org">Graebert India Software — Noida</div>
              <ul>
                <li>Learned full-stack workflows, tools, and delivery practices while contributing to fixes and small enhancements.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h5>Education</h5>
            <ul className="resume-edu-list">
              <li>
                <div className="resume-edu-title">Polytechnic Diploma: Computer Science And Engineering (06/2018)</div>
                <div className="resume-edu-meta">Janta Polytechnic - Jahangirabad, Bulandshahar</div>
              </li>
              <li>
                <div className="resume-edu-title">Intermediate: PCM (06/2014)</div>
                <div className="resume-edu-meta">Surajbhan Saraswati Vidya Mandir - Shikarpur</div>
              </li>
              <li>
                <div className="resume-edu-title">High School Diploma (06/2012)</div>
                <div className="resume-edu-meta">N.R.S Inter College Kadhen - Shikarpur</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
