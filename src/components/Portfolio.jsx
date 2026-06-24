import { useScrollAnimation } from '../hooks/useScrollAnimation';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';

const projects = [
  {
    img: project3,
    title: 'AI Resume Analyzer',
    category: 'React.js · Node.js · Python · OpenAI API',
    desc: 'AI-based resume analyzer providing feedback on skills, ATS score & improvement suggestions.',
  },
  {
    img: project1,
    title: 'AI Chatbot — LangChain',
    category: 'Python · LangChain · LLM · Embeddings',
    desc: 'Chatbot powered by LLMs with semantic search using embeddings.',
  },
  {
    img: project4,
    title: 'E-Commerce Grocery Website',
    category: 'React.js · HTML · CSS · JavaScript',
    desc: 'Full-featured grocery e-commerce platform with responsive design.',
  },
  {
    img: project5,
    title: 'LLM Prompt Engineering',
    category: 'Python · OpenAI · Prompt Design',
    desc: 'Exploring advanced prompt techniques to build efficient AI applications.',
  },
  {
    img: project2,
    title: 'Portfolio Website',
    category: 'React.js · Vite · CSS',
    desc: 'Modern, responsive developer portfolio with smooth animations.',
  },
  {
    img: project6,
    title: 'DSA Problem Solving',
    category: 'Python · C · Algorithms',
    desc: 'Solving complex data structures & algorithms problems on coding platforms.',
  },
];

export default function Portfolio() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div
          ref={headerRef}
          className={`portfolio-header fade-up${headerVisible ? ' visible' : ''}`}
        >
          <div className="portfolio-header-left">
            <span className="section-label">My Work</span>
            <h2>Projects &amp; Builds</h2>
            <p>A showcase of AI, ML &amp; web development projects</p>
          </div>
          <a
            href="https://github.com/Sumit-7001"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-explore"
          >
            View on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <PortfolioCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`portfolio-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        width="400"
        height="300"
      />
      <div className="portfolio-card-overlay">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
      </div>
    </div>
  );
}
