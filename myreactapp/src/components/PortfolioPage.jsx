import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const allProjects = [
  { id: 1, title: "Static Ad 1", categories: ["Static Ads"], image: "/static1.png", type: "image", content: "" },
  { id: 2, title: "Static Ad 2", categories: ["Static Ads"], image: "/static2.png", type: "image", content: "" },
  { id: 3, title: "Static Ad 3", categories: ["Static Ads"], image: "/static3.png", type: "image", content: "" },
  { id: 4, title: "Static Ad 4", categories: ["Static Ads"], image: "/static4.png", type: "image", content: "" },
  { id: 5, title: "Static Ad 5", categories: ["Static Ads"], image: "/static5.png", type: "image", content: "" },
  { id: 6, title: "Static Ad 6", categories: ["Static Ads"], image: "/static6.png", type: "image", content: "" },
  { id: 7, title: "Static Ad 7", categories: ["Static Ads"], image: "/static7.png", type: "image", content: "" },

  { id: 8, title: "VSL 1", categories: ["VSL"], image: "/portfoliopageimages/vsl1.jpg", type: "pdf", fileUrl: "/pdfs/VSL1.pdf" },
  { id: 9, title: "VSL 2", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL2.pdf" },
  { id: 10, title: "VSL 3", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL3.pdf" },
  { id: 11, title: "VSL 4", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL4.pdf" },
  { id: 12, title: "VSL 5", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL5.pdf" },
  { id: 13, title: "VSL 6", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL6.pdf" },
  { id: 14, title: "VSL 7", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL7.pdf" },
  { id: 15, title: "VSL 8", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL8.pdf" },
  { id: 16, title: "VSL 9", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL9.pdf" },
  { id: 17, title: "VSL 10", categories: ["VSL"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/VSL10.pdf" },


  { id: 18, title: "Video 1", categories: ["Video Ads"], image: "/portfoliopageimages/video1.jpg", type: "video", content: "video1.mp4" },
  { id: 19, title: "Video 2", categories: ["Video Ads"], image: "/ai2.jpg", type: "video", content: "video2.mp4" },
  { id: 20, title: "Video 3", categories: ["Video Ads"], image: "/ai3.jpg", type: "video", content: "video3.mp4" },
  { id: 21, title: "Video 4", categories: ["Video Ads"], image: "/ai4.jpg", type: "video", content: "video4.mp4" },
  { id: 22, title: "Video 5", categories: ["Video Ads"], image: "/ai5.jpg", type: "video", content: "video5.mp4" },
  { id: 23, title: "Video 6", categories: ["Video Ads"], image: "/ai6.jpg", type: "video", content: "video6.mp4" },
  { id: 24, title: "Video 7", categories: ["Video Ads"], image: "/ai7.jpg", type: "video", content: "video7.mp4" },
  { id: 25, title: "Video 8", categories: ["Video Ads"], image: "/ai8.jpg", type: "video", content: "video8.mp4" },
  { id: 26, title: "Video 9", categories: ["Video Ads"], image: "/ai9.jpg", type: "video", content: "video9.mp4" },
  { id: 27, title: "Video 10", categories: ["Video Ads"], image: "/ai10.jpg", type: "video", content: "video10.mp4" },
  { id: 28, title: "Video 11", categories: ["Video Ads"], image: "/ai11.jpg", type: "video", content: "video11.mp4" },
  { id: 29, title: "Video 12", categories: ["Video Ads"], image: "/ai12.jpg", type: "video", content: "video12.mp4" },
  { id: 30, title: "Video 13", categories: ["Video Ads"], image: "/ai13.jpg", type: "video", content: "video13.mp4" },

  { id: 31, title: "GOOGLE ADS", categories: ["Google Ads"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/Google_Ads.pdf" },
  { id: 32, title: "YOUTUBE ADS", categories: ["YouTube Ads"], image: "/script.jpg", type: "pdf", fileUrl: "/pdfs/YouTube_Ads.pdf" },
];

const categories = ["All", "Static Ads", "Video Ads", "VSL", "Google Ads", "YouTube Ads"];

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