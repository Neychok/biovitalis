import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />
      <div className="text-xl text-left ml-3 mb-1">Категории продукти</div>
      <hr className="hr-line"></hr>
      <div className="flex flex-wrap">
        {document.map(node => {
          return (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 px-3 py-0">
              <Link to={node.node.url} className="">
                <img
                  src={node.node.data.image.url}
                  alt={node.node.data.name}
                  className="w-full mb-0 rounded-t-lg"
                ></img>
                <div className="text-sm px-1 py-2 category-product-name rounded-b-lg shadow-lg">
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
