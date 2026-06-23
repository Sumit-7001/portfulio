import { useScrollAnimation } from '../hooks/useScrollAnimation';

const timeline = [
  {
    company: 'Brainware University',
    date: '2024 — 2028 (Expected)',
    role: 'B.Tech in Computer Science & Engineering',
    desc: 'Currently pursuing B.Tech CSE with a CGPA of 9.72/10. Focusing on AI/ML, Data Structures & Algorithms, and Web Development.',
  },
  {
    company: 'AI Resume Analyzer',
    date: 'Apr 2025 — Mar 2026',
    role: 'Full-Stack AI Project',
    desc: 'Developed an AI-based resume analyzer providing feedback on skills, ATS score, and improvement suggestions. Used React.js, Node.js, Python, and OpenAI API.',
  },
  {
    company: 'AI Chatbot — LangChain',
    date: '2025',
    role: 'AI/ML Project',
    desc: 'Built a chatbot using Python and LangChain with integrated LLM models for answering user queries. Implemented embeddings for semantic search.',
  },
  {
    company: 'E-Commerce Grocery Website',
    date: 'Nov 2024 — Jan 2025',
    role: 'Web Development Project',
    desc: 'Created a full-featured e-commerce grocery platform using React.js, HTML, CSS, and JavaScript with responsive design and dynamic product management.',
  },
];

export default function Experience() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`experience-header fade-up${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-label">My Journey</span>
          <h2>Education &amp; Experience</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`timeline-item fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-left">
        <p className="timeline-company">{item.company}</p>
        <p className="timeline-date">{item.date}</p>
      </div>
      <div className="timeline-dot-wrapper">
        <div className="timeline-dot"></div>
      </div>
      <div className="timeline-right">
        <p className="timeline-role">{item.role}</p>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}
