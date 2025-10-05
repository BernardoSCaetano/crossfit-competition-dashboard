import React from "react";
import { athletes as mockAthletes, wods as mockWods } from "../data/mock";
import { fetchWods, fetchAthletes } from "../data/supabaseAdapters";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [wodsData, setWodsData] = useState(mockWods);
  const [athletesData, setAthletesData] = useState(mockAthletes);

  useEffect(() => {
    (async () => {
      try {
        const [w, a] = await Promise.all([fetchWods(), fetchAthletes()]);
        if (w.length) setWodsData(w);
        if (a.length) setAthletesData(a);
      } catch (_) {
        // fallback to mock
      }
    })();
  }, []);

  return (
    <section className="dashboard-section section-gray-900">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Athlete Dashboard</h2>
          <p className="section-subtitle">
            Track scores, ranks, and WOD details
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Recent WODs</h3>
            <ul>
              {wodsData.map((w) => (
                <li key={w.id} className="info-item">
                  <span className="info-label">{w.name}</span>
                  <span className="info-value">{w.movements.join(", ")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="card-title">Top Athletes (Mock)</h3>
            <ul>
              {athletesData.map((a) => (
                <li key={a.id} className="info-item">
                  <span className="info-label">{a.name}</span>
                  <span className="info-value">{a.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
