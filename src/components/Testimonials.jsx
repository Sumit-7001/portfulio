import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Programming Languages',
    items: ['Python', 'C', 'JavaScript'],
    color: 'teal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-3 8h10l-3-8c1-1 2-2 2-4a4 4 0 0 0-4-4z" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
      </svg>
    ),
    title: 'AI / Machine Learning',
    items: ['Generative AI', 'LangChain', 'LLM Applications', 'Prompt Engineering'],
    color: 'orange',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: 'Web & Databases',
    items: ['React.js', 'Node.js', 'MongoDB', 'MySQL'],
    color: 'yellow',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    color: 'teal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems'],
    color: 'orange',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Professional Skills',
    items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration'],
    color: 'yellow',
  },
];

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div
          ref={headerRef}
          className={`testimonials-header fade-up${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-label">About Me</span>
          <h2>Skills &amp; Expertise</h2>
          <p>
            A deep dive into the technologies, tools, and skills I work with daily.
          </p>
        </div>

        <div
          className="testimonials-carousel"
          style={{ overflow: 'visible', padding: '20px 0 40px' }}
        >
          <div
            className="testimonial-slide"
            style={{ minWidth: 'unset' }}
          >
            {highlights.map((h, i) => (
              <SkillCard key={h.title} skill={h} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  const colorMap = {
    teal: '#2B7A78',
    orange: '#E8572A',
    yellow: '#F5A623',
  };

  return (
    <div
      ref={ref}
      className={`testimonial-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        className="testimonial-avatar"
        style={{
          background: colorMap[skill.color],
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ width: 24, height: 24, display: 'flex' }}>{skill.icon}</span>
      </div>
      <p className="testimonial-name" style={{ marginBottom: 12 }}>{skill.title}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {skill.items.map((item) => (
          <span
            key={item}
            style={{
              fontSize: 13,
              padding: '5px 14px',
              background: 'var(--color-bg-alt)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-light)',
              fontWeight: 500,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
