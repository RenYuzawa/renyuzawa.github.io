import * as React from "react"
import Layout from "../foundation/layout"
import LowerMv from "../components/lowerMv"
import * as Styles from "../scss/page/gallery.module.scss"
import GalleryFigure from "../components/galleryFigure"


const GalleryPage = () => {
  return (
    <Layout>
      <LowerMv title="Gallery" />
      <div className={Styles.contents}>
        <div className={Styles.columns}>
          <GalleryFigure src="../images/top/g_01.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_02.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_03.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_04.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_05.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_06.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_01.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_02.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_03.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_04.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_05.jpg" alt="aaa" />
          <GalleryFigure src="../images/top/g_06.jpg" alt="aaa" />
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage