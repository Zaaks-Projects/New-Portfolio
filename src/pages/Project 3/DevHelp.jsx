import React from "react";
import "./DevHelp.css";
import Persona from './Persona.png'
  
  
  
  
const DevHelp = () => {
  return (
    <>
      <div className='header_devHelp'>
        <h1></h1>
      </div>
      <div className='information_section_devHelp'>
        <h1>Dev Help</h1>
        <p>
          My Role:
          <span>UI Design, Research, Wireframe, Prototype, Main Designer</span>
        </p>
        <p>
          Team Size:<span>2</span>
        </p>
        <p>February 2023</p>
        <p>
          This project was designed to serve part of a Hackathon my team-mate &
          I had to to submit to visualise what the app would look like
        </p>
      </div>
      <div className='project_overview_devHelp'>
        <div>
          <h1>Project Overview</h1>
          <p>
            devHelp! is an app created with the intention of helping those
            trying to gain some work experience. Many entry-level developers
            face challenges in landing their dream jobs due to their limited
            experience. This is why we have developed an app aimed at providing
            them with opportunities to gain valuable experience and skills.
          </p>
        </div>
        <div>
          <h1>Problem</h1>
          <p>
            With research done, I noticed that the unemployment rate in South
            Africa is very high. Often, we have developers who don't have the
            experience needed for a particular position. They may be at a junior
            or mid-senior level of skill. That's why our team collectively
            decided to develop an app that offers developers the opportunity to
            gain valuable experience through part-time or freelance projects.
          </p>
        </div>
      </div>
      <section className='research_section_devHelp'>
        <h1>Goals for this project</h1>
        <div className='line_devHelp'></div>
        <div>
          <p>
            1. Target audience: We intend to target those living in South
            Africa.
          </p>
          <p>
            2. Users Goals: To have them explore company developer opportunities
            or gain the chance to experience freelance projects hosted by
            founders.
          </p>
          <p>3. Business Goals: To introduce developers to various companies</p>
        </div>
      </section>
      <div className='discover_phase_devHelp'>
        <h1>Discovery Phase</h1>
        <p>Throughout our reaserach, here's what motivated us</p>
      </div>
      <div className='metrics_devHelp'>
        <div>
          <h1>Mission Statement</h1>
          <p>
            Facilitate individuals seeking to acquire valuable experience for
            better job prospects:
          </p>
          <p>a. Build community</p>
          <p>b. Gain Experience</p>
          <p>c. Get Recognition</p>
        </div>
        <div>
          <h1>Metrics</h1>
          <p>
            According to recent metrics, there are over 133195 unfilled software
            positions in South Africa alone. South Africa consistently ranks 1st
            on the list of software development countries in Africa. The problem
            is that most of these software positions require an average of 5
            years minimum to apply. A large obstacle for industry newcomers.
          </p>
        </div>
        <div>
          <h1>Solution</h1>
          <p>
            This is where devHelp comes in. We offer a special place for
            developers where they can use their expertise on small projects offered by other devs or clients that they can add to their
            development portfolio.
            Very much in the vein of Offer Zen or
            LinkedIn but tailored specifically for developers.
          </p>
        </div>
      </div>
      <img className="persona" src={Persona} alt="" />
      <div className="discover_phase_devHelp">
        <h1>Design Phase of the Project</h1>
      </div>
    </>
  );
};

export default DevHelp;
