import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'>BALAJI</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#Testimonial">testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="http://facebook.com"><FaFacebook/></a>
          <a href="http://instagram.com"><FaInstagram/></a>
          <a href="http://twitter.com"><FaTwitter/></a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Balaji Website All Rights Reserved</small>
        </div>
      </footer>
  )
}

export default Footer