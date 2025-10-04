// // import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";
import Categories from "./components/Categories";
import CompetitionOverview from "./components/CompetitionOverview";
import MovementStandards from "./components/MovementStandards";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App">
      {/* Hero Section with Parallax Background */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="container">
          <header className="header">
            <div className="logo-container">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="logo-image"
              />
            </div>
          </header>

          <div className="hero-content">
            <h1 className="hero-title">
              CrossFit Black Edition
              <span className="title-accent">Games 2025</span>
            </h1>

            <p className="hero-subtitle">November 1st, 2025</p>

            <p className="hero-description">
              Join us for the ultimate CrossFit competition experience. Whether
              you're a beginner or elite athlete, there's a place for you in our
              community-driven event.
            </p>

            <div className="cta-buttons">
              <a
                href="https://crossfitblackedition.pt"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon">🌐</span>
                Visit Main Website
              </a>
              {/* <a
                href="https://crossfitblackedition.pt/registration"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon">🏋️‍♂️</span>
                Register Now
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <CompetitionOverview />

      {/* Categories */}
      <Categories />

      {/* Movement Standards */}
      <MovementStandards />

      {/* Registration */}
      <Registration />

      {/* Sponsors */}
      <Sponsors />

      {/* Membership Plans Section */}
      {/* <section className="plans-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Join Our Community</h2>
            <p className="section-subtitle">
              Become a member and train with us year-round
            </p>
          </div>

          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-icon">💪</div>
              <h3 className="plan-title">Membership Plans</h3>
              <p className="plan-description">
                Flexible membership options for every fitness level
              </p>
              <ul className="plan-features">
                <li>Unlimited classes</li>
                <li>Personal training</li>
                <li>Nutrition guidance</li>
                <li>Community events</li>
              </ul>
              <a
                href="https://crossfitblackedition.pt/planos/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon">📋</span>
                View Plans
              </a>
            </div>

            <div className="plan-card">
              <div className="plan-icon">🏆</div>
              <h3 className="plan-title">Competition Training</h3>
              <p className="plan-description">
                Specialized training for competitive athletes
              </p>
              <ul className="plan-features">
                <li>RX+ training programs</li>
                <li>Competition preparation</li>
                <li>Advanced coaching</li>
                <li>Performance analysis</li>
              </ul>
              <a
                href="https://crossfitblackedition.pt/planos/"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon">🎯</span>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact & Social Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Get Connected</h2>
              <p className="contact-description">
                Follow us for updates, training tips, and community highlights
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://crossfitblackedition.pt"
                className="social-link primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">🌐</div>
                <div className="social-content">
                  <span className="social-name">Website</span>
                  <span className="social-handle">crossfitblackedition.pt</span>
                </div>
              </a>

              <a
                href="https://crossfitblackedition.pt/planos/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">🏋️‍♂️</div>
                <div className="social-content">
                  <span className="social-name">Membership/Planos</span>
                  <span className="social-handle">View Plans</span>
                </div>
              </a>

              <a
                href="https://facebook.com/crossfitblackedition"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">📘</div>
                <div className="social-content">
                  <span className="social-name">Facebook</span>
                  <span className="social-handle">@crossfitblackedition</span>
                </div>
              </a>

              <a
                href="https://instagram.com/crossfitblackedition"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">📷</div>
                <div className="social-content">
                  <span className="social-name">Instagram</span>
                  <span className="social-handle">@crossfitblackedition</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="footer-logo"
              />
              <div className="footer-text">
                <h3>CrossFit Black Edition</h3>
                <p>GAMES 2025</p>
              </div>
            </div>

            <div className="footer-info">
              <p>© 2025 CrossFit Black Edition Games. All rights reserved.</p>
              <p className="footer-credit">
                (Blame Bernardo Caetano, athlete of this awesome box)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
