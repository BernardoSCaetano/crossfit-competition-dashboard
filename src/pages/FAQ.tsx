import React from "react";

const FAQ: React.FC = () => {
  return (
    <section className="dashboard-section section-gray-900">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">FAQ</h2>
          <p className="section-subtitle">Answers to the most common questions</p>
        </div>
        <div className="card">
          <h3 className="card-title">General</h3>
          <ul className="space-y-2">
            <li className="info-item"><span className="info-label">Parking</span><span className="info-value">Available near the venue</span></li>
            <li className="info-item"><span className="info-label">Spectators</span><span className="info-value">Welcome!</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


