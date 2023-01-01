import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Creative interaction design and information architecture.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Management of software design projects and digital products.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Research methods focused on user satisfaction and intuitive interfaces</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Practices and trends in usability, user interfaces and product design.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Knowledge of Marketing, Communication and human behavior issues.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>User experience mapping techniques and agile work methodologies.</p> 
              </li>
            </ul>
        </article>

        {/*End of UI/UX services*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Develoment</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>knowledge in HTML, CSS and JavaScript for the creation of websites.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Good practices and knowledge in responsive projects for mobile devices.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Manage different versions of a website for productivity.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Use APIs to connect the web with services and systems.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Create tools that improve the interaction between user and web.</p> 
              </li>
            </ul>
        </article>

        {/*End of Web Development services*/}

        <article className='service'>
          <div className="service__head">
            <h3>BackEnd</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Knowledge of databases and good use of information.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Detection of errors / bugs and how to solve them.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Understanding of data structures and algorithms.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Use of tests for product quality control.</p> 
              </li>
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Good practices for information security.</p> 
              </li>
            </ul>
        </article>

        {/*End of BackEnd*/}
      </div>
    </section>
  )
}

export default services