import * as React from "react"
import { StaticImage,GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../scss/components/article.module.scss"
import Btn from "../components/btn"
import ArticleCard from "../components/articleCard"

const Article = (props: any) => {
  return (
    <section className='section'>
      <div className='section__inner'>
        <h2 className='section__title'>Article</h2>
        <ArticleCard data={props.data}/>
        <span className='section__num'>03</span>
        <Btn url="/article" text="See More"/>
      </div>
    </section>
  )
}

export default Article;