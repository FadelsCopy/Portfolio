export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-tagline">CREATIVE STRATEGY // DTC GROWTH</div>
          <h1 className="hero-title">Fadel El Hachimi</h1>
          <h2 className="hero-subtitle">Building Predictable Creative Systems For Scalable Growth</h2>
          <div className="hero-description">
            <p>
              I help DTC brands build stronger creative systems through market intelligence, strategic positioning, AI accelerated execution, and performance driven iteration.
            </p>

            <p>
              From research and angle development to execution and optimization, every decision is built to uncover new opportunities, create more predictable growth, and help brands scale further.
            </p>
          </div>
          <div className="hero-cta-group">
            <a className="hero-btn-primary" href="https://calendly.com/fadelelhachimi20/30min" target="_blank" rel="noopener noreferrer">Book A Discovery Call</a>
            <a className="hero-btn-outline" href="mailto:fadel@fadelscopy.com">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual-frame">
          <div className="premium-portrait-container">
            <div className="bg-grid-mask premium-profile-bg-smooth"></div>
            <div className="photo-bottom-fade-only">
              <img src="profile.png" alt="Fadel El Hachimi" className="profile-image-full-render" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}