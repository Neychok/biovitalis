const indexName = `prod_products`

const productQuery = `{
    allPrismicProduct {
        edges {
          node {
            id
            data {
                product_name {
                    text
                }
            }
          }
        }
      }`

function productToAlgoliaRecord({ node: { id, productName } }) {
  return {
    objectID: id,
    ...productName,
  }
}

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allPrismicProduct.edges.map(productToAlgoliaRecord),
    indexName,
  },
]

module.exports = queries
