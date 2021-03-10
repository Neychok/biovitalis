import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"

const CategoryPage = ({ data }) => {
  const products = data.allSanityJuicePressingProduct.edges
  return (
    <Layout>
      <SEO title="Home" />
      <div className="md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4">
        <div className="md:h-full md:flex md:flex-col hidden col-start-1 col-end-1 bg-white shadow">
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
          {data.allCategories.edges.map(category => {
            return (
              <Link
                to={"/sokoproizvodstvo/" + category.node.slug.current}
                key={category.node.slug.current}
                className="hover:border-opacity-80 hover:bg-green-500 hover:bg-opacity-10 border-opacity-25 pl-5 py-2.5 border-b border-green-500"
                activeClassName="bg-green-500 bg-opacity-25 hover:bg-opacity-25"
              >
                {category.node.name}
              </Link>
            )
          })}
        </div>
        <div className="xl:col-end-7 lg:col-end-6 md:col-end-5 col-start-2">
          <div className="md:ml-4 px-3 mb-5">
            <div className="md:flex-row-reverse md:flex">
              {/* Breadcrumbs */}
              <Breadcrumbs
                aria-label="breadcrumb"
                className="w-full py-1.5 mb-1"
              >
                <Link to="/sokoproizvodstvo/" className="mb-0">
                  Продукти
                </Link>
                <p className="mb-0">{data.category.slug.current}</p>
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
            <h1 className="text-primary-black md:text-2xl pt-2 pb-3 text-xl font-normal">
              {data.category.name}
            </h1>
            <hr className="hr-line"></hr>
          </div>

          {/* Product list */}
          <div className="lg:grid-cols-2 md:ml-4 grid grid-cols-1 px-2">
            {products.map(product => {
              return (
                // Container for item
                <div key={product.node.id} className="grid-span-1 md:mr-4 mb-4">
                  <Paper className="hover:shadow-lg h-36">
                    <Link
                      to={
                        "/sokoproizvodstvo/" +
                        data.category.slug.current +
                        "/" +
                        product.node.tabs.slug.current
                      }
                      className="grid w-full h-full grid-cols-10"
                    >
                      <Img
                        fluid={
                          product.node.tabs.gallery.length > 0
                            ? product.node.tabs.gallery[0].image.asset.fluid
                            : data.file.childImageSharp.fluid
                        }
                        className="2xl:col-span-2 xl:col-span-3 h-full col-span-4 rounded-l"
                      />
                      <div className="2xl:col-span-8 xl:col-span-7 grid grid-cols-1 col-span-6 grid-rows-5 pt-2 pl-2">
                        <div className="md:text-base max-h-12 row-span-2 overflow-hidden font-normal border-b">
                          {product.node.name}
                        </div>
                        {product.node.tabs.specifications
                          .slice(0, 3)
                          .map(spec => {
                            return (
                              <span
                                key={spec._key}
                                className="md:text-sm row-span-1 text-xs truncate"
                              >
                                {spec.spec_name.spec_name}: {spec.spec_value}
                              </span>
                            )
                          })}
                      </div>
                    </Link>
                  </Paper>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

//! QUERY that gets product ID, URL, Name, URL of image and category name
export const query = graphql`
  query($slug: String!) {
    allSanityJuicePressingProduct(
      filter: { category: { slug: { current: { eq: $slug } } } }
      sort: { order: ASC, fields: tabs___slug___current }
    ) {
      edges {
        node {
          id
          name
          tabs {
            slug {
              current
            }
            gallery {
              image {
                asset {
                  fluid(maxHeight: 550) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            specifications {
              _key
              spec_value
              spec_name {
                spec_name
              }
            }
          }
        }
      }
    }

    category: sanityJuicePressingCategory(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      name
    }
    allCategories: allSanityJuicePressingCategory {
      edges {
        node {
          name
          slug {
            current
          }
        }
      }
    }

    file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 550) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default CategoryPage
