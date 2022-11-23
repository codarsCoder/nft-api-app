import React from 'react'
import Carousel,{WithStyles} from 'react-multi-carousel'
import Card from './Card'

const pCarousel2 = (pokemon) => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={1000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={2}
    swipeable
  >
  
    {/* // pokemon.map((item, ind) => {
    //     console.log(item)
    //     return (
    //        <div key={ind}>
    //         <Card  {...item} pokemon={pokemon} crsl={"crsl"}  />
    //        </div>  
    //     )
    // })  


  } */}
       <>
       <div>asdasd</div>
   <div>asdasd</div>
   <div>asdasd</div>
   <div>asdasd</div>
    </>
  </Carousel>
  )
}

export default pCarousel2