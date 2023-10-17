import React from "react";
import "./Work.css";
import Booka from "./images/Booka Ad.png";
import BOC from "./images/Bowl Of Care.png";
import Dev from "./images/devHelp.png";

const Work = () => {
  return (
    <>
      <h1
        className='work-section-title'
        data-aos='fade-down'
        data-aos-delay='200'
      >
        Things that I have worked on so far
      </h1>
      <p className='work-section' data-aos='fade-down' data-aos-delay='200'>
        These are all the projects that i have created over the course of my
        internships and projects that i created as part of my challenges with
        candidates i spent time with
      </p>
      <p className='work-section' data-aos='fade-down' data-aos-delay='200'>
        Throughout my time creating these design, here's what i learn't
      </p>
      <div
        className='grid-container'
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-back'
        data-aos-delay='300'
        data-aos-offset='0'
      >
        <div className='grid-item'>
          <div>
            <h3>Storyboarding</h3>
            <i class='bi bi-sticky-fill'></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              necessitatibus, commodi temporibus culpa ipsum explicabo, magni
              expedita illum ipsam accusamus debitis similique dolore architecto
              laboriosam tempore quod veniam, totam id.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <h3>Creating Personas</h3>
            <i class='bi bi-person-bounding-box'></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quia doloremque similique recusandae nesciunt culpa quam excepturi
              velit beatae, voluptates voluptatum magni assumenda aliquam vero
              totam vitae distinctio rerum dolorum.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <h3>Wireframing</h3>
            <i class='bi bi-vector-pen'></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus perferendis id nesciunt similique veniam voluptatum odio
              temporibus fugit aspernatur aliquam sequi labore nemo facere
              velit, tempora libero totam quibusdam saepe.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <h3>Prototyping</h3>
            <i class='bi bi-bezier2'></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis officiis perspiciatis eos voluptas ea libero, commodi
              illum possimus. Maxime exercitationem assumenda expedita hic.
              Temporibus et harum nostrum enim dolorem!
            </p>
          </div>
        </div>
      </div>
      <div
        className='work-display'
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
            <a href='/bowl_of_care' className='project_btn'>
              View Project
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
