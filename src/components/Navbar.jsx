import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import '../index.css'
import ScrollToTop from './ScrollToTop'
import { useState, useEffect } from 'react'


export default function NavBar({ scrollToSection, skills, about, projects, contact, isNightMode }){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    if (window.pageYOffset > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  
  return (
      <>
 <nav className={scrolled ? "top-navbar scrolled" : isNightMode ? "top-navbar-darkmode" : "top-navbar"}>
          <ul>
            <li onClick={() => scrollToSection(about)}>about.</li>
            <li onClick={() => scrollToSection(skills)}>skills.</li>
            <li onClick={() => scrollToSection(projects)}>projects.</li>
            <li onClick={() => scrollToSection(contact)}>contact.</li>
          </ul>
        </nav>

        <div className={scrolled ? "nav-icon-div" : isNightMode ? "nav-icon-div-darkmode" : "nav-icon-div"}>
          <li>
        <a href='https://github.com/qrstuvy' target='_blank' rel='noopener noreferrer'>
        <svg
        className='nav-icon github-icon'
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
        </a></li>

        <li>
        <a href='https://instagram.com/qrstuvy' target='_blank' rel='noopener noreferrer'>
        <svg
        className='nav-icon instagram-icon'
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"

      >
        <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
        </a></li>


        <li>
        <a href='https://www.linkedin.com/in/nguyenvyt/' target='_blank' rel='noopener noreferrer'>
          <svg
          className='nav-icon linkedin-icon'
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
    </svg>
        </a></li>

        <li>
        <a href='https://docs.google.com/document/d/19RBHOKjgVQZQEzcY9Pe6MUwAPf9D-np5QyRg87ayLWQ/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
          <BsFillPersonLinesFill className='nav-icon resume-icon' />
        </a></li>
        <li>
        <a href='mailto:nguyen.vy11@gmail.com' target='_blank' rel="noreferrer">
          <HiOutlineMail className='nav-icon email-icon' />
          </a></li>
      </div>

<div className="bottom-div">
<ScrollToTop />
</div>
</>
    )
}