import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroPortrait from '../assets/hero-portrait.png';

export default function Hero() {
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.1 });
  const [centerRef, centerVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left Column */}
          <div
            ref={leftRef}
            className={`hero-left fade-up${leftVisible ? ' visible' : ''}`}
          >
            <h1 className="hero-heading">
              <span>Hi, I'm Sumit</span>
              <span>GenAI &amp;</span>
              <span>Web Developer</span>
            </h1>
            <p className="hero-email">
              Get in touch → <a href="mailto:sahoosumit7001@gmail.com">sahoosumit7001@gmail.com</a>
            </p>
            <div className="hero-badge">
              <span className="hero-badge-number">9.72</span>
              <span className="hero-badge-text">CGPA<br />B.Tech CSE</span>
            </div>
          </div>

          {/* Center Column - Portrait */}
          <div
            ref={centerRef}
            className={`hero-center fade-up fade-up-delay-1${centerVisible ? ' visible' : ''}`}
          >
            <div className="hero-image-wrapper">
              <div className="hero-blob">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2B7A78" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#E8572A" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#blobGrad)"
                    d="M440,320Q430,390,370,430Q310,470,240,460Q170,450,110,410Q50,370,40,290Q30,210,80,150Q130,90,200,60Q270,30,340,70Q410,110,430,180Q450,250,440,320Z"
                  />
                </svg>
              </div>
              <img
                src={heroPortrait}
                alt="Sumit Kumar Sahoo - GenAI & Web Developer"
                className="hero-portrait"
                width="420"
                height="520"
              />
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef}
            className={`hero-right fade-up fade-up-delay-2${rightVisible ? ' visible' : ''}`}
          >
            <p className="hero-description">
              Computer Science student passionate about Generative AI,
              Machine Learning &amp; Web Development — building intelligent
              systems with LLMs, LangChain &amp; modern AI tools.
            </p>
            <div className="hero-cert-badge">
              B.Tech<br />CSE<br />2028
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
