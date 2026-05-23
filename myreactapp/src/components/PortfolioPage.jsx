import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const allProjects = [
  { id: 1, title: "Static Ad 1", categories: ["Static Ads", "Native Ads"], image: "/static1.png", type: "image", content: "" },
  { id: 2, title: "Static Ad 2", categories: ["Static Ads"], image: "/static2.png", type: "image", content: "" },
  { id: 3, title: "Static Ad 3", categories: ["Static Ads"], image: "/static3.png", type: "image", content: "" },
  { id: 4, title: "Static Ad 4", categories: ["Static Ads", "Native Ads"], image: "/static4.png", type: "image", content: "" },
  { id: 5, title: "Static Ad 5", categories: ["Static Ads"], image: "/static5.png", type: "image", content: "" },
  { id: 6, title: "Static Ad 6", categories: ["Static Ads"], image: "/static6.png", type: "image", content: "" },
  { id: 7, title: "Static Ad 7", categories: ["Static Ads", "Native Ads"], image: "/static7.png", type: "image", content: "" },
  { id: 8, title: "Beard Kit Ad 1", categories: ["UGC", "Native Ads"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/Ad1-GrowingKit.pdf" },
  { id: 9, title: "Beard Kit Ad 2", categories: ["UGC", "Native Ads"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/Ad2-GrowingKit.pdf" },
  { id: 10, title: "Beard Kit Ad 3", categories: ["UGC", "Native Ads"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/Ad3-GrowingKit.pdf" },
  { id: 11, title: "Script 4", categories: ["Direct Response"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/script4.pdf" },
  { id: 12, title: "Script 5", categories: ["Direct Response"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/script5.pdf" },
  { id: 13, title: "Script 6", categories: ["Direct Response"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/script6.pdf" },
  { id: 14, title: "Script 7", categories: ["Direct Response"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/script7.pdf" },
  { id: 15, title: "Script 8", categories: ["Direct Response"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/script8.pdf" },
  { id: 16, title: "AI UGC Video", categories: ["AI Ads", "UGC"], image: "/ai1.jpg", type: "video", content: "video1.mp4" },
  { id: 17, title: "AI Native Video", categories: ["AI Ads", "Native Ads"], image: "/ai2.jpg", type: "video", content: "video2.mp4" },
  { id: 18, title: "AI UGC Video 2", categories: ["AI Ads", "UGC"], image: "/ai3.jpg", type: "video", content: "video3.mp4" },
];

const categories = ["All", "Direct Response", "UGC", "Native Ads", "Static Ads", "AI Ads", "Google Ads", "YouTube Ads"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  
  const filtered = active === "All" ? allProjects : allProjects.filter(p => p.categories.includes(active));

  const handleCardClick = (proj) => {
    if (proj.type === "pdf") {
      if (proj.fileUrl) window.open(proj.fileUrl, "_blank");
      return;
    }
    setSelected(proj);
  };

  return (
    <section className="portfolio-page-section">
      <header className="portfolio-page-header">
        <h2 className="section-headline">Work Archive</h2>
        <div className="portfolio-filter-nav">
          {categories.map((c) => (
            <button 
              key={c} 
              onClick={() => setActive(c)} 
              className={active === c ? "active" : ""}
            >
              {c}
              {active === c && <motion.div className="nav-indicator" layoutId="activeTab" />}
            </button>
          ))}
        </div>
      </header>

      <div className="portfolio-page-grid-wrapper">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="portfolio-page-grid">
            {filtered.length > 0 ? (
              filtered.map(proj => (
                <div key={proj.id} className="portfolio-page-card" onClick={() => handleCardClick(proj)}>
                  <div className="portfolio-page-media"><img src={proj.image} alt={proj.title} /></div>
                  <div className="portfolio-page-info">
                    <span>{proj.categories[0]}</span>
                    <h3>{proj.title}</h3>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-projects-message">No projects found.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}