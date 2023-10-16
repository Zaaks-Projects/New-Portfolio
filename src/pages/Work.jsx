import React from "react"
import './Work.css'

const Work = () => {
    return (
        <>
        <h1 className="work-section">Things that i have worked on so far</h1>
        <p className="work-section">These are all the projects that i have created over the course of my internships and projects that i created as part of my challenges with candidates i spent time with</p>
        <p className="work-section">Throughout my time creating these design, here's what i learn't</p>
        <div className="grid-container">
            <div className="grid-item">
                <div>
                <h3>Storyboarding</h3>
                <i class="bi bi-sticky-fill"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus, commodi temporibus culpa ipsum explicabo, magni expedita illum ipsam accusamus debitis similique dolore architecto laboriosam tempore quod veniam, totam id.</p>
                </div>
            </div>
            <div className="grid-item">
                <div>
                <h3>Creating Personas</h3>
                <i class="bi bi-person-bounding-box"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia doloremque similique recusandae nesciunt culpa quam excepturi velit beatae, voluptates voluptatum magni assumenda aliquam vero totam vitae distinctio rerum dolorum.</p>
                </div>
            </div>
            <div className="grid-item">
                <div>
                <h3>Wireframing</h3>
                <i class="bi bi-vector-pen"></i>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus perferendis id nesciunt similique veniam voluptatum odio temporibus fugit aspernatur aliquam sequi labore nemo facere velit, tempora libero totam quibusdam saepe.</p>
                </div>
            </div>
            <div className="grid-item">
                <div>
                <h3>Prototyping</h3>
                <i class="bi bi-bezier2"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis officiis perspiciatis eos voluptas ea libero, commodi illum possimus. Maxime exercitationem assumenda expedita hic. Temporibus et harum nostrum enim dolorem!</p>
                </div>
            </div>
        </div>
        </>
        
        
    )
}

export default Work;