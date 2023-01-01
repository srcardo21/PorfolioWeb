import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/esteban-cardona-garcia-317542225/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/srcardo21" target="_blank"><AiFillGithub /></a>
        <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSHvbQxBFMtVpQSZPTGCrDCrSVBgMwqKbdLJZJMBjhGXBvbmmWkPjsxCFQgmKjQWWfZlfZlZ" target="_blank"><SiGmail /></a>
    </div>
  )
}

export default headerSocials