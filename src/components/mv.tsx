import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../scss/components/mv.module.scss"

const Mv = () => {
  return (
    <section className={Styles.mv}>
      <div className={Styles.mv__box}>
        <h1 className={Styles.mv__title}><span>HEIKENJI</span></h1>
        <p className={Styles.mv__intro}>Kawasaki Daishi is the popular name of Heiken-ji , a Buddhist temple in Kawasaki, Japan. Founded in 1128, it is the headquarters of the Chizan sect of Shingon Buddhism. Kawasaki Daishi is a popular temple for hatsumōde. In 2006, 2.72 million people engaged in hatsumōde here, the third largest figure in Japan and the largest in Kanagawa Prefecture. In 2016, the temple made preparations to receive 3 million visitors over the same period.</p>
      </div>
      <StaticImage
        src="../images/top/mv.jpg"
        alt="平間寺のイメージ"
        layout="fullWidth"
        loading="eager"
        style={{
          height: `100%`
        }}
      />
    </section>
  )
}

export default Mv;
