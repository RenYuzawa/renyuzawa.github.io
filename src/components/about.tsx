import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../scss/components/about.module.scss"
import Btn from "../components/btn"

const About = () => {
  return (
    <section className={(Styles.about) + " " + 'section'}>
      <div className='section__inner'>
        <h2 className='section__title'>About</h2>
        <div className='section__split'>
          <div className='section__box'>
            <p className='section__intro'>平間兼乗は海中へ網を投げ入れたところ、弘法大師の木像を引き揚げた。兼乗は木像を洗い清め、花を捧げて供養していた。<br />やがて、近くに小堂を構えた。諸国遊化の途中に訪れた高野山の尊賢上人は、弘法大師の木像に纏わる話を聞き、兼乗と力をあわせ、1128年（大治3年）平間寺を建立した。1813年（文化10年）徳川幕府第11代将軍、家斉が訪れた。当寺への参詣客を輸送する目的で、1899年1月21日（初大師の縁日）に開業した大師電気鉄道は、現在の京浜急行電鉄の基となった。 毎年の正月には初詣の参拝客で大変な賑わいとなる。<br />2012年初詣客は296万人となり、全国3位、神奈川県1位を記録した。</p>
            <Btn url="/" text="See More" />
          </div>
          <figure className='section__figure'>
            <StaticImage
              src="../images/top/about.jpeg"
              alt="平間寺のイメージ"
              // layout="fullWidth"
              style={{
                height: `100%`
              }}
            />
          </figure>
          <span className='section__num'>01</span>
        </div>
      </div>
    </section>
  )
}

export default About;