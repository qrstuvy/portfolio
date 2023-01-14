import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact () {
  const form = useRef();

  const [successful, setSuccessful] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccessful(true)

    emailjs.sendForm('service_sa06z3n', 'template_fh75msc', form.current, 'lzGSKNcRn0I7uCQGe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
    <h2>Contact Me!</h2>
    <p className='contact-text'>Have questions, suggestions, or comments?<br /> Feel free to leave me a message and I will get back to you as soon as possible!</p>
    <div className='contact-div'>
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Your Name</label><br />
      <input type="text" name="name" placeholder='Full Name*' className='name-field' required /><br />
      <label>Your E-mail</label><br />
      <input type="email" name="email" placeholder='name@company.com*' className='email-field' required /><br />
      <label>Message</label><br />
      <textarea name="message" placeholder='Type Your Message Here*' className='message-field' required /><br /><br />
      <button type="submit">Send</button>
      <div>
      { successful ? 
      
      <p className="success-message">Thank you for getting in touch! <br/>
          Your message has been successfully sent.</p>
      :
      null
    }
    </div>
    </form>
    </div>
    </>
  );
};