import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-red-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="bg-red-600 px-4 py-2 rounded-lg">
                <h1 className="text-2xl font-bold text-white">CrossFit</h1>
                <p className="text-xs text-white">Black Edition</p>
                <p className="text-xs text-white font-bold">GAMES 2025</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#overview"
              className="text-white hover:text-red-400 transition-colors"
            >
              Overview
            </a>
            <a
              href="#categories"
              className="text-white hover:text-red-400 transition-colors"
            >
              Categories
            </a>
            <a
              href="#standards"
              className="text-white hover:text-red-400 transition-colors"
            >
              Standards
            </a>
            <a
              href="#registration"
              className="text-white hover:text-red-400 transition-colors"
            >
              Registration
            </a>
            <a
              href="#sponsors"
              className="text-white hover:text-red-400 transition-colors"
            >
              Sponsors
            </a>
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-red-400 transition-colors">
              PT
            </button>
            <span className="text-gray-400">|</span>
            <button className="text-red-400 font-semibold">EN</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-red-600">
              <a
                href="#overview"
                className="block px-3 py-2 text-white hover:text-red-400"
              >
                Overview
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-white hover:text-red-400"
              >
                Categories
              </a>
              <a
                href="#standards"
                className="block px-3 py-2 text-white hover:text-red-400"
              >
                Standards
              </a>
              <a
                href="#registration"
                className="block px-3 py-2 text-white hover:text-red-400"
              >
                Registration
              </a>
              <a
                href="#sponsors"
                className="block px-3 py-2 text-white hover:text-red-400"
              >
                Sponsors
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="text-white hover:text-red-400">PT</button>
                <span className="text-gray-400">|</span>
                <button className="text-red-400 font-semibold">EN</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
