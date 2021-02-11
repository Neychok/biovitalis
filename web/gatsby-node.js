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

  // Creates a page for every product
  result.data.allPrismicProduct.edges.forEach(({ node }) => {
    createPage({
      path: "/sokoproizvodstvo/" + node.data.category.uid + "/" + node.uid,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.uid,
      },
    })
  })

  // Create a page for every category
  result.data.allPrismicCategory.edges.forEach(({ node }) => {
    createPage({
      path: "/sokoproizvodstvo/" + node.uid,
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

// Fixes "React-Hot-Loader: react-🔥-dom patch is not detected."
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
