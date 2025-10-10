// // import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthBar from "./components/AuthBar";
import CompetitionOverview from "./components/CompetitionOverview";
import NavLink from "./components/NavLink";
import Sponsors from "./components/Sponsors";
import Admin from "./pages/Admin";
import Athlete from "./pages/Athlete";
import Athletes from "./pages/Athletes";
import CategoriesPage from "./pages/Categories";
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
      {/* Header - Always visible */}
      <header className="header">
        <div className="container">
          <div className="header-bar">
            <div className="logo-container">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="logo-image"
              />
            </div>
            <nav className="main-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/wods">WODs</NavLink>
              <NavLink to="/athletes">Athletes</NavLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/rules">Rules</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </nav>
            <div className="header-auth">
              <AuthBar />
            </div>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section - Only on home page */}
                <section className="hero-section">
                  <div className="hero-background"></div>
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="hero-content">
                      <h1 className="hero-title">
                        CrossFit Black Edition
                        <span className="title-accent">Games 2025</span>
                      </h1>
                      <p className="hero-subtitle">November 1st, 2025</p>
                      <p className="hero-description">
                        Join us for the ultimate CrossFit competition
                        experience. Whether you're a beginner or elite athlete,
                        there's a place for you in our community-driven event.
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
                      </div>
                    </div>
                  </div>
                </section>
                <CompetitionOverview />
                <Sponsors />
                {/* Contact & Social Section - Only on home page */}
                <section className="contact-section">
                  <div className="container">
                    <div className="contact-content">
                      <div className="contact-info">
                        <h2 className="contact-title">Get Connected</h2>
                        <p className="contact-description">
                          Follow us for updates, training tips, and community
                          highlights
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
                            <span className="social-handle">
                              crossfitblackedition.pt
                            </span>
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
                            <span className="social-name">
                              Membership/Planos
                            </span>
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
                            <span className="social-handle">
                              @crossfitblackedition
                            </span>
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
                            <span className="social-handle">
                              @crossfitblackedition
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wods" element={<Wods />} />
          <Route path="/wods/:id" element={<WodDetail />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/athlete/:id" element={<Athlete />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/movements" element={<Movements />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/me" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer - Always visible */}
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
