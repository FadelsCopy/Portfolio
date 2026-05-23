import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  // Helper function to handle navigation
  const handleNav = (path, hash) => {
    if (isHomePage) {
      // If already home, just jump to section
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on portfolio, go home first, then jump
      navigate('/');
      // Delay the scroll slightly to allow the page to load
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="site-header">
      <div className="brand">
        {isHomePage ? (
          <span className="logo-text">Fadel<span className="dot">.</span></span>
        ) : (
          <Link to="/" className="logo-link">
            <span className="logo-text">Fadel<span className="dot">.</span></span>
          </Link>
        )}
        <a className="email-link" href="mailto:fadel@fadelscopy.com">fadel@fadelscopy.com</a>
      </div>
      
      <nav className="main-nav">
        {location.pathname === '/portfolio' ? (
          <Link to="/">Home</Link>
        ) : (
          <Link to="/portfolio">Portfolio</Link>
        )}
        
        {/* Buttons now use the handleNav function */}
        <button onClick={() => handleNav('/', '#services-part')} className="nav-btn-link">Services</button>
        <button onClick={() => handleNav('/', '#qa-part')} className="nav-btn-link">Q&A</button>
        
        <a href="https://calendly.com/fadelelhachimi20/30min" className="btn-nav-call" target="_blank" rel="noopener noreferrer">Book a Call</a>
      </nav>
    </header>
  );
}