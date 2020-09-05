import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />
      <ul className="flex flex-wrap justify-center">
        {document.map(node => {
          return (
            <Link
              to={node.node.url}
              className="w-2/5 rounded shadow-lg mx-2 mb-4"
            >
              <img
                src={node.node.data.image.url}
                alt={node.node.data.name}
                className="w-full"
              ></img>
              <div className="px-2 py-1">{node.node.data.name}</div>
            </Link>
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
            image {
              url
            }
          }
          url
          id
        }
      }
    }
  }
`

export default ProductsPage
