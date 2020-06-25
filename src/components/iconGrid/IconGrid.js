import React from "react";
import github from "../../icons/github-logo.svg";
import linkedin from "../../icons/linkedin.svg";
import email from "../../icons/email.svg";
import phone from "../../icons/phone.svg";
import "./IconGrid.css";

//Something does not work with evening the grid
export default function IconGrid() {
  return (
    <div className="IconGrid">
      <a href="https://github.com/SimonTakman/">
        <img src={github} />
      </a>

      <a href="https://linkedin.com/in/simontakman">
        <img src={linkedin} />
      </a>
      <a href="mailto:simon@takmantechnologies.com">
        <img src={email} />
      </a>

      <a href="tel:+46703253698">
        <img src={phone} />
      </a>
    </div>
  );
}
