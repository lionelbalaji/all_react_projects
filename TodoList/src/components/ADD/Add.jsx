import React from 'react'
import './add.css'
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Add = ({additem,setAdditem,localstore,inputref,addlocal,handledeleteitem,handlecheckbox}) => {
  return (
    <div className='container_add'>
       <input className='input' type="text" placeholder='enter the text' ref={inputref} onChange={(e) => setAdditem(e.target.value)}/>
       <button className='btn btn_click' onClick={localstore}><FaPlus /></button>
         <ul className='addul'>
          {
            addlocal.map((item,index) =>(
              <li className='addli' key={item.index}><input type="checkbox"  className='checkbox' checked={item.checked} onChange={()=>handlecheckbox(index)}/><span className='liitem'>{item.item}</span>
               <button className='trashbutton' onClick={()=>handledeleteitem(item.id)}><FaRegTrashAlt /></button></li>
            ))
          }
         </ul>
       {/* <h1>{additem}</h1> */}

    </div>
  )
}

export default Add