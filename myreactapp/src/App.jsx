import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Qa from './components/Qa';
import PortfolioPage from './components/PortfolioPage';
import NotFound from './components/NotFound';
import CreativeStrategyOP from './components/CreativeStrategyOP';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Qa />
    </>
  );
}

function StandardWebsiteLayout() {
  return (
    <div className="App">
      <Header />

      <div className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Keep the old development link working */}
          <Route path="/dev" element={<HomePage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Custom branded 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isCreativeStrategyOP =
    location.pathname === '/CS';

  return (
    <>
      <ScrollToTop />

      {isCreativeStrategyOP ? (
        <CreativeStrategyOP />
      ) : (
        <StandardWebsiteLayout />
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;