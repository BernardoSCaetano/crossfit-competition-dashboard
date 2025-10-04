import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Logo */}
          <div className="mb-8">
            <div className="inline-block bg-red-600 px-8 py-6 rounded-xl shadow-2xl">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-2">
                CROSSFIT
              </h1>
              <div className="bg-white px-4 py-2 rounded-lg mb-2">
                <p className="text-2xl md:text-3xl font-bold text-red-600">
                  BLACK EDITION
                </p>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                GAMES 2025
              </p>
            </div>
          </div>

          {/* Event Date */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              November 1st, 2025
            </h2>
            <p className="text-xl text-gray-300">
              CrossFit Black Edition • 06:45 - 18:00
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-red-600">
              <div className="text-4xl mb-4">🏋️‍♂️</div>
              <h3 className="text-xl font-bold text-white mb-2">
                4 Categories
              </h3>
              <p className="text-gray-300">RX+, RX, Performance & Rookie</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-red-600">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2">3 Athletes</h3>
              <p className="text-gray-300">Men's, Women's & Mixed Teams</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-red-600">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">
                3 WODs + Final
              </h3>
              <p className="text-gray-300">Ultimate CrossFit Challenge</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-2xl font-bold text-white mb-6">
              Ready to test your limits?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#registration"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
              >
                Register Now - €17 + T-Shirt
              </a>
              <a
                href="#overview"
                className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Early bird until October 20th • Limited spots available
            </p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
