import React from "react";
import "./Stylesheet.css";
import Footer from "./Footer";
import CV from "./images/Zaakirah Abrams.png";

const Resume = () => {
  return (
    <>
          <img className='CV' src={CV} alt='' />
          < Footer />
    </>
  );
};

export default Resume;
