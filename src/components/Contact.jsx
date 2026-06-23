import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

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
            ref={rightRef}
            className={`contact-right fade-up fade-up-delay-2${rightVisible ? ' visible' : ''}`}
          >
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>
                sahoosumit7001@gmail.com<br />
                +91 7001340696<br />
                West Bengal, India
              </p>
            </div>

            <h3>Languages</h3>
            <div className="contact-info">
              <p>English · Hindi · Bengali</p>
            </div>

            <h3>Find Me Online</h3>
            <div className="contact-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:sahoosumit7001@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
