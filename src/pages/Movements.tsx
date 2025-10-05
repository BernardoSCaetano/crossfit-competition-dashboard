import React from "react";

const movements = [
  { name: "Muscle Up", video: "https://www.youtube.com/watch?v=1i9t2JtqgLo" },
  { name: "Handstand Push-up", video: "https://www.youtube.com/watch?v=Q0Z4b0G0H6o" },
  { name: "Snatch", video: "https://www.youtube.com/watch?v=V8d3Q_1k2Pw" },
];

const Movements: React.FC = () => {
  return (
    <section className="dashboard-section section-black">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Movement Library</h2>
          <p className="section-subtitle">Reference videos for common movements</p>
        </div>

        <div className="grid grid-3">
          {movements.map((m) => (
            <div key={m.name} className="card">
              <h3 className="card-title">{m.name}</h3>
              <a className="btn btn-secondary" href={m.video} target="_blank" rel="noreferrer">
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movements;


