import React from "react";

const Rules: React.FC = () => {
  return (
    <section className="dashboard-section section-black">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competition Rules</h2>
          <p className="section-subtitle">Fair play, safety, and community first</p>
        </div>

        <div className="card">
          <h3 className="card-title">General</h3>
          <ul className="space-y-2">
            <li className="info-item"><span className="info-label">Check-in</span><span className="info-value">06:45</span></li>
            <li className="info-item"><span className="info-label">Briefings</span><span className="info-value">Before each WOD</span></li>
            <li className="info-item"><span className="info-label">Tie-breaks</span><span className="info-value">Announced per WOD</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;


