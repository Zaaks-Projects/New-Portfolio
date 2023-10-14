import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Bowl_of_care from './pages/Project 1/Bowl-of-care';


function App() {
  let component
  switch (window.location.pathname) {
    case "/" :
      component = <Home />
      break
    case "/about" :
      component = <About />
      break
    case "/work" :
      component = <Work />
      break
    case "/resume" :
      component = <Resume />
      break
    case "/bowl_of_care" :
      component = <Bowl_of_care/>
  }
  return (
    <>
      <Navbar />
      {component}
      
    </>
    
  );
}

export default App;
