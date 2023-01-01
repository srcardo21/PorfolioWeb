import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Responsive Coffee Shop</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/App_Coffee" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>NavBar</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/Navbar" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>To Do</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/To-do" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>App Weather</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/App-Clima" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Icons With Shadows</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/Shadow_icon" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Image Search</h3>
          <div className="potfolio__item-cta">
            <a href="https://github.com/srcardo21/Image_Search" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio