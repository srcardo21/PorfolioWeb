import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SRCARDO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Potfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/esteban-cardona-garcia-317542225/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/srcardo21" target="_blank"><AiFillGithub /></a>
        <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSHvbQxBFMtVpQSZPTGCrDCrSVBgMwqKbdLJZJMBjhGXBvbmmWkPjsxCFQgmKjQWWfZlfZlZ" target="_blank"><SiGmail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SRCARDO. All rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer