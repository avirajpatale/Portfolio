import { FiHeart } from 'react-icons/fi';
import { personalInfo, socials } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-logo-badge">{personalInfo.initials}</span>
            <div>
              <div className="footer-brand-name">{personalInfo.shortName}</div>
              <div className="footer-brand-role">
                Frontend & Full-Stack Developer
              </div>
            </div>
          </div>

          <div className="footer-socials">
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

        <div className="footer-bottom">
          <span>
            © {year} {personalInfo.name}. All rights reserved.
          </span>
          <span>
            Built with <FiHeart className="heart" /> using React.js
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
