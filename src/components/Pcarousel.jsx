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

  // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const [prv, setPrv] = useState(4)
  // const handleResize = ()=>{
  //   setScreenWidth(window.innerWidth)
  //   if(screenWidth > 1600){
  //     setPrv(4)
  //    }
  //  if(screenWidth <= 768){
  //   setPrv(1)
  //  } if(screenWidth > 768 && screenWidth <= 992){
  //   setPrv(2)
  //  }
  //   if(screenWidth > 992 && screenWidth <= 1600){
  //   setPrv(4)
  //  }
  // } 
  // window.addEventListener('resize', handleResize)


  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          640: {
            width:610,
            slidesPerView: 2,
          },
          768: {
            width:730,
            slidesPerView: 2,
          },
        
          // when window width is >= 768px
          1091: {
            width: 800,
            slidesPerView: 3,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
        }}
        modules={[Pagination,Autoplay]}
        slidesPerView={4}   // slidesPerView={`${prv}`}
        spaceBetween={10}
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