import React, {useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Resume from './pages/Resume';
import Bowl_of_care from './pages/Project 1/Bowl-of-care';
import DevHelp from './pages/Project 3/DevHelp';
import Work from './pages/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
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
      component = <Bowl_of_care />
      break
    case "/devHelp" :
      component = <DevHelp/>
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
