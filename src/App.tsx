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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            <div className="flex items-center">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/wods">WODs</NavLink>
              <NavLink to="/athletes">Athletes</NavLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/rules">Rules</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </nav>
            <div className="flex items-center">
              <AuthBar />
            </div>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="pt-20 min-h-screen bg-gradient-to-br from-cf-black via-cf-gray-900 to-cf-black">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section - Only on home page */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cf-black via-cf-gray-900 to-cf-black">
                  <div className="absolute inset-0 bg-gradient-to-r from-cf-red/20 via-transparent to-cf-orange/20 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="space-y-8">
                      <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                        CrossFit Black Edition
                        <span className="block text-cf-red animate-float">Games 2025</span>
                      </h1>
                      <p className="text-2xl md:text-3xl text-cf-orange font-semibold">November 1st, 2025</p>
                      <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Join us for the ultimate CrossFit competition experience. Whether
                        you're a beginner or elite athlete, there's a place for you in our
                        community-driven event.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href="https://crossfitblackedition.pt"
                          className="group inline-flex items-center px-8 py-4 bg-cf-red hover:bg-cf-red-dark text-white font-bold text-lg rounded-xl shadow-2xl shadow-cf-red/30 hover:shadow-cf-red/50 transition-all duration-300 hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-3 text-2xl group-hover:animate-bounce">🌐</span>
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
      <footer className="bg-cf-gray-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="h-16 w-auto"
              />
              <div className="text-white">
                <h3 className="text-2xl font-bold">CrossFit Black Edition</h3>
                <p className="text-cf-red font-semibold">GAMES 2025</p>
              </div>
            </div>
            <div className="text-center md:text-right text-white/80">
              <p>© 2025 CrossFit Black Edition Games. All rights reserved.</p>
              <p className="text-sm text-white/60 mt-2">
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
