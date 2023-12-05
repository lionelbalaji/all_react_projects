import React, { useState } from 'react'
import './App.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const App = () => {
  const [number,setNumber]=useState(0)
  
 
  return (
    <div className='container'>
      <button onClick={() =>setNumber(number+1)}  className='btn'><FaPlus /></button>
      
      <h1 className="number">{number}</h1>
      
     
         <button  onClick={() =>setNumber(number>0?number-1:number)}  className='btn'><FaMinus /></button>
    </div>
  )
}

export default App