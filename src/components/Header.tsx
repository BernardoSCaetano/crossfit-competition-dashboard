import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="logo-container">
          <img
            src="/crossfit-black-edition-logo.png"
            alt="CrossFit Black Edition"
            className="logo-image"
          />
        </div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link className="btn btn-secondary" to="/">
            Home
          </Link>
          <Link className="btn btn-secondary" to="/dashboard">
            Dashboard
          </Link>
          <Link className="btn btn-secondary" to="/wods">
            WODs
          </Link>
          <Link className="btn btn-secondary" to="/categories">
            Categories
          </Link>
          <Link className="btn btn-secondary" to="/rules">
            Rules
          </Link>
          <Link className="btn btn-secondary" to="/faq">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
