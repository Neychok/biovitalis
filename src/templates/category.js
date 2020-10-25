import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"

const CategoryPage = ({ data }) => {
  const document = data.allPrismicProduct.edges
  return (
    <>
      <SEO title="Home" />

      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" className="w-full h-5 mt-1 mb-3">
        <Link to="/sokoproizvodstvo/" className="mb-0">
          Продукти
        </Link>
        <p className="mb-0">{data.allPrismicCategory.edges[0].node.uid}</p>
      </Breadcrumbs>

      {/* Back Button */}
      <div className="flex">
        <Link
          to={`/sokoproizvodstvo/`}
          className="text-primary-black flex items-center py-2"
        >
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M11 19l-7-7 7-7"
            />
          </svg>
          <span>Назад</span>
        </Link>
      </div>

      {/* Name of category */}
      <div className="text-primary-black pt-2 pb-3 text-xl">
        {data.allPrismicCategory.edges[0].node.data.name}
      </div>
      <hr className="hr-line"></hr>

      {/* Category list */}
      <div className="flex flex-wrap">
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
                    src={node.node.data.featured_image.fluid.base64}
                    data-srcset={node.node.data.featured_image.fluid.srcSet}
                    data-sizes="auto"
                    className="lazyload block w-full mb-0 rounded-t"
                    alt={node.node.data.featured_image.url}
                  />
                  <div className="category-product-name text-primary-black px-2 py-1 text-sm">
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
              url(imgixParams: { height: 250 })
              fluid {
                base64
                src
                srcSet
              }
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
