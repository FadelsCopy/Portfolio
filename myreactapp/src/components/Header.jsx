import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isPortfolioPage = location.pathname === '/portfolio';

  const handleNav = (hash) => {
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');

      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" className="logo-link">
          <span className="logo-text">Fadel<span className="dot">.</span></span>
        </Link>

        <a className="email-link" href="mailto:fadel@fadelscopy.com">
          fadel@fadelscopy.com
        </a>
      </div>

      <nav className="main-nav">
        {isPortfolioPage ? (
          <Link to="/" className="nav-main-link">Home</Link>
        ) : (
          <Link to="/portfolio" className="nav-main-link">Portfolio</Link>
        )}

        <button onClick={() => handleNav('#services-part')} className="nav-btn-link">
          Services
        </button>

        <button onClick={() => handleNav('#qa-part')} className="nav-btn-link">
          FAQ
        </button>

        <a
          href="https://calendly.com/fadelelhachimi20/30min"
          className="btn-nav-call"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}