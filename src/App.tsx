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
      <header className="fixed top-0 left-0 right-0 z-50 bg-cf-gray-950/95 backdrop-blur-xl border-b border-cf-gray-800/50 shadow-cf-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">CrossFit Black Edition</h1>
                <p className="text-xs text-cf-red font-semibold">GAMES 2025</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-2">
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
      <main className="pt-20 min-h-screen bg-gradient-to-br from-cf-gray-950 via-cf-black to-cf-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section - Only on home page */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cf-gray-950 via-cf-black to-cf-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-cf-red/10 via-transparent to-cf-orange/10 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cf-black/20 to-cf-black/60"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cf-red/5 via-transparent to-transparent"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tight">
                          CrossFit Black Edition
                          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cf-red via-cf-red-light to-cf-orange animate-float">
                            Games 2025
                          </span>
                        </h1>
                        <div className="inline-flex items-center px-6 py-3 bg-cf-red/10 border border-cf-red/20 rounded-full backdrop-blur-sm">
                          <span className="text-2xl md:text-3xl text-cf-orange font-bold">November 1st, 2025</span>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-cf-gray-300 max-w-5xl mx-auto leading-relaxed font-medium">
                        Join us for the ultimate CrossFit competition experience. Whether
                        you're a beginner or elite athlete, there's a place for you in our
                        community-driven event.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <a
                          href="https://crossfitblackedition.pt"
                          className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-cf-red to-cf-red-light hover:from-cf-red-light hover:to-cf-red text-white font-bold text-lg rounded-2xl shadow-cf-red-lg hover:shadow-cf-red transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-4 text-2xl group-hover:animate-bounce">🌐</span>
                          Visit Main Website
                          <div className="absolute inset-0 bg-gradient-to-r from-cf-red to-cf-red-light rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
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
      <footer className="bg-gradient-to-r from-cf-gray-950 via-cf-black to-cf-gray-950 border-t border-cf-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center space-x-6">
              <img
                src="/crossfit-black-edition-logo.png"
                alt="CrossFit Black Edition"
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="text-white">
                <h3 className="text-3xl font-display font-black">CrossFit Black Edition</h3>
                <p className="text-cf-red font-bold text-lg">GAMES 2025</p>
                <p className="text-cf-gray-400 text-sm font-medium mt-1">November 1st, 2025</p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-cf-gray-300 font-medium">© 2025 CrossFit Black Edition Games. All rights reserved.</p>
              <p className="text-sm text-cf-gray-500 mt-3 font-medium">
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
