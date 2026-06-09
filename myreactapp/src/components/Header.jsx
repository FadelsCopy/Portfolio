import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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