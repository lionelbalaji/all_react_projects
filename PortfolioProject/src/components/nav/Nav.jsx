import React, { useState } from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
const Nav = () => {

  const[activenav,setActivenav]=useState('#')
  return (
    <nav>
     <a href="#"   onClick={() =>setActivenav("#")} className={activenav==='#'?'active':''}><FaHome/></a>
     <a href="#about" onClick={()=>setActivenav("#about")} className={activenav==='#about'?'active':''}><FaUser/></a>
     <a href="#experience"   onClick={()=>setActivenav("#experience")} className={activenav==='#experience'?'active':''}>< FaBookReader/></a>
     <a href="#services"  onClick={()=>setActivenav("#services")} className={activenav==='#services'?'active':''}>< MdMiscellaneousServices/></a>
     <a href="#contact"   onClick={()=>setActivenav("#contact")} className={activenav==='#contact'?'active':''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav