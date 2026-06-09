// src/components/Services.jsx

function ServiceIcon({ type }) {
  const icons = {
    research: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l4.5 4.5" />
        <path d="M8.5 10.5h4" />
        <path d="M10.5 8.5v4" />
      </svg>
    ),
    messaging: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7.5h14" />
        <path d="M5 12h10" />
        <path d="M5 16.5h7" />
        <path d="M4 4h16v13H9l-5 4V4z" />
      </svg>
    ),
    creative: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
      </svg>
    ),
    operations: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8.3 7.2l2.8 7.8" />
        <path d="M15.7 7.2l-2.8 7.8" />
        <path d="M8.5 6h7" />
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 3 5-7" />
        <path d="M18 8h-4" />
        <path d="M18 8v4" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9.5 12h5" />
        <path d="M12 9.5v5" />
        <path d="M9 2v3" />
        <path d="M15 2v3" />
        <path d="M9 19v3" />
        <path d="M15 19v3" />
        <path d="M2 9h3" />
        <path d="M2 15h3" />
        <path d="M19 9h3" />
        <path d="M19 15h3" />
      </svg>
    ),
  };

  return (
    <div className="service-icon" aria-hidden="true">
      {icons[type]}
    </div>
  );
}

export default function Services() {
  return (
    <section className="services-section" id="services-part">
      <div className="main-content-section">
        <div className="section-label">CREATIVE OPERATING SYSTEM</div>
        <h2 className="section-headline">How I Build Performance Creative</h2>

        <div className="services-grid">
          <div className="service-card">
            <ServiceIcon type="research" />
            <span className="service-number">01 / MARKET INTELLIGENCE</span>
            <h3>Research and Strategic Direction</h3>
            <p>Studying customer psychology, competitor ecosystems, market sophistication, awareness levels, buying triggers, and behavioral patterns to identify opportunities and define the highest leverage creative direction.</p>
          </div>
          
          <div className="service-card">
            <ServiceIcon type="messaging" />
            <span className="service-number">02 / POSITIONING SYSTEMS</span>
            <h3>Messaging and Creative Angles</h3>
            <p>Translating research into positioning frameworks, emotional drivers, concepts, hooks, narratives, and differentiated angles designed to create attention and increase conversion potential.</p>
          </div>

          <div className="service-card">
            <ServiceIcon type="creative" />
            <span className="service-number">03 / CREATIVE DEVELOPMENT</span>
            <h3>Asset and Campaign Creation</h3>
            <p>Building concepts and execution systems across Meta, TikTok, landing experiences, static ads, video ads, UGC, AI UGC, native formats, scripts, visuals, and performance-focused creative assets.</p>
          </div>

          <div className="service-card">
            <ServiceIcon type="operations" />
            <span className="service-number">04 / CREATIVE OPERATIONS</span>
            <h3>Execution and Team Alignment</h3>
            <p>Leading creative workflows from concept to delivery while coordinating editors, designers, creators, and production systems to maintain quality, speed, and strategic consistency.</p>
          </div>

          <div className="service-card">
            <ServiceIcon type="performance" />
            <span className="service-number">05 / PERFORMANCE INTELLIGENCE</span>
            <h3>Analysis and Optimization</h3>
            <p>Reviewing performance data, identifying creative patterns, analyzing feedback loops, generating new hypotheses, improving weak assets, and continuously evolving the next generation of creative.</p>
          </div>

          <div className="service-card">
            <ServiceIcon type="ai" />
            <span className="service-number">06 / AI ACCELERATION</span>
            <h3>AI Powered Creative Systems</h3>
            <p>Using advanced AI workflows across ideation, visual generation, voice synthesis, animation, and production with tools such as Claude Code, Higgsfield, ElevenLabs, Runway, Midjourney, Veo... and specialized prompting systems to increase speed without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}