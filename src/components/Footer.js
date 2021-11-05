import React from "react";
import "../css/footer.css";
import { BsArchiveFill } from "react-icons/bs";
import { MdOutlineArchive } from "react-icons/md";
import { BiDialpad } from "react-icons/bi";
import { FaVoicemail } from "react-icons/fa";
const Footer = ({ boxSelector, setBoxSelector }) => {
  return (
    <nav className="footer-nav">
      <a
        href="#"
        className="nav-link"
        onClick={() => {
          setBoxSelector(true);
          console.log(boxSelector);
        }}
      >
        <MdOutlineArchive size="3em" />
        <span className="nav-label">Archive</span>
      </a>
      <a href="#" className="nav-link">
        <BiDialpad size="3em" />
        <span className="nav-label">Dialpad</span>
      </a>
      <a
        href="#"
        className="nav-link"
        onClick={() => {
          setBoxSelector("voicemail");
          console.log(boxSelector);
        }}
      >
        <FaVoicemail size="3em" />
        <span className="nav-label">Voice Mail</span>
      </a>
    </nav>
  );
};

export default Footer;
