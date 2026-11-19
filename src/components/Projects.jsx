import { FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work I'm proud of"
          subtitle="Real products, real clients — booking platforms, enterprise SEO, and client websites."
        />

        <div className="projects-grid">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                className="project-card reveal"
                key={project.title}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="project-banner">
                  <div className="project-banner-top">
                    <div className="project-icon">
                      <Icon />
                    </div>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="project-tagline">{project.tagline}</div>
                </div>

                <div className="project-body">
                  {project.clients && (
                    <div className="project-clients">
                      {project.clients.map((client) => (
                        <span className="project-client-chip" key={client}>
                          {client}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="project-desc">{project.description}</p>

                  <div className="project-resp-title">Key Responsibilities</div>
                  <ul className="project-resp">
                    {project.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {project.technologies.map((t) => (
                      <span className="tech-chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View {link.label} <FiExternalLink />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
