import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"

const ProductsPage = ({ data }) => {
  const document = data.allPrismicCategory.edges

  return (
    <>
      <SEO title="Home" />

      {/* Categories Title */}
      <div className="mt-4 mb-2 ml-3 text-xl text-left">Категории продукти</div>
      <hr className="hr-line mb-1"></hr>

      {/* Categories List */}
      <div className="flex flex-wrap px-1">
        {document.map(node => {
          return (
            <div
              key={node.node.id}
              className="md:w-1/3 lg:w-1/4 xl:w-1/6 w-1/2 px-1 py-0 mb-4"
            >
              <Paper>
                <Link to={node.node.url} className="">
                  <img
                    height="250px"
                    width="313px"
                    src={node.node.data.image.url}
                    alt={node.node.data.name}
                    className="mb-0 rounded-t"
                  ></img>
                  <div className="category-product-name px-2 py-1 text-sm">
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
            }
          }
          url
        }
      }
    }
  }
`

export default ProductsPage
