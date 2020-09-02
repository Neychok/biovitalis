import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />
      <h1>This is the Categories Page</h1>
      <ul>
        {document.map(node => {
          return (
            <li key={node.node.id}>
              <Link to={node.node.url}>{node.node.data.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const query = graphql`
  {
    allPrismicCategory {
      edges {
        node {
          data {
            name
          }
          url
          id
        }
      }
    }
  }
`

export default ProductsPage
