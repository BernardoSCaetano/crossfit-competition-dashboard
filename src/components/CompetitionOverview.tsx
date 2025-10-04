import React from "react";

const CompetitionOverview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Competition Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More than just a competition - it's about experiencing the true
            spirit of our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Why Participate */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Participate?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Be Part of the Community
                  </h4>
                  <p className="text-gray-300">
                    Feel the full energy of the Box. Share the floor with people
                    you know and others you've never met before, building
                    connections and friendships.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Personal Challenge
                  </h4>
                  <p className="text-gray-300">
                    See how much you've improved. It's not about winning, it's
                    about surprising yourself, testing your limits, and
                    realizing you're capable of more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Extra Motivation
                  </h4>
                  <p className="text-gray-300">
                    Having a date and goal on the calendar gives you that extra
                    push to train more consistently and with clear purpose.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Scaled to Your Level
                  </h4>
                  <p className="text-gray-300">
                    Our coaches will help you choose the right category,
                    ensuring workouts are challenging but doable, so you feel
                    confident and proud.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Fun and Memories
                  </h4>
                  <p className="text-gray-300">
                    What stays are the smiles, cheers, high-fives, and stories
                    you'll share. A unique experience full of good vibes and
                    unforgettable moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gray-800 p-8 rounded-xl border border-red-600">
            <h3 className="text-3xl font-bold text-white mb-8">
              Event Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Date & Time</h4>
                  <p className="text-gray-300">
                    November 1st, 2025 • 06:45 - 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <span className="text-xl">🏋️‍♂️</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Format</h4>
                  <p className="text-gray-300">3 WODs + Final (Top 5 teams)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Teams</h4>
                  <p className="text-gray-300">
                    3 athletes per team • Men's, Women's & Mixed
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Registration</h4>
                  <p className="text-gray-300">
                    €17 + T-Shirt (Early bird until Oct 20th)
                  </p>
                  <p className="text-gray-400 text-sm">
                    €17 + €15 T-Shirt (Oct 20th - Nov 1st)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <span className="text-xl">🎥</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">WOD Releases</h4>
                  <p className="text-gray-300">
                    WOD 2: Oct 12th • WOD 3: Oct 19th
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-600/20 rounded-lg border border-red-600">
              <p className="text-white font-semibold text-center">
                ⚠️ Limited spots available - Register at reception!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl font-bold text-white mb-6">
            No matter your level, this competition is for you!
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            It's more than just an event – it's a chance to celebrate your
            CrossFit journey and realize that you're already part of something
            bigger.
          </p>
          <a
            href="#registration"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetitionOverview;
