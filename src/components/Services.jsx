import { useScrollAnimation } from '../hooks/useScrollAnimation';

const technicalSkills = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-3 8h10l-3-8c1-1 2-2 2-4a4 4 0 0 0-4-4z" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
      </svg>
    ),
    color: 'teal',
    title: 'Generative AI & ML',
    desc: 'LLMs, LangChain, Prompt Engineering, Embeddings',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: 'orange',
    title: 'Web Development',
    desc: 'React.js, Node.js, HTML, CSS, JavaScript',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    color: 'yellow',
    title: 'Programming & DSA',
    desc: 'Python, C, JavaScript, Data Structures & Algorithms',
  },
];

const tools = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'LangChain', level: 85 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git/GitHub', level: 80 },
];

export default function Services() {
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-inner">
          {/* Skill Cards */}
          <div
            ref={cardsRef}
            className={`services-cards fade-up${cardsVisible ? ' visible' : ''}`}
          >
            {technicalSkills.map((s, i) => (
              <div
                key={s.title}
                className="service-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`service-icon ${s.color}`}>{s.icon}</div>
                <div className="service-info">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`services-content fade-up fade-up-delay-2${contentVisible ? ' visible' : ''}`}
          >
            <span className="section-label">What I Do</span>
            <h2>Building Intelligent Systems &amp; Modern Web Apps</h2>
            <p>
              I specialize in combining the power of Generative AI with modern
              web technologies. From AI chatbots using LangChain to full-stack
              web applications — I build solutions that are both smart and beautiful.
            </p>
            <p>
              My skill set spans Python, JavaScript, React.js, Node.js, databases
              like MongoDB &amp; MySQL, and cutting-edge AI tools including LLMs,
              embeddings, and prompt engineering.
            </p>

            <div className="services-stats">
              <div className="stat-item">
                <h4>5+</h4>
                <p>Projects Built</p>
              </div>
              <div className="stat-item">
                <h4>9.72</h4>
                <p>CGPA Score</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Tech Domains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
