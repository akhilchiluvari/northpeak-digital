export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="wordmark">
              NorthPeak
              <span className="degree" aria-hidden="true">
                °
              </span>
            </p>
            <p>
              A small web studio for brands with steep ambitions. Shopify stores and
              marketing sites — fast by default, honest by design.
            </p>
          </div>
          <nav className="footer-col" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#results">Results</a>
              </li>
              <li>
                <a href="#pricing">Plans</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:hello@northpeak.digital">hello@northpeak.digital</a>
              </li>
              <li>Remote — US, UK & EU time zones</li>
              <li>Replies within one working day</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 NorthPeak Digital — a fictional studio, hand-built as a hiring exercise.</p>
          <p className="footer-credit">
            <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer">
              Built for Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
