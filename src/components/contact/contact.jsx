import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gsj9l3t', 'template_13vxpmi', form.current, 'QFbffG3SJ85vh4PVy') 
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>srcardo21@gmail.com</h5>
            <a href="mailto:srcardo21@gmail.com">Sent a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>3234862306</h5>
            <a href="https://wa.me/+573234862306" target='_blank'>Sent a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Yur Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact