import React from 'react'
import './testimonial.css'
import avatar1 from '../../assests/avatar1.jpg'
import avatar2 from '../../assests/avatar2.jpg'
import avatar4 from '../../assests/avatar4.jpg'
import avatar5 from '../../assests/avatar5.jpg'

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';









const Testimonial = () => {
  const data=[
    {
      id:1,
      image:avatar1,
      client_name:'Uchicha Itachi',
      client_review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam quibusdam incidunt consequatur maxime eaque soluta dolores et! Quos obcaecati rerum necessitatibus nihil,maiores consectetur fuga voluptates voluptate possimus aliquid!'
    },{
      id:2,
      image:avatar2,
      client_name:'Ino',
      client_review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam quibusdam incidunt consequatur maxime eaque soluta dolores et! Quos obcaecati rerum necessitatibus nihil,maiores consectetur fuga voluptates voluptate possimus aliquid!'
    },{
      id:3,
      image:avatar4,
      client_name:'Might Guy',
      client_review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam quibusdam incidunt consequatur maxime eaque soluta dolores et! Quos obcaecati rerum necessitatibus nihil,maiores consectetur fuga voluptates voluptate possimus aliquid!'
    },{
      id:4,
      image:avatar5,
      client_name:'Uchiha Shusui',
      client_review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam quibusdam incidunt consequatur maxime eaque soluta dolores et! Quos obcaecati rerum necessitatibus nihil,maiores consectetur fuga voluptates voluptate possimus aliquid!'
    }
  ]
  return (
    <section id='testimonial'>
     <h5>Review From Clients</h5>
     <h2>Testimonials</h2>

     <Swiper className="container testimonial_container"
     modules={[ Pagination,A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({id,image,client_name,client_review}) =>{
          return(
            <SwiperSlide key={id} className="testimonial">
            <div className="clients_avatar">
              <img src={image} alt="" />
              </div>
              <h5 className='clients_name'>{client_name}</h5>
              <small className='clients_review'>{client_review}</small>
            
          </SwiperSlide>
          )
        })
      }
      
     </Swiper>
      </section>
  )
}

export default Testimonial