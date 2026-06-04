import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const allProjects = [
  { id: 1, title: "Static Ad 1", categories: ["Static Ads"], image: "/portfoliopageimages/static1.jpeg", type: "image", content: "" },
  { id: 2, title: "Static Ad 2", categories: ["Static Ads"], image: "/portfoliopageimages/static2.jpeg", type: "image", content: "" },
  { id: 3, title: "Static Ad 3", categories: ["Static Ads"], image: "/portfoliopageimages/static3.jpeg", type: "image", content: "" },
  { id: 4, title: "Static Ad 4", categories: ["Static Ads"], image: "/portfoliopageimages/static4.jpeg", type: "image", content: "" },
  { id: 5, title: "Static Ad 5", categories: ["Static Ads"], image: "/portfoliopageimages/static5.jpeg", type: "image", content: "" },
  { id: 6, title: "Static Ad 6", categories: ["Static Ads"], image: "/portfoliopageimages/static6.jpeg", type: "image", content: "" },
  { id: 7, title: "Static Ad 7", categories: ["Static Ads"], image: "/portfoliopageimages/static7.jpeg", type: "image", content: "" },
  { id: 8, title: "Static Ad 8", categories: ["Static Ads"], image: "/portfoliopageimages/static8.jpeg", type: "image", content: "" },
  { id: 9, title: "Static Ad 9", categories: ["Static Ads"], image: "/portfoliopageimages/static9.jpeg", type: "image", content: "" },
  { id: 10, title: "Static Ad 10", categories: ["Static Ads"], image: "/portfoliopageimages/static10.jpeg", type: "image", content: "" },
  { id: 11, title: "Static Ad 11", categories: ["Static Ads"], image: "/portfoliopageimages/static11.jpeg", type: "image", content: "" },
  { id: 12, title: "Static Ad 12", categories: ["Static Ads"], image: "/portfoliopageimages/static12.jpeg", type: "image", content: "" },
  { id: 13, title: "Static Ad 13", categories: ["Static Ads"], image: "/portfoliopageimages/static13.jpeg", type: "image", content: "" },
  { id: 14, title: "Static Ad 14", categories: ["Static Ads"], image: "/portfoliopageimages/static14.jpeg", type: "image", content: "" },
  { id: 15, title: "Static Ad 15", categories: ["Static Ads"], image: "/portfoliopageimages/static15.jpeg", type: "image", content: "" },
  { id: 16, title: "Static Ad 16", categories: ["Static Ads"], image: "/portfoliopageimages/static16.jpeg", type: "image", content: "" },
  { id: 17, title: "Static Ad 17", categories: ["Static Ads"], image: "/portfoliopageimages/static17.jpeg", type: "image", content: "" },
  { id: 18, title: "Static Ad 18", categories: ["Static Ads"], image: "/portfoliopageimages/static18.jpeg", type: "image", content: "" },
  { id: 19, title: "Static Ad 19", categories: ["Static Ads"], image: "/portfoliopageimages/static19.jpeg", type: "image", content: "" },
  { id: 20, title: "Static Ad 20", categories: ["Static Ads"], image: "/portfoliopageimages/static20.jpeg", type: "image", content: "" },

  { id: 21, title: "VSL 1", categories: ["VSL"], image: "/portfoliopageimages/vsl1.jpeg", type: "pdf", fileUrl: "/pdfs/VSL1.pdf" },
  { id: 22, title: "VSL 2", categories: ["VSL"], image: "/portfoliopageimages/vsl2.jpeg", type: "pdf", fileUrl: "/pdfs/VSL2.pdf" },
  { id: 23, title: "VSL 3", categories: ["VSL"], image: "/portfoliopageimages/vsl3.jpeg", type: "pdf", fileUrl: "/pdfs/VSL3.pdf" },
  { id: 24, title: "VSL 4", categories: ["VSL"], image: "/portfoliopageimages/vsl4.jpeg", type: "pdf", fileUrl: "/pdfs/VSL4.pdf" },
  { id: 25, title: "VSL 5", categories: ["VSL"], image: "/portfoliopageimages/vsl5.jpeg", type: "pdf", fileUrl: "/pdfs/VSL5.pdf" },
  { id: 26, title: "VSL 6", categories: ["VSL"], image: "/portfoliopageimages/vsl6.jpeg", type: "pdf", fileUrl: "/pdfs/VSL6.pdf" },
  { id: 27, title: "VSL 7", categories: ["VSL"], image: "/portfoliopageimages/vsl7.jpeg", type: "pdf", fileUrl: "/pdfs/VSL7.pdf" },
  { id: 28, title: "VSL 8", categories: ["VSL"], image: "/portfoliopageimages/vsl8.jpeg", type: "pdf", fileUrl: "/pdfs/VSL8.pdf" },
  { id: 29, title: "VSL 9", categories: ["VSL"], image: "/portfoliopageimages/vsl9.jpeg", type: "pdf", fileUrl: "/pdfs/VSL9.pdf" },
  { id: 30, title: "VSL 10", categories: ["VSL"], image: "/portfoliopageimages/vsl10.jpeg", type: "pdf", fileUrl: "/pdfs/VSL10.pdf" },

  { id: 31, title: "Video 1", categories: ["Video Ads"], image: "/portfoliopageimages/video1.jpeg", type: "video", content: "video1.mp4" },
  { id: 32, title: "Video 2", categories: ["Video Ads"], image: "/portfoliopageimages/video2.jpeg", type: "video", content: "video2.mp4" },
  { id: 33, title: "Video 3", categories: ["Video Ads"], image: "/portfoliopageimages/video3.jpeg", type: "video", content: "video3.mp4" },
  { id: 34, title: "Video 4", categories: ["Video Ads"], image: "/portfoliopageimages/video4.jpeg", type: "video", content: "video4.mp4" },
  { id: 35, title: "Video 5", categories: ["Video Ads"], image: "/portfoliopageimages/video5.jpeg", type: "video", content: "video5.mp4" },
  { id: 36, title: "Video 6", categories: ["Video Ads"], image: "/portfoliopageimages/video6.jpeg", type: "video", content: "video6.mp4" },
  { id: 37, title: "Video 7", categories: ["Video Ads"], image: "/portfoliopageimages/video7.jpeg", type: "video", content: "video7.mp4" },
  { id: 38, title: "Video 8", categories: ["Video Ads"], image: "/portfoliopageimages/video8.jpeg", type: "video", content: "video8.mp4" },
  { id: 39, title: "Video 9", categories: ["Video Ads"], image: "/portfoliopageimages/video9.jpeg", type: "video", content: "video9.mp4" },
  { id: 40, title: "Video 10", categories: ["Video Ads"], image: "/portfoliopageimages/video10.jpeg", type: "video", content: "video10.mp4" },
  { id: 41, title: "Video 11", categories: ["Video Ads"], image: "/portfoliopageimages/video11.jpeg", type: "video", content: "video11.mp4" },
  { id: 42, title: "Video 12", categories: ["Video Ads"], image: "/portfoliopageimages/video12.jpeg", type: "video", content: "video12.mp4" },
  { id: 43, title: "Video 13", categories: ["Video Ads"], image: "/portfoliopageimages/video13.jpeg", type: "video", content: "video13.mp4" },

  { id: 44, title: "GOOGLE ADS", categories: ["Google Ads"], image: "/portfoliopageimages/googleads.jpeg", type: "pdf", fileUrl: "/pdfs/Google_Ads.pdf" },
  { id: 45, title: "YOUTUBE ADS", categories: ["YouTube Ads"], image: "/portfoliopageimages/youtubeads.jpeg", type: "pdf", fileUrl: "/pdfs/YouTube_Ads.pdf" },
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