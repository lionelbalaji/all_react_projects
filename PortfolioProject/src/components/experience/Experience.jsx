import React from 'react'
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";
const Experience = () => {
  return (
    <section id='experience'>
     <h5>Skills I Have</h5>
     <h2>My Experience</h2>

     <div className="container experience_container">
      <div className="experience_frontend">
        <h2>Frontend Development</h2>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCircleCheck  className='experience_details_icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck     className='experience_details_icon'/>
             <div> <h4>CSS</h4>
              <small className='text-light'>Experienced</small>  
              </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck className='experience_details_icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck   className='experience_details_icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck  className='experience_details_icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      
      {/* END OF FRONTEND */}
    
      <div className="experience_backend">
        <h2>Backend Development</h2>
          <div className="experience_content">
            <article className='experience_details'>
              <FaCircleCheck className='experience_details_icon'/>
              <div>
              <h4>NODE JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck  className='experience_details_icon'/>
             <div>
             <h4>mongoDB</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <FaCircleCheck  className='experience_details_icon'/>
             <div>
             <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Experience;