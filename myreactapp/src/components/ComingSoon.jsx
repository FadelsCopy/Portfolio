import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="cs-wrapper">
      
      {/* Background glow layers */}
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className={`cs-content ${loaded ? "show" : ""}`}>
        
        <div className="badge">UNDER CONSTRUCTION</div>

        <h1>
          Something <span>Exceptional</span> is Coming
        </h1>

        <p>
          We’re crafting a high-performance digital experience.
          Clean design. Strong identity. Built to convert.
        </p>

        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="footer-note">
          Launching soon — stay tuned.
        </div>
      </div>

      <style>{`
        .cs-wrapper {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #05060a;
          overflow: hidden;
          position: relative;
          color: white;
          font-family: Inter, system-ui, sans-serif;
        }

        /* Ambient glow background */
        .glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          animation: float 8s ease-in-out infinite;
        }

        .glow-1 {
          background: #4f46e5;
          top: -200px;
          left: -200px;
        }

        .glow-2 {
          background: #06b6d4;
          bottom: -200px;
          right: -200px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        /* Content */
        .cs-content {
          text-align: center;
          max-width: 700px;
          padding: 40px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }

        .cs-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 20px;
        }

        h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        h1 span {
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Loader dots */
        .loader {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 30px;
        }

        .loader span {
          width: 8px;
          height: 8px;
          background: #6366f1;
          border-radius: 50%;
          animation: bounce 1.2s infinite ease-in-out;
        }

        .loader span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loader span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-10px); opacity: 1; }
        }

        .footer-note {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 600px) {
          h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </div>
  );
}