import SectionHeading from './SectionHeading';
import { about, projects } from '../data/portfolioData';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: `${projects.length}`, label: 'Featured Projects' },
  { value: '7', label: 'Skill Categories' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who ships end-to-end"
          subtitle="Frontend craftsmanship, backend reliability, and production-ready delivery."
        />

        <div className="about-grid">
          <div className="about-copy reveal">
            <h3>{about.heading}</h3>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-stats">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            {about.highlights.map(({ icon: Icon, title, text }, i) => (
              <div
                className="highlight-card reveal"
                key={title}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="highlight-icon">
                  <Icon />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
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
