import React from 'react'
import './header.css'
import CTA from './CTA'
import hoodie from '../../assests/hoodie.jpg'
import Headersocials from './Headersocials'
const Header = () => {
  return (
     <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Balaji Balasubramanian</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
         <CTA/>
         <Headersocials/>
         <div className="me">
          <img src={hoodie} alt="avengersforjs" />
         </div>

         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
     </header>
  )
}

export default Header