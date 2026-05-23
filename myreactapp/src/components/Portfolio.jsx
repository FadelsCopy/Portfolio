import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      label: "SELECTED STRATEGIC WORK",
      title: "Creative Intelligence Archive",
      description: "A curated collection of video, static, UGC, native, and AI-driven creative systems paired with strategic rationale, execution frameworks, messaging architecture, and performance-driven decision making.",
      image: "/PSimg1.png",
      link: "/portfolio", 
      isComingSoon: false
    },
    {
      label: "FULL CASE DECONSTRUCTION",
      title: <>Inside <span className="redacted-text">[REDACTED]</span> Brand</>,
      description: "A complete strategic breakdown showing the full process from research and positioning to creative development, launch decisions, iteration cycles, and performance learning.",
      image: "/PSimg2.png",
      isComingSoon: true
    }
  ];

  return (
    <section className="portfolio-showcase" id="portfolio-part">
      <div className="main-content-section">
        <div className="section-label">STRATEGIC ARCHIVE</div>
        <h2 className="section-headline">Inside The Creative Systems</h2>
        <p className="section-subtitle">
          A closer look at how strategy becomes execution through research, creative direction, testing logic, and performance analysis.
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-preview-card ${project.isComingSoon ? 'coming-soon-card' : ''}`}>
              <div className="project-image-box">
                <img src={project.image} className="project-preview-image" alt={project.title} />
              </div>
              <div className="project-details">
                <span className="card-micro-label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {project.isComingSoon ? (
                  <div className="premium-tooltip-container">
                    <span className="premium-tooltip-badge">Asset Vault Launching Soon</span>
                    {/* No link or click functionality here */}
                    <span className="disabled-text">Case Study Coming Soon</span>
                  </div>
                ) : (
                  <Link to={project.link} className="project-link">Explore Strategic Archive →</Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-action-center">
          <Link to="/portfolio" className="btn-large-vault">Access Full Strategic Archive</Link>
        </div>
      </div>
    </section>
  );
}