import * as React from "react"
import * as Styles from "../scss/page/gallery.module.scss"
import { StaticImage} from "gatsby-plugin-image"

interface props {
  src: string;
  alt: string;
}

const GalleryFigure = (props: props) => {
  return (
    <figure className={Styles.columns__figure}>
      <StaticImage src="../images/top/g_01.jpg" alt={props.alt} />
    </figure>
  )
}

export default GalleryFigure;