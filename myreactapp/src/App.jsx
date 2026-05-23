import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Qa from './components/Qa';
import PortfolioPage from './components/PortfolioPage'; // Ensure this is imported

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* Home Page: Everything you want to see on the landing page */}
          <Route path="/" element={
            <>
              <Hero />
              <Marquee />
              <Services />
              <Portfolio />
              <Qa />
            </>
          } />
          
          {/* Portfolio Page: Only the content for the portfolio page */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;