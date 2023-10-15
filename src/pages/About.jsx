import React from "react"
import './Stylesheet.css'
import Footer from "./Footer"

const About = () => {
    return (
        <>
        <div className="about_statement">
            <div>
                <h1>
                    Zaakirah Abrams
                </h1>
            </div>
            <div>
               <p>
               Hello there, thanks for taking the time to view my portfolio
               </p>
               <p>
               I'm currently situated in Cape Town, South Africa, pursuing my desired liking into everything basically<span>design</span>. My Hobbies include working with a camera, catching up with my favourite tv series, and just exploring different amazing things while keeping up with my creative side of<span>design</span>. 
               </p>
               <p>
               I honestly enjoy everything about design. Which is basically coming up with a visual story for apps and website for people to enjoy. I'm constantly gathering inspiration and searching for innovative<span>ideas</span>. 
               </p>
               <p>To give a bit of insight into why i percieve design and why i will always pursue into it is because i believe that design will always be related to people no matter where that perspective is from. Its simply another way of expressing and connecting human emotions through the consumption of our own experience. Which is why i enjoy it so much. In general, I take pleasure in crafting visual narratives that people can appreciate and enjoy.</p>
            </div>
        </div>
        <div className="experience">
            <div>
            <h1>
                Experience
            </h1>
            </div>
            <div>
            <p className="experience_heading">
                CapaCiti
            </p>
            <p><span>Sofware Developer Intern</span></p>
            <p>Jan 2020 - Sept 2020</p>
            <p>This was an internship giving us the opportunity to learn the basic introduction to coding</p>
                <div>
                    <p className="experience_heading_2">Younglings</p>
                </div>
            <p><span>Front-end Developer Intern</span></p>
            <p>Sept 2020 - Jan 2021</p>
            <p>This was part of the CapaCiti internship, but with a more project based side of the internship</p>
                <div>
                    <p className="experience_heading_2">Younglings</p>
                </div>
            <p><span>Design Intern</span></p>
            <p>Feb 2021 - Mar 2022</p>
            <div>
                <p className="experience_heading_2">Skoach</p>
            </div>
            <p><span>UI Design Intern</span></p>
            <p>Jul 2021 - Aug 2021</p>
            </div>
        </div>
        <div className="experience">
            <div>
            <h1>
                Softwares 
            </h1>
            </div>
            <div className="spacing">
            <span>Designing and Prototyping</span>
            <p>Skill 1</p>
            <p>Skill 2</p>
            <p>Skill 3</p>
            <p>Skill 4</p>
            <div className="line"></div>
            <span>Wireframing and User Flows</span>
            <p>Skill 5</p>
            <p>Skill 6</p>
            <p>Skill 7</p>
            </div>
        </div>
        <div className="experience">
            <div>
            <h1>
                Key Skills
            </h1>
            </div>
            <div className="spacing">
            <p>Here are some of the skills that i have aquired through my journey</p>
            <p>Skill 1</p>
            <p>Skill 2</p>
            <p>Skill 3</p>
            <p>Skill 4</p>
            <p>Skill 5</p>
            <p>Skill 6</p>
            <p>Skill 7</p>
            </div>
        </div>
        < Footer/>
        </>
        

    )
}

export default About;