import React from "react"
import ImageGallery from "react-image-gallery"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Lightbox from "./lightbox"
import "react-image-gallery/styles/css/image-gallery.css"

const Carousel = ({ images }) => {
  return (
    <div>
      <ImageGallery
        lazyLoad
        infinite={false}
        showPlayButton={false}
        items={images.map(slide => ({
          original: slide.image.fluid.src,
          thumbnail: slide.image.fluid.src,
          srcSet: slide.image.fluid.srcSet,
          originalClass: "lazyload",
          thumbnailClass: "lazyload",
          sizes: "auto",
        }))}
      />
    </div>
  )
}
export default Carousel
