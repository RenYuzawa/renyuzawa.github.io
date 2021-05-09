import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../scss/components/article.module.scss"
import { graphql,useStaticQuery } from "gatsby"


const ArticleCard = ({ data }: any) => {
  const articleData = useStaticQuery(query)
  return (
    <ul className={Styles.list}>
          {articleData.allContentfulPost.edges.map((edge: any) => {
            return (
              <li className={Styles.list__item}>
                <a className={Styles.card} href={`/article/${edge.node.slug}`}>
                  <article className={Styles.card__inner}>
                    <figure className={Styles.card__figure}>
                      <GatsbyImage
                        image={edge.node.cover.gatsbyImageData}
                        alt={edge.node.cover.title}
                        style={{
                          height: `100%`
                        }}
                      />
                    </figure>
                    <h3 className={Styles.card__title}>{edge.node.title}</h3>
                    <time className={Styles.card__pub} dateTime={edge.node.updatedAt} itemProp="datepublished">{edge.node.updatedAt}</time>
                  </article>
                </a>
              </li>
            )
          })}
        </ul>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          title
          updatedAt(formatString: "YYYY-MM-DD", locale: "ja-JP")
          slug
          cover {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
        }
      }
    }
  }
`

export default ArticleCard;