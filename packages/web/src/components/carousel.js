import React, { useState } from "react"
import SwiperCore, { Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import Img from "gatsby-image"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

SwiperCore.use([Thumbs])

const Carousel = ({ images, productName, placeholder }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setOpen] = useState(false)

  if (images.length > 0) {
    return (
      <>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].image.asset.fluid.src}
            nextSrc={
              images[(photoIndex + 1) % images.length].image.asset.fluid.src
            }
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].image
                .asset.fluid.src
            }
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        <Swiper
          thumbs={{
            swiper: thumbsSwiper,
            slideThumbActiveClass: "thumb-is-active",
          }}
          autoHeight
          slidesPerView={1}
        >
          {images.map((slide, index) => {
            if (slide.alt === null) {
              slide.alt = productName + "-" + (index + 1)
            }
            return (
              <SwiperSlide key={slide.image.asset.fluid.src}>
                <button className="w-full h-full" onClick={() => setOpen(true)}>
                  <Img
                    fluid={slide.image.asset.fluid}
                    className="carousel-image block object-cover w-full"
                    alt={slide.alt}
                  />
                </button>
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
      </>
    )
  } else {
    return <Img fluid={placeholder} />
  }
}
export default Carousel
