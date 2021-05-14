import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./partnership.css";
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);


export default function App({slides}) {
  


  let slider=(slide,index)=>{
    return(
      <SwiperSlide key={index}>
        <img src={slide.image}/>
      </SwiperSlide>
      
    )
  }
  
  return (
    <div id="partnership" className="container bgd mb-5">
      <div className="row">
                <div className="col-md-5">
                    <h4>MEET OUR</h4>
                    <h5><strong>TEAM</strong></h5>
                </div>
                <div className="col-md-7">
                    <nav className="navbar navbar-expand-lg mt-4 mb-4">
                        <div className="collapse navbar-collapse">
                             <p className="nav-item active ml-3">We design brand experiences</p>
                        </div>
                    </nav>
                </div>
      </div>
    <Swiper slidesPerView={4} spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper">
    {slides.map(slider)}
  </Swiper>
    </div>
  )
}