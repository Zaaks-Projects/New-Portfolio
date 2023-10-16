import React from "react"
import './Stylesheet.css'
import Work_Section from "./work-section"
import Contact_Section from "./contact_section"
import Footer from "./Footer"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
    
    return (
        <>
        <div className="hero" data-aos="fade-down">
            <div className="hero_container">
                <h1>Research, Design, Visual Styling</h1>
                <h2>My Mind Through Design & More</h2>
                <button className="more_btn">Check It Out</button>
            </div>
        </div>
        < Work_Section />
        < Contact_Section />
        <Footer />
        </>
    )
}

export default Home;