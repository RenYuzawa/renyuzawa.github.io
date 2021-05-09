import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Btn from "../components/btn"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styles from "../scss/components/gallery.module.scss"

const Gallery = () => {
  // Slick Option
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: `20%`,
    className: Styles.gallerySlider,
  }
  return (
    <section className='section'>
      <div className='section__inner'>
        <h2 className='section__title'>Gallery</h2>
      </div>
      <Slider {...settings}>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_01.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>大本堂</figcaption>
        </figure>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_02.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>大山門</figcaption>
        </figure>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_03.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>不動堂</figcaption>
        </figure>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_04.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>不動門</figcaption>
        </figure>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_05.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>薬師殿</figcaption>
        </figure>
        <figure className={Styles.gallerySlider__figure}>
          <StaticImage
            src="../images/top/g_06.jpg"
            alt="平間寺のイメージ"
            style={{
              height: `100%`
            }}
          />
          <figcaption>中興塔</figcaption>
        </figure>
      </Slider>
      <div className='section__inner'>
        <span className='section__num'>02</span>
        <Btn url="/gallery" text="See More" />
      </div>
    </section>
  )
}

export default Gallery;