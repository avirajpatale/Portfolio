import { FaGraduationCap } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="The foundation behind the engineering work."
        />

        <div className="education-grid">
          {education.map((edu, i) => (
            <div
              className="edu-card reveal"
              key={edu.degree}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h3>{edu.degree}</h3>
                <div className="edu-school">{edu.institution}</div>
                <span className="edu-year">
                  <FiCalendar /> Completed {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
