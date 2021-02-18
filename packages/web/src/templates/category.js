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
      <div className="md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4">
        <div className="md:h-screen md:flex md:flex-col hidden col-start-1 col-end-1 bg-white shadow">
          <Link
            to="/sokoproizvodstvo"
            className="hover:opacity-100 opacity-70 flex items-center py-1 pl-4 my-2"
          >
            <svg
              className="h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 19l-7-7 7-7"
              />
            </svg>
            Обратно към списък
          </Link>
          <p className="p-3 mb-5 text-2xl border-t border-b">Категории</p>
          {data.allCategories.edges.map(node => {
            return (
              <Link
                to={node.node.url}
                className="hover:border-opacity-80 hover:bg-green-500 hover:bg-opacity-10 border-opacity-25 pl-5 py-2.5 border-b border-green-500"
                activeClassName="bg-green-500 bg-opacity-25 hover:bg-opacity-25"
              >
                {node.node.data.name}
              </Link>
            )
          })}
        </div>
        <div className="xl:col-end-7 lg:col-end-6 md:col-end-5 col-start-2">
          <div className="px-3 mb-5">
            <div className="md:flex-row-reverse md:flex">
              {/* Breadcrumbs */}
              <Breadcrumbs
                aria-label="breadcrumb"
                className="w-full h-5 mt-1 mb-3"
              >
                <Link to="/sokoproizvodstvo/" className="mb-0">
                  Продукти
                </Link>
                <p className="mb-0">{data.category.edges[0].node.uid}</p>
              </Breadcrumbs>

              {/* Back Button */}
              <Link
                to={`/sokoproizvodstvo/`}
                className="scrollToContact md:hidden focus:bg-gray-200 hover:bg-gray-200 inline-flex items-center py-1 pl-3 pr-4 my-1 text-center bg-white border-b-0 rounded-md shadow"
              >
                <svg
                  className="h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 19l-7-7 7-7"
                  />
                </svg>
                <p>Назад</p>
              </Link>
            </div>
            {/* Name of category */}
            <h1 className="text-primary-black pt-2 pb-3 text-xl">
              {data.category.edges[0].node.data.name}
            </h1>
            <hr className="hr-line"></hr>
          </div>

          {/* Category list */}
          <div className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 px-2">
            {document.map(node => {
              return (
                // Container for item
                <div key={node.node.id} className="grid-span-1 px-1 py-0 mb-4">
                  <Paper className="hover:shadow-lg">
                    <Link to={node.node.url} className="">
                      <img
                        src={node.node.data.featured_image.fluid.base64}
                        data-srcset={node.node.data.featured_image.fluid.srcSet}
                        data-sizes="auto"
                        className="lazyload block w-full mb-0 rounded-t"
                        alt={node.node.data.featured_image.url}
                      />
                      <div className="category-product-name text-primary-black px-2 pt-2 pb-1">
                        {node.node.data.product_name.text}
                      </div>
                    </Link>
                  </Paper>
                </div>
              )
            })}
          </div>
        </div>
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
    category: allPrismicCategory(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          uid
          data {
            name
          }
        }
      }
    }
    allCategories: allPrismicCategory {
      edges {
        node {
          url
          data {
            name
          }
        }
      }
    }
  }
`

export default CategoryPage
