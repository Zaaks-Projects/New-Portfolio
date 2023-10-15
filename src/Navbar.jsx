import './App.css'


export default function Navbar(){
    return <nav className="nav">
        <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/resume">Resume</a></li>
        </ul>
        </div>
    </nav>
}