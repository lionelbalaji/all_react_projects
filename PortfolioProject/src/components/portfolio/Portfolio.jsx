import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assests/portfolio1.jpg'
import portfolio2 from '../../assests/portfolio2.jpg'
import portfolio3 from '../../assests/portfolio3.jpg'
import portfolio4 from '../../assests/portfolio4.png'
import portfolio5 from '../../assests/portfolio5.jpg'
import portfolio6 from '../../assests/portfolio6.jpg'
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:portfolio1,
      title:'crypto currency dashboard & financial visualization',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    },
    {
      id:2,
      image:portfolio2,
      title:'charts templates & infographics sigma',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    },{
      id:3,
      image:portfolio3,
      title:'figma dashboard UI kit for data design web apps',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    },{
      id:4,
      image:portfolio4,
      title:'maintaining tracks and task process',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    },{
      id:5,
      image:portfolio5,
      title:'figma dashboard UI kit for data design web apps',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    },{
      id:6,
      image:portfolio6,
      title:'figma dashboard UI kit for data design web apps',
      github:'http://github.com',
      demo:"https://dribbble.com/alien-pixels"
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
         
          data.map(({id,image,title,github,demo}) =>{
            return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item_image">
             <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
           ) })
        }
      </div>
    </section>
  )
  
}

export default Portfolio