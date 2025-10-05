import React, { useState } from "react";

const Admin: React.FC = () => {
  const [form, setForm] = useState({ athlete_id: "", wod_id: "", score_value: "", rank: "", notes: "" });
  const [status, setStatus] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("/api/scores/upsert", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": (process.env.REACT_APP_ADMIN_WRITE_KEY as string) ?? "" },
        body: JSON.stringify({
          athlete_id: form.athlete_id,
          wod_id: form.wod_id,
          score_value: form.score_value,
          rank: form.rank ? Number(form.rank) : null,
          notes: form.notes || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("Saved!");
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section className="dashboard-section section-black">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Admin / Judge</h2>
          <p className="section-subtitle">Temporary form to upsert scores</p>
        </div>

        <form onSubmit={submit} className="registration-form" style={{ maxWidth: 720 }}>
          <label className="form-label">Athlete ID</label>
          <input className="form-input" name="athlete_id" value={form.athlete_id} onChange={onChange} required />

          <label className="form-label" style={{ marginTop: 12 }}>WOD ID</label>
          <input className="form-input" name="wod_id" value={form.wod_id} onChange={onChange} required />

          <label className="form-label" style={{ marginTop: 12 }}>Score Value</label>
          <input className="form-input" name="score_value" value={form.score_value} onChange={onChange} required />

          <label className="form-label" style={{ marginTop: 12 }}>Rank (optional)</label>
          <input className="form-input" name="rank" value={form.rank} onChange={onChange} />

          <label className="form-label" style={{ marginTop: 12 }}>Notes (optional)</label>
          <textarea className="form-textarea" name="notes" value={form.notes} onChange={onChange} />

          <div style={{ marginTop: 16 }}>
            <button className="btn btn-primary" type="submit">Save Score</button>
          </div>
          {status && <p style={{ marginTop: 12 }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Admin;


