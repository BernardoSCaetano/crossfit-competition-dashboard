// // import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthBar from "./components/AuthBar";
import Categories from "./components/Categories";
import CompetitionOverview from "./components/CompetitionOverview";
import MovementStandards from "./components/MovementStandards";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";
import Admin from "./pages/Admin";
import Athlete from "./pages/Athlete";
import Athletes from "./pages/Athletes";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Movements from "./pages/Movements";
import Profile from "./pages/Profile";
import Rules from "./pages/Rules";
import WodDetail from "./pages/WodDetail";
import Wods from "./pages/Wods";

function App() {
  return (
    <div className="App">
      {/* Hero Section with Parallax Background */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="container">
          {/* Keep header consistent across pages */}
          <header className="header">
            <div className="logo-container">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="logo-image"
              />
            </div>
            <nav
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                marginTop: "0.5rem",
              }}
            >
              <Link className="btn btn-secondary" to="/">
                Home
              </Link>
              <Link className="btn btn-secondary" to="/dashboard">
                Dashboard
              </Link>
              <Link className="btn btn-secondary" to="/wods">
                WODs
              </Link>
              <Link className="btn btn-secondary" to="/categories">
                Categories
              </Link>
              <Link className="btn btn-secondary" to="/rules">
                Rules
              </Link>
              <Link className="btn btn-secondary" to="/faq">
                FAQ
              </Link>
            </nav>
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
            <AuthBar />
          </div>
        </div>
      </section>

      {/* Routed content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CompetitionOverview />
              <Categories />
              <MovementStandards />
              <Registration />
              <Sponsors />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wods" element={<Wods />} />
        <Route path="/wods/:id" element={<WodDetail />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/athlete/:id" element={<Athlete />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/movements" element={<Movements />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/me" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

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
