import React, { useState } from "react"
import SwiperCore, { Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import Img from "gatsby-image"
import Lightbox from "./lightbox"

SwiperCore.use([Thumbs])

const Carousel = ({ images, placeholder }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  if (images.length > 0) {
    return (
      <div>
        <Swiper
          thumbs={{
            swiper: thumbsSwiper,
            slideThumbActiveClass: "thumb-is-active",
          }}
          className=""
          autoHeight
          slidesPerView={1}
        >
          {images.map(slide => (
            <SwiperSlide key={slide.image.asset.fluid.src}>
              <Lightbox image={slide.image.asset.fluid.src}>
                <Img
                  fluid={slide.image.asset.fluid}
                  className="carousel-image block object-cover w-full"
                />
              </Lightbox>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className="md:pb-2 px-2"
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={4}
        >
          {images.map(slide => (
            <SwiperSlide key={slide.image.asset.fluid.base64} className="">
              <Img
                fluid={slide.image.asset.fluid}
                className="lg:h-20 object-cover w-full h-16 p-1 mt-1 rounded-lg opacity-75"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  } else {
    return <Img fluid={placeholder} />
  }
}
export default Carousel
