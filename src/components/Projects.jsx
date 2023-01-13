import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import simon1 from '../images/simon-things-1.png'
import medtracker1 from '../images/medtracker-1.png'
import astrologyx1 from '../images/astrologyx-1.png'
import linkcable1 from '../images/linkcable-1.png'

export default function Projects(){
    return(
        <>
        <h2>Projects</h2>

<div className='project-div'>
                    <div className='description'>
                        <h2>Link Cable</h2>
                        <h3>A Dating App for Gamers</h3>
                        <div className='image-div'>
                        <img className='project-img-top' src={linkcable1} alt="Dating app image"></img>
                    </div>
                        <p>
                            <i className="devicon-django-plain project-icon"></i>
                            <i className="devicon-postgresql-plain project-icon"></i>
                            <i className="devicon-python-plain project-icon"></i>
                            <i className="devicon-html5-plain project-icon"></i>
                            <i className="devicon-css3-plain project-icon"></i>
                            <i className="devicon-javascript-plain project-icon"></i>
                        </p>
                        <a href='https://obscure-hollows-38715.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
                        </a>
                        <a href='https://github.com/Team-weird-gif-of-my-face/Link-Cable' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faCode} /> Code</button>
                        </a>
                    </div>
               



                    <div className='description'>
                        <h2>Astrologyx</h2>
                        <h3>An Astronomy App</h3>
                        <div className='image-div'>
                        <img className='project-img-top' src={astrologyx1} alt="Astrology app image"></img>
                    </div>
                        <p>
                        <i className="devicon-mongodb-plain project-icon"> </i>
                        <i className="devicon-express-original project-icon"> </i>
                        <i className="devicon-react-original project-icon"></i>
                        <i className="devicon-nodejs-plain project-icon"> </i>
                        </p>
                        <a href='https://mighty-caverns-06129.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
                        </a>
                        <a href='https://github.com/qrstuvy/astrologyx' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faCode} /> Code</button>
                        </a>
                    </div>
              




                    <div className='description'>
                        <h2>MedTracker</h2>
                        <h3>A Medication Tracker</h3>
                        <div className='image-div'>
                        <img className='project-img-top' src={medtracker1} alt="Medication tracker image"></img>
                    </div>
                        <p>
                        <i className="devicon-mongodb-plain project-icon"> </i>
                        <i className="devicon-express-original project-icon"> </i>
                        <i className="devicon-nodejs-plain project-icon"> </i>
                        </p>
                        <a href='https://boiling-tor-79260.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
                        </a>
                        <a href='https://github.com/qrstuvy/Medication-Tracker' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faCode} /> Code</button>
                        </a>
                    </div>
               

                    <div className='description'>
                        <h2>Simon Things</h2>
                        <h3>A Classic Game</h3>
                        <div className='image-div'>
                        <img className='project-img-top' src={simon1} alt="Simon-game image"></img>
                    </div>
                        <p>
                            <i className="devicon-html5-plain project-icon"></i>
                            <i className="devicon-css3-plain project-icon"></i>
                            <i className="devicon-javascript-plain project-icon"></i>
                        </p>
                        <a href='https://qrstuvy.github.io/simon-things/' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
                        </a>
                        <a href='https://github.com/qrstuvy/simon-things' target='_blank' rel='noopener noreferrer'>
                            <button><FontAwesomeIcon icon={faCode} /> Code</button>
                        </a>
                    </div>
                </div>
        </>
    )
}