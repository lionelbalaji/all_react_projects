import React, { useRef }  from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pvxmjf6', 'template_4bpktdm', form.current, '7HllK_FqgMfHTKxi1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact</h2>


       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>balaji2405jeeva@gmail.com</h5>
            <a href="mailto:balaji2405jeeva@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger   className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Lionelbalaji</h5>
            <a href="http://me.m/lionel.balaji"   target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp   className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+9080176227</h5>
            <a href="https://api.whatsapp.com/send?phone+=9080176227"  target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTCT_OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='your full name' required/>
            <input type="email" name='email' placeholder='your e-mail' required />
            <textarea name="message" rows="7" placeholder='enter your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact