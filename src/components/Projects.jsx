
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <div className="section-header">
          <h3>Projects</h3>
          <p className="text-muted">
            Selected work showing end-to-end delivery, architecture, and measurable impact.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              className="project-card stagger-item"
              key={project.id}
              style={{ "--stagger-delay": `${index * 90}ms` }}
            >
              <div className="project-header">
                <h4 className="project-title">{project.title}</h4>
                <span className="project-role-pill">{project.role}</span>
              </div>

              <p className="text-muted project-context">{project.context}</p>

              <div className="tech-list">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-body">
                <div className="project-detail">
                  <div className="project-detail-label">Problem</div>
                  <div className="project-detail-value">{project.problem}</div>
                </div>
                <div className="project-detail">
                  <div className="project-detail-label">Solution</div>
                  <div className="project-detail-value">{project.solution}</div>
                </div>
                <div className="project-detail">
                  <div className="project-detail-label">Impact</div>
                  <div className="project-detail-value">{project.impact}</div>
                </div>
              </div>

              <div className="project-actions">
                {project?.links?.live && (
                  <a
                    href={project.links.live}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {project?.links?.github && (
                  <a
                    href={project.links.github}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project?.links?.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
