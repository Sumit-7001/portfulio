export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">Sumit.</span>
          <span className="footer-copy">&copy; {year} Sumit Kumar Sahoo. All rights reserved.</span>
          <span className="footer-credit">
            Built with <span style={{ color: '#E8572A' }}>♥</span> using{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
