import React from 'react';
import { athletes, wods } from '../data/mock';

const Athlete: React.FC = () => {
  const athlete = athletes[0];
  return (
    <section className="dashboard-section section-gray-900">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{athlete.name}</h2>
          <p className="section-subtitle">Category: {athlete.category} • Team: {athlete.team}</p>
        </div>

        <div className="card">
          <h3 className="card-title">Scores</h3>
          <ul>
            {Object.entries(athlete.scores).map(([wodId, s]) => {
              const wod = wods.find(w => w.id === wodId);
              return (
                <li key={wodId} className="info-item">
                  <span className="info-label">{wod?.name ?? wodId}</span>
                  <span className="info-value">Score: {s.score} • Rank: {s.rank}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Athlete;


