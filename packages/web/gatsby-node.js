const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query CreatePageQuery {
      allSanitySection {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityJuicePressingCategory {
        edges {
          node {
            slug {
              current
            }
            section {
              slug {
                current
              }
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
              section {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `)

  // Create a page for every section
  result.data.allSanitySection.edges.forEach(({ node }) => {
    if (node.slug !== null) {
      createPage({
        path: "/" + node.slug.current.toLowerCase(),
        component: path.resolve(`./src/templates/section.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug.current,
        },
      })
    }
  })
  // Create a page for every category
  result.data.allSanityJuicePressingCategory.edges.forEach(({ node }) => {
    if (node.slug !== null && node.section.slug !== null) {
      createPage({
        path:
          "/" +
          node.section.slug.current.toLowerCase() +
          "/" +
          node.slug.current.toLowerCase(),
        component: path.resolve(`./src/templates/category.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug.current,
        },
      })
    }
  })
  // Creates a page for every product
  result.data.allSanityJuicePressingProduct.edges.forEach(({ node }) => {
    if (node.tabs.slug !== null && node.category !== null) {
      createPage({
        path:
          "/" +
          node.category.section.slug.current.toLowerCase() +
          "/" +
          node.category.slug.current.toLowerCase() +
          "/" +
          node.tabs.slug.current.toLowerCase(),
        component: path.resolve(`./src/templates/single-product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.tabs.slug.current,
        },
      })
    }
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
