import * as React from "react"
import Layout from "../foundation/layout"
import LowerMv from "../components/lowerMv"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../scss/template/article.module.scss"
import ArticleCard from "../components/articleCard"

const Article = ({ pageContext }: any) => {
  const { title, cover } = pageContext.post;
  const body = pageContext.post.body.childMarkdownRemark.html;
  return (
    <Layout>
      <LowerMv title={title}>
        <GatsbyImage
          image={cover.gatsbyImageData}
          alt={cover.title}
          style={{
            height: `100%`
          }}
        />
      </LowerMv>
      <div className={Styles.contents}>
        <article className={Styles.article} dangerouslySetInnerHTML={{ __html: body }} />
        <section className={Styles.suggest}>
          <h2 className={Styles.suggest__title}>他の記事を見る</h2>
          <ArticleCard />
        </section>
      </div>
    </Layout>
  )
}

export default Article;