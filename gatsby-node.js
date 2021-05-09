const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              updatedAt(formatString: "YYYY-MM-DD", locale: "ja-JP")
              slug
              body {
                body
                childMarkdownRemark {
                  html
                }
              }
              cover {
                gatsbyImageData(placeholder: BLURRED)
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost;

  edges.forEach(edge => {
    createPage({
      path: `/article/${edge.node.slug}/`,
      component: path.resolve("./src/template/article.tsx"),
      context: { post: edge.node }
    })
  });
}