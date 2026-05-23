// src/components/Services.jsx
export default function Services() {
  return (
    // The wrapper class triggers the CSS gradients (the "break")
    <section className="services-section" id="services-part">
      {/* The main-content-section now acts as the inner container */}
      <div className="main-content-section">
        <div className="section-label">CREATIVE OPERATING SYSTEM</div>
        <h2 className="section-headline">How I Build Performance Creative</h2>

        <div className="services-grid">
          <div className="service-card">
            <span className="service-number">01 / MARKET INTELLIGENCE</span>
            <h3>Research and Strategic Direction</h3>
            <p>Studying customer psychology, competitor ecosystems, market sophistication, awareness levels, buying triggers, and behavioral patterns to identify opportunities and define the highest leverage creative direction.</p>
          </div>
          
          <div className="service-card">
            <span className="service-number">02 / POSITIONING SYSTEMS</span>
            <h3>Messaging and Creative Angles</h3>
            <p>Translating research into positioning frameworks, emotional drivers, concepts, hooks, narratives, and differentiated angles designed to create attention and increase conversion potential.</p>
          </div>

          <div className="service-card">
            <span className="service-number">03 / CREATIVE DEVELOPMENT</span>
            <h3>Asset and Campaign Creation</h3>
            <p>Building concepts and execution systems across Meta, TikTok, landing experiences, static ads, video ads, UGC, AI UGC, native formats, scripts, visuals, and performance-focused creative assets.</p>
          </div>

          <div className="service-card">
            <span className="service-number">04 / CREATIVE OPERATIONS</span>
            <h3>Execution and Team Alignment</h3>
            <p>Leading creative workflows from concept to delivery while coordinating editors, designers, creators, and production systems to maintain quality, speed, and strategic consistency.</p>
          </div>

          <div className="service-card">
            <span className="service-number">05 / PERFORMANCE INTELLIGENCE</span>
            <h3>Analysis and Optimization</h3>
            <p>Reviewing performance data, identifying creative patterns, analyzing feedback loops, generating new hypotheses, improving weak assets, and continuously evolving the next generation of creative.</p>
          </div>

          <div className="service-card">
            <span className="service-number">06 / AI ACCELERATION</span>
            <h3>AI Powered Creative Systems</h3>
            <p>Using advanced AI workflows across ideation, visual generation, voice synthesis, animation, scripting, and production with tools such as ElevenLabs, Runway, Midjourney, Veo, and specialized prompting systems to increase speed without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}