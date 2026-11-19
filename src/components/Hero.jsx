import { FiArrowRight, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { SiReact, SiJavascript, SiNodedotjs, SiLaravel } from 'react-icons/si';
import { personalInfo, socials } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="reveal">
          <div className="hero-badge">
            <span className="dot" />
            Available for new opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role">
            {personalInfo.roles.map((role, i) => (
              <span key={role} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                {i > 0 && <span className="sep" />}
                {role}
              </span>
            ))}
          </div>

          <p className="hero-desc">{personalInfo.intro}</p>

          <div className="hero-meta">
            <span className="hero-meta-chip">
              <MdOutlineWorkOutline /> {personalInfo.experience} Experience
            </span>
            <span className="hero-meta-chip">
              <FiMapPin /> {personalInfo.location}
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href={personalInfo.resumeUrl} download className="btn btn-outline">
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me <FiMail />
            </a>
          </div>

          <div className="hero-socials">
            <span>Connect with me</span>
            {socials.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-avatar">{personalInfo.initials}</div>
          <div className="dev-card">
            <div className="dev-card-header">
              <span className="win-dot r" />
              <span className="win-dot y" />
              <span className="win-dot g" />
              <span className="file-name">developer.js</span>
            </div>
            <div className="dev-card-body">
              <span className="code-line">
                <span className="c-comment">// crafting the web since 2022</span>
              </span>
              <span className="code-line">
                <span className="c-keyword">const</span>{' '}
                <span className="c-var">developer</span>{' '}
                <span className="c-punct">=</span> <span className="c-punct">{'{'}</span>
              </span>
              <span className="code-line">
                {'  '}
                <span className="c-var">name</span>
                <span className="c-punct">:</span>{' '}
                <span className="c-string">'Avinash Patale'</span>
                <span className="c-punct">,</span>
              </span>
              <span className="code-line">
                {'  '}
                <span className="c-var">role</span>
                <span className="c-punct">:</span>{' '}
                <span className="c-string">'Full-Stack Developer'</span>
                <span className="c-punct">,</span>
              </span>
              <span className="code-line">
                {'  '}
                <span className="c-var">stack</span>
                <span className="c-punct">:</span>{' '}
                <span className="c-punct">[</span>
                <span className="c-string">'React'</span>
                <span className="c-punct">,</span>{' '}
                <span className="c-string">'Node'</span>
                <span className="c-punct">,</span>{' '}
                <span className="c-string">'Laravel'</span>
                <span className="c-punct">],</span>
              </span>
              <span className="code-line">
                {'  '}
                <span className="c-var">location</span>
                <span className="c-punct">:</span>{' '}
                <span className="c-string">'Pune, India'</span>
                <span className="c-punct">,</span>
              </span>
              <span className="code-line">
                {'  '}
                <span className="c-fn">hireable</span>
                <span className="c-punct">:</span>{' '}
                <span className="c-keyword">true</span>
                <span className="c-punct">,</span>
              </span>
              <span className="code-line">
                <span className="c-punct">{'}'}</span>
                <span className="c-punct">;</span>
              </span>
            </div>
          </div>

          <div className="float-badge b1">
            <SiReact /> <span className="badge-label">React.js</span>
          </div>
          <div className="float-badge b2">
            <SiJavascript /> <span className="badge-label">JavaScript</span>
          </div>
          <div className="float-badge b3">
            <SiNodedotjs /> <span className="badge-label">Node.js</span>
          </div>
          <div className="float-badge b4">
            <SiLaravel /> <span className="badge-label">Laravel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
