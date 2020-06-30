import React from "react";
import github from "../../icons/github-logo.svg";
import linkedin from "../../icons/linkedin.svg";
import email from "../../icons/email.svg";
import phone from "../../icons/phone.svg";
import "./IconGrid.css";

export default function IconGrid() {
  return (
    <div className="IconGrid">
      <a href="https://github.com/SimonTakman/">
        <img src={github} alt="github" />
      </a>
      <a href="https://linkedin.com/in/simontakman">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="mailto:simon.takman@pelag.io">
        <img src={email} alt="pelagio" />
      </a>
      <a href="tel:+46703253698">
        <img src={phone} alt="phone" />
      </a>
    </div>
  );
}
