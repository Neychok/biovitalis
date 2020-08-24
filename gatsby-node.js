const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPrismicProduct {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
  result.data.allPrismicProduct.edges.forEach(({ node }) => {
    createPage({
      path: node.uid,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.uid,
      },
    })
  })
}
