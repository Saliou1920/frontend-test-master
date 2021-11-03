import React from "react";
import "../css/footer.css";
const Footer = () => {
  return (
    <nav className="footer-nav">
      <a href="#" className="nav-link">
        <img src="../../public/archive.svg" alt="archive" />
        <span className="nav-label">Archive</span>
      </a>
      <a href="#" className="nav-link">
        <img src="../../public/dialpad.svg" alt="archive" />
        <span className="nav-label">Dialpad</span>
      </a>
      <a href="#" className="nav-link">
        <img src="../../public/voicemail.svg" alt="archive" />
        <span className="nav-label">Voice Mail</span>
      </a>
    </nav>
  );
};

export default Footer;
