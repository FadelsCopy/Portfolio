import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Qa from './components/Qa';
import ComingSoon from './components/ComingSoon';
import PortfolioPage from './components/PortfolioPage';

function Layout() {
  const location = useLocation();

  // hide on Coming Soon page
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<ComingSoon />} />

        <Route
          path="/dev"
          element={
            <>
              <Hero />
              <Marquee />
              <Services />
              <Portfolio />
              <Qa />
            </>
          }
        />

        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;