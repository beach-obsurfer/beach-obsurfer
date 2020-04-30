import React from "react";
import "./Footer.scss";
import logo from "../image/logotipo-contrast.svg";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <p>
          With much {"<3"} {" "} 
          <span aria-label="beach icon emoji" role="img">
            🏖️
          </span>
          {" "} from
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/Arnaud75020"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arnaud Duhé
            </a>
            <span className="separator">|</span>
          </li>
          <li>
            <a
              href="https://github.com/filipamarta"
              target="_blank"
              rel="noopener noreferrer"
            >
            Filipa Marta
            </a>

            <span className="separator">|</span>
          </li>
          <li>
            <a
              href="https://github.com/isadorahaashillebrand"
              target="_blank"
              rel="noopener noreferrer"
            >
            Isadora Hillebrand
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>24h Hackathon / April 2020 / Lisbon</h4>
        <p>
          Directly from our{" "}
          <span aria-label="home icon emoji" role="img">
            🏠
          </span>
           , quarantined
        </p>
        <p>
          Project while coding at{" "}
          <a
            href="https://www.wildcodeschool.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wild Code School
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
