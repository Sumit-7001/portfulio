import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    iconPath: '/images/skill_programming.png',
    color: '#8b5cf6',
    title: 'Programming Languages',
    items: ['Python', 'C', 'JavaScript'],
  },
  {
    iconPath: '/images/skill_ai.png',
    color: '#06b6d4',
    title: 'AI / Machine Learning',
    items: ['Generative AI', 'LangChain', 'LLM Applications', 'Prompt Engineering', 'Embeddings'],
  },
  {
    iconPath: '/images/skill_web.png',
    color: '#ec4899',
    title: 'Web & Databases',
    items: ['React.js', 'Node.js', 'HTML/CSS', 'MongoDB', 'MySQL'],
  },
  {
    iconPath: '/images/skill_tools.png',
    color: '#f97316',
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
  {
    iconPath: '/images/skill_fundamentals.png',
    color: '#10b981',
    title: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems'],
  },
  {
    iconPath: '/images/skill_professional.png',
    color: '#3b82f6',
    title: 'Professional Skills',
    items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication'],
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
            A deep dive into the technologies, tools, and skills I work with to build
            intelligent systems and modern web applications.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-slide">
            {skillCategories.map((cat, i) => (
              <SkillCard key={cat.title} skill={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIconAndColor(item) {
  switch (item) {
    case 'Python':
      return {
        color: '#3776AB',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5A3.5 3.5 0 0 0 6 8.5V11M7 19h7.5a3.5 3.5 0 0 0 3.5-3.5V13"/></svg>
        )
      };
    case 'C':
      return {
        color: '#A8B9CC',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A8B9CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9a3 3 0 1 0 0 6"/></svg>
        )
      };
    case 'JavaScript':
      return {
        color: '#F7DF1E',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24"><rect width="22" height="22" x="1" y="1" rx="4" fill="#F7DF1E"/><text x="4.5" y="16.5" fill="#000000" fontSize="13" fontFamily="-apple-system, sans-serif" fontWeight="900">JS</text></svg>
        )
      };
    case 'React.js':
      return {
        color: '#61DAFB',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="1.5" fill="#61DAFB"/></svg>
        )
      };
    case 'Node.js':
      return {
        color: '#339933',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        )
      };
    case 'HTML/CSS':
      return {
        color: '#E34F26',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        )
      };
    case 'MongoDB':
      return {
        color: '#47A248',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#47A248" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-4 3-6 7-6 10 0 3 2.5 5 6 10 3.5-5 6-7 6-10 0-3-2-7-6-10z"/></svg>
        )
      };
    case 'MySQL':
      return {
        color: '#00758F',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/></svg>
        )
      };
    case 'Git':
      return {
        color: '#F05032',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15V9a4 4 0 0 0-4-4H9M6 9v6"/></svg>
        )
      };
    case 'GitHub':
      return {
        color: '#E2E8F0',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        )
      };
    case 'VS Code':
      return {
        color: '#007ACC',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#007ACC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM9 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/></svg>
        )
      };
    case 'Jupyter Notebook':
      return {
        color: '#F37626',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F37626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
        )
      };
    case 'Generative AI':
      return {
        color: '#8B5CF6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        )
      };
    case 'LangChain':
      return {
        color: '#10B981',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        )
      };
    case 'LLM Applications':
      return {
        color: '#3B82F6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )
      };
    case 'Prompt Engineering':
      return {
        color: '#F59E0B',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
        )
      };
    case 'Embeddings':
      return {
        color: '#EC4899',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        )
      };
    case 'Data Structures & Algorithms':
      return {
        color: '#8B5CF6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v8M6 16l6-4 6 4"/></svg>
        )
      };
    case 'OOP':
      return {
        color: '#10B981',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        )
      };
    case 'Operating Systems':
      return {
        color: '#3B82F6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        )
      };
    case 'Problem Solving':
      return {
        color: '#F59E0B',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707.707m2.808 13.066a6 6 0 1 1 5.642 0M9.663 17a3 3 0 0 0 4.673 0"/></svg>
        )
      };
    case 'Analytical Thinking':
      return {
        color: '#3B82F6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        )
      };
    case 'Team Collaboration':
      return {
        color: '#10B981',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        )
      };
    case 'Communication':
      return {
        color: '#8B5CF6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )
      };
    default:
      return {
        color: '#8B5CF6',
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/></svg>
        )
      };
  }
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`testimonial-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        className="testimonial-avatar"
        style={{ background: 'transparent' }}
      >
        <img
          src={skill.iconPath}
          alt={skill.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <p className="testimonial-name" style={{ marginBottom: 12, color: skill.color }}>{skill.title}</p>
      <div className="testimonial-tags">
        {skill.items.map((item) => {
          const info = getSkillIconAndColor(item);
          return (
            <span
              key={item}
              className="skill-tag"
              style={{
                '--hover-bg': `${info.color}25`,
                '--hover-border': `${info.color}55`,
                '--hover-color': info.color,
                color: info.color,
                fontWeight: '600',
                background: `${info.color}0f`,
                borderColor: `${info.color}25`,
              }}
            >
              {info.icon}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
