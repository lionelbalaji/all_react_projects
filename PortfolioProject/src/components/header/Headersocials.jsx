import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
const Headersocials = () => {
  return (
    <div className='header_socials'>
         <a href="http://linkedin.com" target='_blank'><FaLinkedin/></a>
         <a href="http://github.com" target='_blank'><FaGithub/></a>
         <a href="http://dribble.com" target='_blank'><FaDribbble/></a>
    </div>
  )
}

export default Headersocials