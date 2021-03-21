import React, { useState } from "react"
import SwiperCore, { Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import Img from "gatsby-image"
import Lightbox from "./lightbox"

SwiperCore.use([Thumbs])

const Carousel = ({ images, productName, placeholder }) => {
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
          {images.map((slide, index) => {
            if (slide.alt === null) {
              slide.alt = productName + "-" + (index + 1)
            }
            return (
              <SwiperSlide key={slide.image.asset.fluid.src}>
                <Lightbox image={slide.image.asset.fluid.src}>
                  <Img
                    fluid={slide.image.asset.fluid}
                    className="carousel-image block object-cover w-full"
                    alt={slide.alt}
                  />
                </Lightbox>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          className="md:pb-2 px-1"
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          watchSlidesVisibility
          watchSlidesProgress
        >
          {images.map(slide => (
            <SwiperSlide key={slide.image.asset.fluid.base64} className="">
              <Img
                fluid={slide.image.asset.fluid}
                className="lg:h-20 object-cover w-full h-16 p-1 mt-1 rounded-lg"
                alt=""
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
