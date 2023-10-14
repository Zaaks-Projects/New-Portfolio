import React from "react"
import './Stylesheet.css'
import Work_Section from "./work-section"

const Home = () => {
    return (
        <>
        <div className="hero">
            <div className="hero_container">
                <h1>Research, Design, Visual Styling</h1>
                <h2>My Mind Through Design & More</h2>
                <button className="more_btn">Check It Out</button>
            </div>
        </div>
        < Work_Section />
        </>
    )
}

export default Home;