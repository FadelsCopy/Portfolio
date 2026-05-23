// src/components/ProjectModal.jsx
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  // If the data is empty, close immediately
  if (!project) return null;

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        
        <div className="modal-body">
          {project.type === 'video' ? (
            <video 
              controls autoPlay playsInline 
              src={`/videos/${project.content}`} 
              className="modal-media"
              onError={() => { 
                alert("This video is currently unavailable. Please try again later."); 
                onClose(); 
              }}
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-media"
              onError={() => { 
                alert("This image failed to load."); 
                onClose(); 
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}