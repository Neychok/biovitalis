const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query CreatePageQuery {
      allSanityJuicePressingCategory {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityJuicePressingProduct {
        edges {
          node {
            tabs {
              slug {
                current
              }
            }
            category {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  // Creates a page for every product
  result.data.allSanityJuicePressingProduct.edges.forEach(({ node }) => {
    createPage({
      path:
        "/sokoproizvodstvo/" +
        node.category.slug.current +
        "/" +
        node.tabs.slug.current,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.tabs.slug.current,
      },
    })
  })

  // Create a page for every category
  result.data.allSanityJuicePressingCategory.edges.forEach(({ node }) => {
    createPage({
      path: "/sokoproizvodstvo/" + node.slug.current,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug.current,
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
