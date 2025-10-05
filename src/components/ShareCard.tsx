import React from "react";

type ShareCardProps = {
  title: string;
  subtitle?: string;
  footer?: string;
};

const ShareCard: React.FC<ShareCardProps> = ({ title, subtitle, footer }) => {
  return (
    <div
      className="card"
      style={{
        width: 1080,
        height: 1350,
        background:
          "linear-gradient(145deg, #1f2937, #111827) url('/crossfit-black-edition-logo.png') no-repeat 40px 40px",
        backgroundSize: "160px auto",
      }}
    >
      <h2 className="section-title" style={{ textAlign: "left" }}>{title}</h2>
      {subtitle && (
        <p className="section-subtitle" style={{ textAlign: "left" }}>
          {subtitle}
        </p>
      )}
      <div style={{ position: "absolute", bottom: 40, left: 40 }}>
        <span style={{ color: "#dc2626", fontWeight: 800 }}>#CFBlackEdition</span>
        {footer && (
          <p className="text-white" style={{ marginTop: 8 }}>
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default ShareCard;


