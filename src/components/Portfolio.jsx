import { useScrollAnimation } from '../hooks/useScrollAnimation';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import projectMarkethub from '../assets/project-markethub.png';
import projectMarkethubAdmin from '../assets/project-markethub-admin.png';
import projectPortfolioLive from '../assets/project-portfolio-live.png';
import projectLoginSystem from '../assets/project-login-system.png';

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
    img: projectMarkethub,
    title: 'MarketHub — E-Commerce Store',
    category: 'React.js · HTML · CSS · JavaScript',
    desc: 'Full-featured online shopping platform (MarketHub) featuring product categories, search, shopping cart, and a responsive interface.',
    link: 'https://e-shop-project-six.vercel.app/',
  },
  {
    img: projectMarkethubAdmin,
    title: 'MarketHub — Admin Dashboard',
    category: 'React.js · HTML · CSS · Dashboard Analytics',
    desc: 'Store analytics dashboard displaying revenue, orders, customer registrations, conversion rates, and stock alerts.',
    link: 'https://e-shop-project-six.vercel.app/admin',
  },
  {
    img: projectPortfolioLive,
    title: 'Portfolio Website',
    category: 'React.js · Vite · CSS',
    desc: 'Modern, responsive developer portfolio (this website) featuring custom scroll-driven journey animations and premium glassmorphic UI elements.',
    link: 'https://portfulio-beryl.vercel.app/',
  },
  {
    img: projectLoginSystem,
    title: 'Secure Login & Authentication Portal',
    category: 'React.js · CSS · MPIN Security · Vercel',
    desc: 'Secure multi-tab user login, signup, and admin login portal requiring email verification and a secure 4-digit MPIN authorization.',
    link: 'https://frontend-phi-rosy-97.vercel.app/login',
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

  const cardContent = (
    <>
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
        <p className="portfolio-card-desc">{project.desc}</p>
        {project.link && (
          <span className="portfolio-card-link-btn">
            Live Demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, marginLeft: 4 }}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        ref={ref}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`portfolio-card fade-up${visible ? ' visible' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s`, display: 'block' }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className={`portfolio-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {cardContent}
    </div>
  );
}
