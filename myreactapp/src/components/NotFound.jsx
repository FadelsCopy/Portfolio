import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-bg-glow not-found-bg-glow-one"></div>
      <div className="not-found-bg-glow not-found-bg-glow-two"></div>

      <section className="not-found-card">
        <span className="not-found-kicker">404 / PAGE NOT FOUND</span>

        <h1>This page doesn’t exist.</h1>

        <p>
          Looks like this link is broken, moved, or never existed in the first place.
          No worries — you’re still in the right place.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-primary-btn">
            Back to Homepage
          </Link>

          <Link to="/portfolio" className="not-found-secondary-btn">
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}