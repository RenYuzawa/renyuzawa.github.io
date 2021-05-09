import * as React from "react"
import Layout from "../foundation/layout"
import LowerMv from "../components/lowerMv"
import * as Styles from "../scss/page/article.module.scss"
import ArticleCard from "../components/articleCard"

const Article = () => {
  return (
<Layout>
      <LowerMv title="Article" />
      <div className={Styles.contents}>
        <ArticleCard/>
      </div>
    </Layout>
  )
}


export default Article;