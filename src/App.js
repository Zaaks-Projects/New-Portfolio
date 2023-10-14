import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';


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
  }
  return (
    <>
      <Navbar />
      {component}
      
    </>
    
  );
}

export default App;
