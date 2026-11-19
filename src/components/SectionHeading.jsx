const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="section-header reveal">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
    <div className="title-underline" />
  </div>
);

export default SectionHeading;
