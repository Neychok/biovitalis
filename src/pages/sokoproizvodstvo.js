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
      <div className="px-3 mt-8 mb-2 text-xl text-center">
        <h1 className="mb-1">Машини за сокопроизводство</h1>
        <h3 className="text-base">Категории:</h3>
      </div>
      <hr className="hr-line mx-auto mb-3"></hr>

      {/* Categories List */}
      <div className="flex flex-wrap px-2">
        {document.map(node => {
          return (
            <div
              key={node.node.id}
              className="md:w-1/3 lg:w-1/4 xl:w-1/6 w-1/2 px-1 py-0 mb-4"
            >
              <Paper>
                <Link to={node.node.url} className="">
                  <img
                    src={node.node.data.image.fluid.base64}
                    data-srcset={node.node.data.image.fluid.srcSet}
                    data-sizes="auto"
                    className="lazyload block w-full mb-0 rounded-t"
                    alt={node.node.data.image.url}
                  />
                  <div className="category-product-name px-2 pt-2 pb-1 text-sm">
                    {node.node.data.name}
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
              fluid {
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
