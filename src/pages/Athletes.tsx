import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { athletes } from "../data/mock";

const Athletes: React.FC = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      athletes.filter(
        (a) =>
          a.name.toLowerCase().includes(query.toLowerCase()) ||
          (a.team ?? "").toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section className="dashboard-section section-black">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Athletes</h2>
          <p className="section-subtitle">Search athletes and view scorecards</p>
        </div>

        <div className="registration-form" style={{ marginBottom: "2rem" }}>
          <label className="form-label">Search by name or team</label>
          <input
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Ana, Team Alpha"
          />
        </div>

        <div className="grid grid-3">
          {filtered.map((a) => (
            <div key={a.id} className="card">
              <h3 className="card-title">{a.name}</h3>
              <p className="text-white" style={{ marginBottom: "0.5rem" }}>
                Category: {a.category}
              </p>
              {a.team && (
                <p className="text-white" style={{ marginBottom: "1rem" }}>
                  Team: {a.team}
                </p>
              )}
              <Link className="btn btn-secondary" to={`/athlete/${a.id}`}>
                View Scorecard
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Athletes;


