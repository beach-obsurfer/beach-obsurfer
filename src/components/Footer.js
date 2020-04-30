import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <span> Created by 🏖️ </span>
      <a
        href="https://github.com/Arnaud75020"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arnaud Duhé
      </a>
      <span> | </span>
      <a
        href="https://github.com/filipamarta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Filipa Marta
      </a>
      <span> | </span>
      <a
        href="https://github.com/isadorahaashillebrand"
        target="_blank"
        rel="noopener noreferrer"
      >
        Isadora Hillebrand
      </a>
      <span> - </span>
      <a
        href="https://www.wildcodeschool.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wild Code School
      </a>
    </footer>
  );
};

export default Footer;
