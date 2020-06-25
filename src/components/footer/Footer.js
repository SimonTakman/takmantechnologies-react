import React from "react";
import "./Footer.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <p className="footer-text">
        © {year} Takman Technologies AB | 559206-8851
      </p>
    </div>
  );
}
