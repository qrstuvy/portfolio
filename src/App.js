import './index.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider'
import BannerBackground from './components/BannerBackground'
import { ParallaxProvider } from "react-scroll-parallax"
import React, { useState } from 'react'

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleNightModeClick = () => {
    setIsNightMode(!isNightMode);
  }

  return (
    <>
{isNightMode ? 
    <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className="night-mode-button-on" onClick={handleNightModeClick}
  >
    <path d="M1 11h3v2H1v-2m18.1-7.5L17 5.6 18.4 7l2.1-2.1-1.4-1.4M11 1h2v3h-2V1M4.9 3.5L3.5 4.9 5.6 7 7 5.6 4.9 3.5M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m2-16c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.2 3 5.2V19c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1.8c1.8-1 3-3 3-5.2 0-3.3-2.7-6-6-6m1 9.9V17h-2v-1.1c-1.7-.4-3-2-3-3.9 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.4-3 3.9m7-4.9h3v2h-3v-2z" />
  </svg>
:
<svg
viewBox="0 0 24 24"
fill="currentColor"
height="1em"
width="1em"
className="night-mode-button-off" onClick={handleNightModeClick}
>
<path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7M9 21v-1h6v1a1 1 0 01-1 1h-4a1 1 0 01-1-1m3-17a5 5 0 00-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 00-5-5z" />
</svg>
}
      <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
        <ParallaxProvider>
          <BannerBackground isNightMode={isNightMode}/>
        </ParallaxProvider>
        <NavBar isNightMode={isNightMode}/>
        <Home isNightMode={isNightMode}/>
        <main>
        <SectionDivider />
          <Skills />
          <SectionDivider />
          <About isNightMode={isNightMode}/>
          <SectionDivider />
          <Projects />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
