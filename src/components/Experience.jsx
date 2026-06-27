import { useEffect, useRef, useState } from 'react';

const timeline = [
  {
    company: 'Brainware University',
    date: '2024 — 2028 (Expected)',
    role: 'B.Tech in Computer Science & Engineering',
    desc: 'Currently pursuing B.Tech CSE with a CGPA of 9.72/10. Focusing on AI/ML, Data Structures & Algorithms, and Web Development.',
    badge: 'education',
    img: '/images/milestone_education.png'
  },
  {
    company: 'AI Resume Analyzer',
    date: 'Apr 2025 — Mar 2026',
    role: 'Full-Stack AI Project',
    desc: 'Developed an AI-based resume analyzer providing feedback on skills, ATS score, and improvement suggestions. Used React.js, Node.js, Python, and OpenAI API.',
    badge: 'project',
    img: '/images/milestone_resume.png'
  },
  {
    company: 'AI Chatbot — LangChain',
    date: '2025',
    role: 'AI/ML Project',
    desc: 'Built a chatbot using Python and LangChain with integrated LLM models for answering user queries. Implemented embeddings for semantic search.',
    badge: 'project',
    img: '/images/milestone_chatbot.png'
  },
  {
    company: 'E-Commerce Grocery Website',
    date: 'Nov 2024 — Jan 2025',
    role: 'Web Development Project',
    desc: 'Created a full-featured e-commerce grocery platform using React.js, HTML, CSS, and JavaScript with responsive design and dynamic product management.',
    badge: 'project',
    img: '/images/milestone_grocery.png'
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(-1);
  const [particles, setParticles] = useState([]);

  // Generate particles on mount
  useEffect(() => {
    const dots = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5
    }));
    setParticles(dots);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress through the sticky track
      let p = (scrollTop - sectionTop) / (sectionHeight - viewportHeight);
      p = Math.max(0, Math.min(1, p));
      targetProgress = p;
    };

    const updateAnimation = () => {
      // Lerp for butter-smooth animation
      currentProgress += (targetProgress - currentProgress) * 0.1;
      if (Math.abs(currentProgress - targetProgress) < 0.0001) {
        currentProgress = targetProgress;
      }

      setScrollProgress(currentProgress);

      // Determine active milestone based on progress range
      // Milestones are centered at:
      // M0 (Brainware): 0.18
      // M1 (Resume Analyzer): 0.43
      // M2 (Chatbot): 0.68
      // M3 (Grocery): 0.93
      let activeIdx = -1;
      if (currentProgress >= 0.10 && currentProgress <= 0.26) activeIdx = 0;
      else if (currentProgress >= 0.35 && currentProgress <= 0.51) activeIdx = 1;
      else if (currentProgress >= 0.60 && currentProgress <= 0.76) activeIdx = 2;
      else if (currentProgress >= 0.85 && currentProgress <= 0.99) activeIdx = 3;
      
      setActiveMilestone(activeIdx);
      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Map progress to car X position (5% to 88%) with smooth plateaus
  const getCarX = (p) => {
    // Milestones positions along road width:
    // M0: 15%, M1: 38%, M2: 61%, M3: 84%
    if (p < 0.10) {
      // 0.00 to 0.10 -> drives 5% to 15%
      return 5 + (p / 0.10) * 10;
    } else if (p < 0.26) {
      // 0.10 to 0.26 -> stays at 15%
      return 15;
    } else if (p < 0.35) {
      // 0.26 to 0.35 -> drives 15% to 38%
      const localP = (p - 0.26) / 0.09;
      // Smoothstep easing for driving transition
      const ease = localP * localP * (3 - 2 * localP);
      return 15 + ease * 23;
    } else if (p < 0.51) {
      // 0.35 to 0.51 -> stays at 38%
      return 38;
    } else if (p < 0.60) {
      // 0.51 to 0.60 -> drives 38% to 61%
      const localP = (p - 0.51) / 0.09;
      const ease = localP * localP * (3 - 2 * localP);
      return 38 + ease * 23;
    } else if (p < 0.76) {
      // 0.60 to 0.76 -> stays at 61%
      return 61;
    } else if (p < 0.85) {
      // 0.76 to 0.85 -> drives 61% to 84%
      const localP = (p - 0.76) / 0.09;
      const ease = localP * localP * (3 - 2 * localP);
      return 61 + ease * 23;
    } else if (p < 0.95) {
      // 0.85 to 0.95 -> stays at 84%
      return 84;
    } else {
      // 0.95 to 1.00 -> drives 84% to 88% (to the finish)
      const localP = (p - 0.95) / 0.05;
      const ease = localP * localP * (3 - 2 * localP);
      return 84 + ease * 4;
    }
  };

  const carX = getCarX(scrollProgress);

  return (
    <section ref={containerRef} className="journey-section" id="experience">
      <div className="journey-sticky">
        {/* Particle background */}
        <div className="journey-particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="journey-dot"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <div className="journey-header">
          <span className="section-label">MY JOURNEY</span>
          <h2>Education &amp; Experience</h2>
        </div>

        {/* The Horizontal Stage */}
        <div className="journey-stage">
          
          {/* Timeline Cards Container */}
          <div className="journey-cards-container">
            {timeline.map((item, idx) => {
              // Determine card state
              // active: highlighted
              // passed: car has already passed it, reduced opacity
              // upcoming: car hasn't reached it yet, invisible
              let cardState = 'upcoming';
              if (activeMilestone === idx) {
                cardState = 'active';
              } else if (idx === 0 && scrollProgress > 0.26) {
                cardState = 'passed';
              } else if (idx === 1 && scrollProgress > 0.51) {
                cardState = 'passed';
              } else if (idx === 2 && scrollProgress > 0.76) {
                cardState = 'passed';
              } else if (idx === 3 && scrollProgress > 0.99) {
                cardState = 'passed';
              }

              // Card Layout (alternates top / bottom of the road)
              const positionClass = idx % 2 === 0 ? 'above' : 'below';

              // Milestone coordinates matches carX coordinates:
              // M0: 15%, M1: 38%, M2: 61%, M3: 84%
              const milestoneLefts = [15, 38, 61, 84];
              const extraClass = idx === 0 ? 'first-card' : idx === 3 ? 'last-card' : '';

              return (
                <div
                  key={item.company}
                  className={`journey-card ${positionClass} ${cardState} ${extraClass}`}
                  style={{
                    left: `${milestoneLefts[idx]}%`,
                  }}
                >
                  <div className="journey-card-inner">
                    <div className="journey-card-header-group">
                      <h3 className="journey-card-role">{item.role}</h3>
                      <p className="journey-card-company">{item.company}</p>
                      <div className="journey-card-meta-row">
                        <span className={`timeline-badge ${item.badge}`}>
                          {item.badge === 'education' ? (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                            </svg>
                          ) : (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="16 18 22 12 16 6" />
                              <polyline points="8 6 2 12 8 18" />
                            </svg>
                          )}
                          {item.badge}
                        </span>
                        <span className="journey-card-date">{item.date}</span>
                      </div>
                    </div>
                    <p className="journey-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Road Area Container */}
          <div className="journey-road-container">
            {/* Solid modern asphalt road */}
            <div className="journey-road">
              {/* Center dashed lines */}
              <div className="journey-road-center-line"></div>
            </div>

            {/* Centered interactive content */}
            <div className="journey-road-content">
              {/* Milestone markers along the road */}
              {[15, 38, 61, 84].map((leftVal, idx) => {
                const isReached = carX >= leftVal;
                return (
                  <div
                    key={idx}
                    className={`journey-milestone ${isReached ? 'reached' : ''} ${activeMilestone === idx ? 'active' : ''}`}
                    style={{ left: `${leftVal}%` }}
                  >
                    <img
                      src="/images/milestone_marker.png"
                      alt="Milestone marker"
                      className="journey-milestone-icon"
                    />
                    <div className="journey-milestone-pulse"></div>
                  </div>
                );
              })}

              {/* Traffic Light at the end of the road */}
              <div className="journey-traffic-light">
                <img
                  src="/images/traffic_light.png"
                  alt="Traffic light"
                  className="journey-traffic-light-img"
                />
              </div>

              <div
                className="journey-car-wrapper"
                style={{
                  left: `${carX}%`,
                }}
              >
                <div className="journey-car-container">
                  {/* 3D cartoon car image supplied by user */}
                  <img
                    src="/images/user_car.png"
                    alt="Modern electric car"
                    className="journey-car-img"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
