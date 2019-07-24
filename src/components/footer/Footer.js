import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div style={{ flex: 10 }} />
      <div className="footer-container" style={{ flex: 2 }}>
        <p className="footer-text">
          © 2019 Takman Technologies AB | 559206-8851
        </p>
      </div>
    </div>
  );
}
