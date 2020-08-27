const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPrismicCategory {
        edges {
          node {
            uid
            id
          }
        }
      }
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
      path: "/продукт/" + node.uid,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.uid,
      },
    })
  })

  result.data.allPrismicCategory.edges.forEach(({ node }) => {
    createPage({
      path: "/категория/" + node.uid,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.prismicId,
        slug: node.uid,
      },
    })
  })
}
