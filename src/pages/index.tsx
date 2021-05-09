import * as React from "react"
import Layout from "../foundation/layout"
import Mv from "../components/mv"
import About from "../components/about"
import Gallery from "../components/gallery"
import Article from "../components/article"
import "../scss/page/top.scss"

const topPage = ({ data }: any) => {
  return (
    <Layout>
      <Mv />
      <About />
      <Gallery />
      <Article/>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allContentfulPost {
//       edges {
//         node {
//           title
//           updatedAt(formatString: "YYYY-MM-DD", locale: "ja-JP")
//           slug
//           cover {
//             gatsbyImageData(placeholder: BLURRED)
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default topPage
