import React, { useRef, useState } from 'react'
import './App.css'
const App = () => {
    const[color,setColor]=useState('')
    const[containerstyle,setContainerstyle]=useState({})
    const inputref=useRef()
    const stylecont=() =>{
       const newstyle={
        backgroundColor:color
       }
       setContainerstyle(newstyle)
      inputref.current.value=''
    }
  return (
    <div className='container'>
      <div className="container2" style={containerstyle}>
         
         </div>
         <div className="div2">
         <input type="text" placeholder='change color' onChange={(e)=>setColor(e.target.value)} autoFocus ref={inputref}/>
        <button onClick={stylecont} className='button'>change</button>
         </div>
        
        
    </div>
  )
}

export default App