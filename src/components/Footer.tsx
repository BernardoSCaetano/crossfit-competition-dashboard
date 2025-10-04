import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 px-4 py-2 rounded-lg">
                <h3 className="text-xl font-bold text-white">CrossFit</h3>
                <p className="text-xs text-white">Black Edition</p>
                <p className="text-xs text-white font-bold">GAMES 2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join us for the ultimate CrossFit competition experience. Whether
              you're a beginner or elite athlete, there's a place for you in our
              community-driven event.
            </p>
            <div className="flex space-x-4">
              <button
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                </svg>
              </button>
              <button
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#overview"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Competition Overview
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#standards"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Movement Standards
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-red-400">📍</span>
                <span>CrossFit Black Edition</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400">📅</span>
                <span>November 1st, 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400">⏰</span>
                <span>06:45 - 18:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400">💰</span>
                <span>€17 + T-Shirt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CrossFit Black Edition Games. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-red-600/20 border border-red-600 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold text-white mb-2">
            Ready to Compete?
          </h4>
          <p className="text-gray-300 mb-4">
            Don't miss out on this incredible community experience. Register
            now!
          </p>
          <a
            href="#registration"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Register Your Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
