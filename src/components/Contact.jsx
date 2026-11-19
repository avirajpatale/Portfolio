import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { contactInfo, socials } from '../data/portfolioData';

const contactIcons = { Email: FiMail, Phone: FiPhone, Location: FiMapPin };

const initialForm = { name: '', email: '', subject: '', message: '' };

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) {
    errors.message = 'Please enter your message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
};

const Contact = () => {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    // Demo submission — no backend. Simulates a send delay.
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues(initialForm);
      setTimeout(() => setSent(false), 6000);
    }, 900);
  };

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className={`form-control ${errors[name] ? 'invalid' : ''}`}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
      />
      {errors[name] && <span className="form-error">{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project in mind or a role to discuss? My inbox is always open."
        />

        <div className="contact-grid">
          <div className="contact-info-card reveal">
            <h3>Get in touch</h3>
            <p>
              Whether it's a full-time role, a freelance project, or just a
              technical chat — feel free to reach out.
            </p>

            {contactInfo.map((item) => {
              const Icon = contactIcons[item.label];
              const content = (
                <>
                  <div className="contact-item-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </>
              );
              return item.href ? (
                <a href={item.href} className="contact-item" key={item.label}>
                  {content}
                </a>
              ) : (
                <div className="contact-item" key={item.label}>
                  {content}
                </div>
              );
            })}

            <div className="contact-socials">
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

          <div className="contact-form-card reveal">
            <h3>Send me a message</h3>

            {sent && (
              <div className="form-success">
                <FiCheckCircle />
                Thanks for reaching out! Your message has been sent — I'll get
                back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                {field('name', 'Name', 'text', 'Your name')}
                {field('email', 'Email', 'email', 'you@example.com')}
              </div>
              {field('subject', 'Subject', 'text', "What's this about?")}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${errors.message ? 'invalid' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
