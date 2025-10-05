import React from "react";
import { wods } from "../data/mock";

const Wods: React.FC = () => {
  return (
    <section className="dashboard-section section-black">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Workouts of the Day</h2>
          <p className="section-subtitle">
            Descriptions, movements, and reference videos
          </p>
        </div>

        <div className="grid grid-3">
          {wods.map((w) => (
            <div key={w.id} className="card">
              <h3 className="card-title">{w.name}</h3>
              <p className="text-white" style={{ marginBottom: "1rem" }}>
                {w.description}
              </p>
              <div
                className="category-features"
                style={{ marginBottom: "1rem" }}
              >
                {w.movements.map((m, idx) => (
                  <div key={idx} className="category-feature">
                    <div className="category-feature-dot"></div>
                    <span className="category-feature-text">{m}</span>
                  </div>
                ))}
              </div>
              {w.videoUrl && (
                <a
                  className="btn btn-secondary"
                  href={w.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Movement Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wods;
