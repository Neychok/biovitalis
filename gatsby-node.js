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
            data {
              category {
                uid
              }
            }
            uid
          }
        }
      }
    }
  `)

  // Creates a page for every category
  result.data.allPrismicProduct.edges.forEach(({ node }) => {
    createPage({
      path: "/продукти/" + node.data.category.uid + "/" + node.uid,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.uid,
      },
    })
  })

  // Create a page for every product
  result.data.allPrismicCategory.edges.forEach(({ node }) => {
    createPage({
      path: "/продукти/" + node.uid,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.uid,
        categoryName: node.name,
      },
    })
  })
}
