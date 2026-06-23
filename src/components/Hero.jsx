import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroPortrait from '../assets/hero-portrait.png';

export default function Hero() {
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="hero" id="hero">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container">
        <div className="hero-inner">
          {/* Left Column — Text */}
          <div
            ref={leftRef}
            className={`hero-left fade-up${leftVisible ? ' visible' : ''}`}
          >
            <div className="hero-status">
              <span className="hero-status-dot" />
              Open to Internships & Collaborations
            </div>

            <h1 className="hero-heading">
              <span>Hi, I'm Sumit</span>
              <span className="gradient-text">GenAI &amp; Web</span>
              <span>Developer</span>
            </h1>

            <p className="hero-subtitle">
              Computer Science student passionate about building intelligent
              systems with LLMs, LangChain &amp; modern web technologies.
              Turning ideas into impactful digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get in Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#portfolio" className="btn-secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Projects
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">9.72</div>
                <div className="hero-stat-label">CGPA</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">5+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Tech Domains</div>
              </div>
            </div>
          </div>

          {/* Right Column — Portrait */}
          <div
            ref={rightRef}
            className={`hero-right fade-up fade-up-delay-2${rightVisible ? ' visible' : ''}`}
          >
            <div className="hero-portrait-card">
              <div className="hero-portrait-inner">
                <img
                  src={heroPortrait}
                  alt="Sumit Kumar Sahoo"
                  className="hero-portrait"
                  width="380"
                  height="507"
                />
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="hero-floating-badge hero-badge-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              React.js
            </div>
            <div className="hero-floating-badge hero-badge-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-3 8h10l-3-8c1-1 2-2 2-4a4 4 0 0 0-4-4z" />
              </svg>
              LangChain
            </div>
            <div className="hero-floating-badge hero-badge-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              Python
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
