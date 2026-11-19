import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools & technologies I work with"
          subtitle="A full-stack toolkit for building, integrating and shipping modern web applications."
        />

        <div className="skills-grid">
          {skillCategories.map(({ title, icon: CatIcon, skills }, i) => (
            <div
              className="skill-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="skill-card-head">
                <div className="skill-card-icon">
                  <CatIcon />
                </div>
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {skills.map(({ name, icon: SkillIcon }) => (
                  <span className="skill-tag" key={name}>
                    <SkillIcon /> {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
