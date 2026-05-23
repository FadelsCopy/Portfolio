// src/components/Marquee.jsx

export default function Marquee() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const renderCards = () =>
    cards.map((num) => (
      <div key={num} className="ticker-card">
        <div className="ticker-media-9-16">
          <img
            src={`display${num}.jpg`}
            className="ticker-preview-image"
            alt="Spec"
          />
        </div>
      </div>
    ));

  return (
    <section className="ticker-showcase-section">

      <div className="ticker-header">
        <span className="ticker-pre-title">
          // LIVE MARKET INSIGHTS
        </span>

        <h2 className="ticker-main-title">
          FIND THE NEXT CREATIVE OPPORTUNITY BEFORE YOUR COMPETITORS
        </h2>
      </div>

      <div className="ticker-viewport">

        {/* ORIGINAL */}
        <div className="ticker-group">
          {renderCards()}
        </div>

        {/* DUPLICATE */}
        <div
          className="ticker-group"
          aria-hidden="true"
        >
          {renderCards()}
        </div>

      </div>

    </section>
  );
}