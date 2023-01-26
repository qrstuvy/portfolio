import React, { useState, useRef } from 'react'
import './index.css';
import BannerBackground from './components/BannerBackground'
import { ParallaxProvider } from "react-scroll-parallax"
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import { DarkModeToggle } from "react-dark-mode-toggle-2";



export default function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const ref = useRef(null);

  const handleNightModeClick = () => {
    setIsNightMode(!isNightMode);
  }

  const skills = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <DarkModeToggle 
      className='dark-mode-toggle'
      size='3 rem'
      onChange={handleNightModeClick}
      isDarkMode={isNightMode} 
    />
        <ParallaxProvider>
          <BannerBackground isNightMode={isNightMode}/>
        </ParallaxProvider>
        <NavBar scrollToSection={scrollToSection} skills={skills} about={about} projects={projects} contact={contact} isNightMode={isNightMode}/>

        <main>
        <div className='divider-div' ref={about}>
          <SectionDivider />
          </div>
          <About isNightMode={isNightMode} />

        <div className='divider-div' ref={skills}>
          <SectionDivider />
          </div>
          <Skills />
          
          <div className='divider-div' ref={projects}>
          <SectionDivider />
          </div>
          <Projects />

          <div className='divider-div' ref={contact}>
          <SectionDivider />
          </div>
          <Contact />
          <SectionDivider />
        </main>
      </div>
      <Footer />
    </>
  );
}
