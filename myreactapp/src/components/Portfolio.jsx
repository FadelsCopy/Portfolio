import { Link } from 'react-router-dom';

export default function Portfolio() {
  const archiveStats = [
    {
      value: "47+",
      label: "Strategic Assets",
      description: "A selected library of ads, video ad scripts, sales assets, and paid media."
    },
    {
      value: "7",
      label: "Creative Formats",
      description: "Static ads, video ads, VSLs, advertorials, listicles, Google Ads, and YouTube Ads."
    },
    {
      value: "20+",
      label: "Static Ad Concepts",
      description: "Hook-driven image ads built around attention, curiosity, and conversion."
    },
    {
      value: "13",
      label: "Video Ad Examples",
      description: "Performance-focused video concepts shaped around clarity, speed, and buying desire."
    }
  ];

  return (
    <section className="portfolio-showcase" id="portfolio-part">
      <div className="portfolio-content-shell">
        <div className="archive-layout-grid">
          <div className="archive-proof-copy">
            <span className="archive-eyebrow">WORK ARCHIVE</span>

            <h2>
              Explore the assets behind the strategy.
            </h2>

            <p>
              A curated collection of creative work across different formats from
              scroll-stopping static ads, video ad scripts to video concepts, advertorials,
              listicles, and paid media.
            </p>

            <div className="archive-format-tags">
              <span>Static Ads</span>
              <span>Video Ads</span>
              <span>VSLs</span>
              <span>Advertorials</span>
              <span>Listicles</span>
              <span>Google Ads</span>
              <span>YouTube Ads</span>
            </div>

            <Link to="/portfolio" className="archive-main-button">
              Explore Full Archive →
            </Link>
          </div>

          <div className="archive-stats-grid">
            {archiveStats.map((stat, index) => (
              <div className="archive-stat-card" key={index}>
                <div className="archive-stat-value">{stat.value}</div>
                <div className="archive-stat-label">{stat.label}</div>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
