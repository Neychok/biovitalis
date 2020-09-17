import React, { useState } from "react"
import SwiperCore, { Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"

SwiperCore.use([Thumbs])

const Carousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div>
      <Swiper thumbs={{ swiper: thumbsSwiper }} className="">
        {images.map(slide => (
          <SwiperSlide key={slide.src}>
            <img
              src={`${slide.image.fluid.src}`}
              srcSet={`${slide.image.fluid.base64}`}
              data-srcset={`${slide.image.fluid.srcSet}`}
              data-sizes="auto"
              className="lazyload block w-full"
              alt={`${slide.image.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper onSwiper={setThumbsSwiper} spaceBetween={2} slidesPerView={3}>
        {images.map(slide => (
          <SwiperSlide key={slide.src} className="">
            <img
              src={`${slide.image.fluid.src}`}
              srcSet={`${slide.image.fluid.base64}`}
              data-srcset={`${slide.image.fluid.srcSet}`}
              data-sizes="auto"
              className="lazyload object-cover w-full h-20 p-1 mt-1 rounded-lg opacity-75"
              alt={`${slide.image.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
