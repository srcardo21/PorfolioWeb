import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiBriefcase} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, SetActiveNav] = useState('#');
  return (
    <nav className='nav'>
        <a href="#" onClick={() => SetActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => SetActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => SetActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
        <a href="#services" onClick={() => SetActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#portfolio" onClick={() => SetActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><BiBriefcase /></a>
    </nav>
  )
}

export default Nav