import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"

const CategoryPage = ({ data }) => {
  const document = data.allPrismicProduct.edges
  return (
    <>
      <SEO title="Home" />

      <Breadcrumbs aria-label="breadcrumb" className="w-full px-4">
        <Link to="/продукти/" className="mb-0">
          Продукти
        </Link>
        <p className="mb-0">{data.allPrismicCategory.edges[0].node.uid}</p>
      </Breadcrumbs>

      {/* Back Button */}
      <div className="py-1">
        <Link to={`/продукти/`} className="">
          <svg
            className="h-10 pl-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#014D40"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

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
              className="md:w-1/3 lg:w-1/4 xl:w-1/6 w-1/2 px-1 py-0 mb-4"
            >
              <Paper>
                <Link to={node.node.url} className="">
                  <img
                    src={node.node.data.featured_image.url}
                    alt={node.node.data.product_name.text}
                    className="mb-0 rounded-t"
                  ></img>
                  <div className="category-product-name px-2 py-1 text-sm">
                    {node.node.data.product_name.text}
                  </div>
                </Link>
              </Paper>
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
            featured_image {
              url
            }
          }
        }
      }
    }
    allPrismicCategory(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          uid
          data {
            name
          }
        }
      }
    }
  }
`

export default CategoryPage
