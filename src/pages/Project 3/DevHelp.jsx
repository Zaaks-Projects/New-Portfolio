import React from "react";
import "./DevHelp.css";
import Background from "./devHelp Background.png";

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
            There is a large population worldwide that remains food insecure. We
            were tasked to create a food delivery app that could generate food
            sources for food-insecure individuals. Our app provides food sources
            for those who are food insecure or currently have a low income. We
            achieve this by supporting local restaurants and partnering with
            them to receive donations.
          </p>
        </div>
        <div>
          <h1>Problem</h1>
          <p>
            There is a large population worldwide that remains food insecure.
            “Food insecure” is a term that refers to those who are unsure of
            where their next meal can be or those who do not have ready access
            to healthy & nutritious food. Here is a link that goes more into
            detail regarding this issue and populations who are affected:
            <span>https://sentientmedia.org/food-insecurity/</span>
          </p>
        </div>
      </div>
      <section className='research_section'>
        <h1>01. Research Conducted</h1>
        <div className='line_devHelp'></div>
        <div className='discover'>
          <div>
            <h1>Mission</h1>
          </div>
          <div>
            <p>Help those who are food insecure</p>
            <p>
              <span>a.</span> Build community
            </p>
            <p>
              <span>b.</span>Reduce Food waste
            </p>
          </div>
          <div>
            <h1>Target Audience</h1>
          </div>
          <div>
            <p>Humanitarians</p>
            <p>Activist</p>
            <p>Community Centered</p>
          </div>
          <div>
            <h1>Restaurants the app would have </h1>
          </div>
          <div>
            <p>Local Restaurants</p>
            <p>Small Businesses</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevHelp;
