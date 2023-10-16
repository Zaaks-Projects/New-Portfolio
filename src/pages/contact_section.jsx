import React from "react"
import './Stylesheet.css'

const Contact_Section = () => {
    return (
        <div className="contact_me" data-aos="fade-down">
            <div className="Contact_header">
                <h1>Contact Me</h1>
                <p>Like what you have seen so far? 
                <span>You would like what we can create together</span></p>
                <div className="contact_info">
                    <i class="bi bi-envelope"></i><p>zaakirahabrams@gmail.com</p>
                </div>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email address" />
                <textarea placeholder="Enter you message here" rows={4}></textarea>
            </div>
            
        </div>
    )
}

export default Contact_Section;