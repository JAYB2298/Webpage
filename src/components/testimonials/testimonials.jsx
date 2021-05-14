import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./testimonials.css";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import imgone from "../../assets/testimonials/logo1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

SwiperCore.use([Pagination]);


export default function App({imgg}) {
  
  let data=[
            {image:imgone,name:"Bhagyesh",dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:'yash',dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:'Sapan',dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:"Bhagyesh",dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:'yash',dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:'Sapan',dis:`Lorem ipsum sit amet, teur dispensing send do`},
            {image:imgone,name:'Anupam',dis:`Lorem ipsum sit amet, teur dispensing send do`}
           ]

  let slider=(slide,index)=>{
    return(
      <SwiperSlide key={index}>
        <div className="row">
          <div className="card">
            <div className="card-header">
              <img src={slide.image} className="img g"/>
            </div>
          </div>
            <div className="card mt-2 bg-transparent">
                <h6>{slide.name}</h6>
                <p>{slide.dis}</p>
            </div>
        </div>
      </SwiperSlide>
      
    )
  }
  
  return (
    <div id="testimonials" className="container  bt-4">
    <Swiper slidesPerView={3} spaceBetween={90}  className="mySwiper">
      <div className="row">
       <div className="phone">
      <img src={imgg.img}/>
    
    </div>
    <div className="row">
    </div>
    </div>
    {data.map(slider)}
  </Swiper>
    </div>
  )
}