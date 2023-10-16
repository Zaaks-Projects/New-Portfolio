import React, { useEffect, useState } from "react";
import "./Stylesheet.css";
import Work_Section from "./work-section";
import Contact_Section from "./contact_section";
import Footer from "./Footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateGradient = () => {
    // Adjust these values for the central color and fade color
    const centralColor = "#14b9ff"; // Blue color in this example
    const fadeColor = "rgba(20, 185, 255, 0)"; // Fully transparent color at the edge

    const gradient = `radial-gradient(${centralColor}, ${fadeColor} 100%)`;

    return gradient;
  };

  const circleStyle = {
    position: "fixed",
    top: mousePosition.y - 50,
    left: mousePosition.x - 50,
    width: "100px",
    height: "100px",
    borderRadius: "461px",
    background: calculateGradient(),
    pointerEvents: "none",
    zIndex: -1,
  };
  return (
    <>
      <div style={circleStyle}></div>
      <div className="hero" data-aos="fade-down">
        <div className="hero_container">
          <h1>Research, Design, Visual Styling</h1>
          <h2>My Mind Through Design & More</h2>
          <button className="more_btn">Check It Out</button>
        </div>
      </div>
      <Work_Section />
      <Contact_Section />
      <Footer />
    </>
  );
};

export default Home;
