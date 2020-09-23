import React, { useState } from "react"
import SwiperCore, { Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

SwiperCore.use([Thumbs])

const options = {
  settings: {
    overlayColor: "#000000E6",
    autoplaySpeed: 0,
    slideAnimationType: "fade",
    disableWheelControls: true,
  },
  buttons: {
    showDownloadButton: false,
    showThumbnailsButton: false,
    size: "50px",
    showNextButton: true,
    showPrevButton: true,
  },
  caption: {
    showCaption: false,
  },
  translations: {
    closeText: "Затвори",
    fullscreenText: "Цял Екран",
    nextText: "Напред",
    previousText: "Назад",
  },
}

const Carousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <Swiper thumbs={{ swiper: thumbsSwiper }} className="">
            {images.map(slide => (
              <SwiperSlide key={slide.src}>
                <img
                  src={`${slide.image.fluid.src}`}
                  data-srcset={`${slide.image.fluid.srcSet}`}
                  data-sizes="auto"
                  className="lazyload block w-full"
                  alt={`${slide.image.url}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SRLWrapper>
      </SimpleReactLightbox>
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
