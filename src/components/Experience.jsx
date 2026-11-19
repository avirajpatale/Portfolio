import { FiCalendar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Where I've worked"
          subtitle="3+ years of building and shipping real-world web applications."
        />

        <div className="timeline">
          {experience.map((job, i) => (
            <div
              className={`timeline-item reveal ${job.current ? 'current' : ''}`}
              key={job.company}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{job.company}</h3>
                  <span className="timeline-period">
                    <FiCalendar />
                    {job.period}
                    {job.current && <span className="current-flag">· Current</span>}
                  </span>
                </div>
                <div className="timeline-role">{job.role}</div>
                <p>{job.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
