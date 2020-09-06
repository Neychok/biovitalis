import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />
      <div className="mb-1 ml-3 text-xl text-left">Категории продукти</div>
      <hr className="hr-line"></hr>
      <div className="flex flex-wrap px-1">
        {document.map(node => {
          return (
            <div
              key={node.node.id}
              className="md:w-1/3 lg:w-1/4 xl:w-1/6 w-1/2 px-2 py-0 mb-4"
            >
              <Link to={node.node.url} className="">
                <img
                  src={node.node.data.image.url}
                  alt={node.node.data.name}
                  className="w-full mb-0 rounded-t-lg"
                ></img>
                <div className="category-product-name px-1 py-2 text-sm rounded-b-lg shadow-lg">
                  {node.node.data.name}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const query = graphql`
  {
    allPrismicCategory {
      edges {
        node {
          id
          data {
            name
            image {
              url
            }
          }
          url
        }
      }
    }
  }
`

export default ProductsPage
