import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />

      {/* Categories Title */}
      <div className="md:text-2xl md:mb-4 px-3 mt-8 mb-2 text-xl text-center">
        <h1 className="mb-1 font-semibold">Машини за сокопроизводство</h1>
        <h3 className="md:text-xl text-base">Категории:</h3>
      </div>
      <hr className="hr-line md:mb-8 mx-auto mb-3"></hr>

      {/* Categories List */}
      <div className="md:px-4 flex flex-wrap px-2">
        {document.map(node => {
          return (
            <div
              key={node.node.id}
              className="md:w-1/3 lg:w-1/4 w-1/2 px-1 py-0 mb-4"
            >
              <Paper elevation={1}>
                <Link to={node.node.url} className="">
                  <img
                    src={node.node.data.image.fluid.base64}
                    data-srcset={node.node.data.image.fluid.srcSet}
                    data-sizes="auto"
                    className="lazyload block w-full mb-0 rounded-t"
                    alt={node.node.data.image.url}
                  />
                  <div className="category-product-name lg:text-lg sm:text-base px-2 pt-2 pb-1 text-sm text-center">
                    {node.node.data.name}
                  </div>
                  <div className="sm:flex items-center justify-center hidden w-full pb-2">
                    <button className="border-color-primary-1000 primary-1000 w-1/4 border rounded-full">
                      Виж
                    </button>
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
              fluid(maxWidth: 350) {
                src
                srcSet
                base64
              }
            }
          }
          url
        }
      }
    }
  }
`
export default ProductsPage
