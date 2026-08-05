import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="brand"
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link to="/" className="logo-link">
          <span className="logo-text">
            Fadel<span className="dot">.</span>
          </span>
        </Link>

        <a className="email-link" href="mailto:fadel@fadelscopy.com">
          fadel@fadelscopy.com
        </a>
      </motion.div>

      <motion.nav
        className="main-nav"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {isPortfolioPage ? (
          <Link to="/" className="nav-main-link">
            Home
          </Link>
        ) : (
          <Link to="/portfolio" className="nav-main-link">
            Portfolio
          </Link>
        )}

        <button onClick={() => handleNav('#services-part')} className="nav-btn-link">
          Services
        </button>

        <button onClick={() => handleNav('#qa-part')} className="nav-btn-link">
          FAQ
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg className="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2"/>
              <path d="M12 20v2"/>
              <path d="m4.93 4.93 1.41 1.41"/>
              <path d="m17.66 17.66 1.41 1.41"/>
              <path d="M2 12h2"/>
              <path d="M20 12h2"/>
              <path d="m6.34 17.66-1.41 1.41"/>
              <path d="m19.07 4.93-1.41 1.41"/>
            </svg>
          ) : (
            <svg className="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          )}
        </button>

        <a
          href="https://calendly.com/fadelelhachimi20/30min"
          className="btn-nav-call"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call
        </a>
      </motion.nav>
    </motion.header>
  );
}