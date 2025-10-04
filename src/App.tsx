import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>CROSSFIT</h1>
            <div className="logo-subtitle">
              <span>BLACK EDITION</span>
              <span>GAMES 2025</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h2 className="hero-title">CrossFit Black Edition Games 2025</h2>
              <p className="hero-subtitle">November 1st, 2025</p>
              <p className="hero-description">
                Join us for the ultimate CrossFit competition experience. 
                Whether you're a beginner or elite athlete, there's a place for you 
                in our community-driven event.
              </p>
              
              <div className="cta-buttons">
                <a 
                  href="https://crossfitblackedition.pt" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Main Website
                </a>
                <a 
                  href="https://crossfitblackedition.pt/registration" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-card">
                <h3>Event Details</h3>
                <ul>
                  <li><strong>Date:</strong> November 1st, 2025</li>
                  <li><strong>Time:</strong> 06:45 - 18:00</li>
                  <li><strong>Location:</strong> CrossFit Black Edition</li>
                  <li><strong>Format:</strong> 3 WODs + Final</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Categories</h3>
                <ul>
                  <li>RX+ (Professional)</li>
                  <li>RX (Competitive)</li>
                  <li>Performance (Intermediate)</li>
                  <li>Rookie (Beginner)</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Team Formation</h3>
                <ul>
                  <li>3 athletes per team</li>
                  <li>Men's, Women's & Mixed</li>
                  <li>€17 + T-Shirt</li>
                  <li>Early bird until Oct 20th</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="social-section">
          <div className="container">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a 
                href="https://crossfitblackedition.pt" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Website
              </a>
              <a 
                href="#" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Facebook
              </a>
              <a 
                href="#" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>CROSSFIT BLACK EDITION</h3>
              <p>GAMES 2025</p>
            </div>
            <div className="footer-info">
              <p>© 2025 CrossFit Black Edition Games. All rights reserved.</p>
              <p>Hosted on <strong>crossfitblackedition.games</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
