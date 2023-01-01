import React from 'react'
import './about.css'
import Me from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Wordwide</small>
            </article>
            <article className='about__card'>
              <HiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
          <p>
            My passion for what I do is based on a simple phrase, "live your life in such a way that you do not regret the past"
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about