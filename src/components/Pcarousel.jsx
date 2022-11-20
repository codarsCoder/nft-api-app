import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Card from "./Card";


function Pcarousel({pokemon}) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [prv, setPrv] = useState(4)
  const handleResize = ()=>{
    setScreenWidth(window.innerWidth)
   if(screenWidth <= 768){
    setPrv(1)
   }else if(screenWidth > 768 && screenWidth <= 992){
    setPrv(2)
   }
   else if(screenWidth > 992 && screenWidth <= 1600){
    setPrv(3)
   }else if(screenWidth > 1600){
    setPrv(4)
   }
  } 
  window.addEventListener('resize', handleResize)


  return (
    <>
      <Swiper
        modules={[Pagination,Autoplay]}
        slidesPerView={`${prv}`}
        spaceBetween={5}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
         {
                pokemon.map((item, ind) => {
                    return (
                       <SwiperSlide key={ind}>  <Card  {...item} pokemon={pokemon} crsl={"crsl"}  /></SwiperSlide>
                    )
                })
            }

      </Swiper>
    </>
  );
}

export default Pcarousel;