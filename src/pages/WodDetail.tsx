import React from "react";
import { useParams } from "react-router-dom";
import { wods } from "../data/mock";

const WodDetail: React.FC = () => {
  const { id } = useParams();
  const wod = wods.find((w) => w.id === id);

  if (!wod) {
    return (
      <section className="dashboard-section section-gray-900">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">WOD Not Found</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-section section-gray-900">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{wod.name}</h2>
          <p className="section-subtitle">{wod.description}</p>
        </div>

        <div className="card">
          <h3 className="card-title">Movements</h3>
          <div className="category-features">
            {wod.movements.map((m, i) => (
              <div key={i} className="category-feature">
                <div className="category-feature-dot"></div>
                <span className="category-feature-text">{m}</span>
              </div>
            ))}
          </div>
          {wod.videoUrl && (
            <a className="btn btn-primary" href={wod.videoUrl} target="_blank" rel="noreferrer" style={{ marginTop: '1rem' }}>
              Watch Demo Video
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default WodDetail;


