import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a
          className="header-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Sumit.
        </a>

        <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Journey</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Projects</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>About</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>

        <div className="header-right">
          <span className="header-phone">+91 7001340696</span>
          <a href="mailto:sahoosumit7001@gmail.com" className="header-call-btn" aria-label="Email me">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <button
            className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
