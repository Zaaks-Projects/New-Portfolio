import React from "react";
import "./Stylesheet.css";
import Younglings from "./images/younglings.png";
import Booka from "./images/Booka Ad.png";
import BOC from "./images/Bowl Of Care.png";
import Dev from "./images/devHelp.png";
import DevHelp from "./Project 3/DevHelp";

const Company_section = () => {
  return (
    <>
      <div
        className='work-section'
        id='Work'
        data-aos='fade-down'
        data-aos-delay='300'
      >
        <div className='work-card'>
          <img src={Booka} alt='work 1' />
          <p>
            <a href='/bowl_of_care' className='project_btn'>
              View Project
            </a>
          </p>
        </div>
        <div className='work-card'>
          <img src={BOC} alt='work 2' />
          <p>
            <a href='/bowl_of_care' className='project_btn'>
              View Project
            </a>
          </p>
        </div>
        <div className='work-card'>
          <img src={Dev} alt='work 2' />
          <p>
            <a href='/devHelp' className='project_btn'>
              View Project
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Company_section;
