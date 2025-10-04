import React from "react";

const CompetitionOverview: React.FC = () => {
  return (
    <section id="overview" className="dashboard-section section-gray-900">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Competition Overview
          </h2>
          <p className="section-subtitle">
            More than just a competition - it's about experiencing the true
            spirit of our community
          </p>
        </div>

        <div className="overview-grid">
          {/* Why Participate */}
          <div>
            <h3 className="section-title">
              Why Participate?
            </h3>
            <div className="space-y-6">
              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-2xl">🤝</span>
                </div>
                <div className="overview-content">
                  <h4>
                    Be Part of the Community
                  </h4>
                  <p>
                    Feel the full energy of the Box. Share the floor with people
                    you know and others you've never met before, building
                    connections and friendships.
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-2xl">💪</span>
                </div>
                <div className="overview-content">
                  <h4>
                    Personal Challenge
                  </h4>
                  <p>
                    See how much you've improved. It's not about winning, it's
                    about surprising yourself, testing your limits, and
                    realizing you're capable of more.
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="overview-content">
                  <h4>
                    Extra Motivation
                  </h4>
                  <p>
                    Having a date and goal on the calendar gives you that extra
                    push to train more consistently and with clear purpose.
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div className="overview-content">
                  <h4>
                    Scaled to Your Level
                  </h4>
                  <p>
                    Our coaches will help you choose the right category,
                    ensuring workouts are challenging but doable, so you feel
                    confident and proud.
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-2xl">🎉</span>
                </div>
                <div className="overview-content">
                  <h4>
                    Fun and Memories
                  </h4>
                  <p>
                    What stays are the smiles, cheers, high-fives, and stories
                    you'll share. A unique experience full of good vibes and
                    unforgettable moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="overview-card">
            <h3 className="section-title">
              Event Details
            </h3>

            <div className="space-y-6">
              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-xl">📅</span>
                </div>
                <div className="overview-content">
                  <h4>Date & Time</h4>
                  <p>
                    November 1st, 2025 • 06:45 - 18:00
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-xl">🏋️‍♂️</span>
                </div>
                <div className="overview-content">
                  <h4>Format</h4>
                  <p>3 WODs + Final (Top 5 teams)</p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-xl">👥</span>
                </div>
                <div className="overview-content">
                  <h4>Teams</h4>
                  <p>
                    3 athletes per team • Men's, Women's & Mixed
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-xl">💰</span>
                </div>
                <div className="overview-content">
                  <h4>Registration</h4>
                  <p>
                    €17 + T-Shirt (Early bird until Oct 20th)
                  </p>
                  <p className="text-gray-400 text-sm">
                    €17 + €15 T-Shirt (Oct 20th - Nov 1st)
                  </p>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-icon">
                  <span className="text-xl">🎥</span>
                </div>
                <div className="overview-content">
                  <h4>WOD Releases</h4>
                  <p>
                    WOD 2: Oct 12th • WOD 3: Oct 19th
                  </p>
                </div>
              </div>
            </div>

            <div className="alert alert-warning">
              <p className="text-center font-semibold">
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
            className="btn btn-primary"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetitionOverview;
