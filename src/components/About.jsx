import profilepic from '../images/profilepic.png'

export default function About () {
    return (
        <>
            <h2>About Me</h2>
            <div className='about-me-div'>
               <img src={profilepic} className="profilepic" /> 
                <div className='about-me-desc'>
                    <p>Hi! I'm Vy!
                    <br /><br />
                        Constantly updating and upgrading my own software to chase a better version of myself. <br />
                    I am a pharmacist turned full-stack developer currently based in NYC, New York. With a strong background in healthcare management and patient-centered care, I always strive for an end-user first approach when developing my projects. After years of experience converting medical jargon into layman terms to build stronger relationships with my patients, those values are now being brought into my passion for software engineering to code scalable apps with more impact for my team and a wide array of users.
                    <br /><br />
I always push to leave things better than how I found them and make a difference everywhere I go. </p>
                </div>
                </div>
        </>
    )
}