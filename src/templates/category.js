import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

const CategoryPage = ({ data }) => {
  const document = data.allPrismicProduct.edges
  return (
    <>
      <SEO title="Home" />

      {/* Name of category */}
      <div className="mb-1 ml-3 text-xl text-left">
        {data.allPrismicCategory.edges[0].node.data.name}
      </div>
      <hr className="hr-line"></hr>

      {/* Category list */}
      <div className="flex flex-wrap px-1">
        {document.map(node => {
          return (
            // Container for item
            <div
              key={node.node.id}
              className="md:w-1/3 lg:w-1/4 xl:w-1/6 w-1/2 px-2 py-0 mb-4"
            >
              <Link to={node.node.url} className="">
                <img
                  src={node.node.data.main_image.url}
                  alt={node.node.data.product_name.text}
                  className="w-full mb-0 rounded-t-lg"
                ></img>
                <div className="category-product-name px-1 py-2 text-sm rounded-b-lg shadow-lg">
                  {node.node.data.product_name.text}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

//! QUERY that gets product ID, URL, Name, URL of image and category name
export const query = graphql`
  query($slug: String!) {
    allPrismicProduct(filter: { data: { category: { uid: { eq: $slug } } } }) {
      edges {
        node {
          id
          url
          data {
            product_name {
              text
            }
            main_image {
              url
            }
          }
        }
      }
    }
    allPrismicCategory(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          data {
            name
          }
        }
      }
    }
  }
`

export default CategoryPage
