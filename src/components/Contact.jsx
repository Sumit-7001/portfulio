import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import contactIllustration from '../assets/contact-illustration-transparent.png';

export default function Contact() {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [middleRef, middleVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const [toast, setToast] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(`${label} copied!`);
      setTimeout(() => setToast(''), 2500);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div
            ref={leftRef}
            className={`contact-left fade-up${leftVisible ? ' visible' : ''}`}
          >
            <span className="section-label">Get in Touch</span>
            <h2>
              Let's build<br />
              something<br />
              amazing together.
            </h2>
            <p className="contact-cta">
              Open to internships &amp; collaborations!{' '}
              <a href="mailto:sahoosumit7001@gmail.com">Let's talk →</a>
            </p>
          </div>

          <div
            ref={middleRef}
            className={`contact-middle fade-up fade-up-delay-1${middleVisible ? ' visible' : ''}`}
          >
            <img
              src={contactIllustration}
              alt="Sumit Kumar Sahoo 3D Avatar"
              className="contact-illustration"
            />
          </div>

          <div
            ref={rightRef}
            className={`contact-right fade-up fade-up-delay-2${rightVisible ? ' visible' : ''}`}
          >
            <h3>Contact Info</h3>
            <div className="contact-info-list">
              <div
                className="contact-item"
                onClick={() => copyToClipboard('sahoosumit7001@gmail.com', 'Email')}
                title="Click to copy"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>sahoosumit7001@gmail.com</span>
              </div>
              <div
                className="contact-item"
                onClick={() => copyToClipboard('+917001340696', 'Phone')}
                title="Click to copy"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91 7001340696</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>West Bengal, India</span>
              </div>
            </div>

            <h3>Languages</h3>
            <div className="contact-info-list">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>English · Hindi · Bengali</span>
              </div>
            </div>

            <h3>Find Me Online</h3>
            <div className="contact-links">
              <a href="https://github.com/Sumit-7001" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sumit-sahoo-207516326/" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="mailto:sahoosumit7001@gmail.com" className="contact-link-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Toast Notification */}
      <div className={`copy-toast${toast ? ' show' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {toast}
      </div>
    </section>
  );
}
