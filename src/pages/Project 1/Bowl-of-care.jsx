import React from "react"
import './Bowl-of-care.css'
import Persona from './persona.jpeg'

const Bowl_of_care = () => {
    return (
        <>
        <div className="header">
            <h1></h1>
        </div>
        <div className="information_section">
            <h1>Bowl Of Care</h1>
            <p>My Role:<span>UI Design, Research, Wireframe, Prototype</span></p>
            <p>Team Size:<span>3</span></p>
            <p>August 2022 - September 2022</p>
            <p>This project was designed as part of our bootcamp project</p>
        </div>
        <div className="project_overview">
            <div>
                <h1>
                    Project Overview
                </h1>
                <p>
                There is a large population worldwide that remains food insecure. We were tasked to create a food delivery app that could generate food sources for food-insecure individuals. Our app provides food sources for those who are food insecure or currently have a low income. We achieve this by supporting local restaurants and partnering with them to receive donations.
                </p>
            </div>
            <div>
               <h1>Problem</h1> 
               <p>
               There is a large population worldwide that remains food insecure. “Food insecure” is a term that refers to those who are unsure of where their next meal can be or those who do not have ready access to healthy & nutritious food. Here is a link that goes more into detail regarding this issue and populations who are affected:<span>https://sentientmedia.org/food-insecurity/</span>
               </p>
            </div>
        </div>
        <section className="research_section">
            <h1>01. Research Conducted</h1>
            <div className="line"></div>
            <div className="discover">
            <div>
                <h1>
                    Mission
                </h1>
            </div>
            <div>
               <p>
                Help those who are food insecure
               </p>
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
        <section className="competitors">
            <h1>02. Competitor Analysis</h1>
            <div className="line2"></div>
            <p>
            We began our design sprint by usability testing the food delivery apps currently in the market with three users. The usability tests revealed user pain points and how users commonly work these apps.
            </p>
            <div className="competitors_list">
            <div>
                    <h1>
                        Chow Now
                    </h1>
                    <p>
                    Chow Now is a food delivery app for independent restaurants in the U.S. and Canada, known for its enticing food visuals. They're evaluating changes to their digital presence, possibly looking to expand or remove elements.
                    </p>
                    <span>Pain Points:</span>
                    <p>Inability to view past transactions, unobvious delivery settings, and inaccurate guss of user's location</p>
                </div>
                <div>
                    <h1>Seamless</h1> 
                    <p>
                    US-based food delivery app that caters to popular restaurants. It offers a good restaurant page product layout and presentation. Their perks page with the cash value of savings can incentivize purchases.
                    </p>
                    <span>Pain Points:</span>
                    <p>Inconsistent hierachy, endless restaurant scroll, and prices overlayed on food that is hard to read</p>
                </div>
                <div>
                    <h1>Pida Uva</h1> 
                    <p>
                    A food delivery app that serves the population of Puerto Rico. While it had consistent use of color, common
                    </p>
                    <span>Pain Points:</span>
                    <p>Inconsistent navigation, default language that isn't the country's first spoken tongue, and lack of feedback and descriptions.</p>
                </div>
            </div>
        </section>
        <section className="define_phase">
            <h1>03. Define Phase</h1>
            <div className="line2"></div>
            <p>
            As part of our define phase we created personas, empathy maps, and customer journey maps to understand more about the user's problem. 
            </p>
            <img src={Persona} alt="" />
        </section>
        </>
        
    )
}

export default Bowl_of_care;