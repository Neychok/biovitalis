import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Img from "gatsby-image"
import Layout from "../components/layout"
const ProductsPage = ({ data }) => {
  const categories = data.allSanityJuicePressingCategory.edges
  return (
    <Layout>
      <SEO title="Home" />

      {/* Categories Title */}
      <div className="md:text-2xl md:mb-4 px-3 mt-8 mb-3 text-xl text-center">
        <h1 className="mb-1 font-normal">Машини за сокопроизводство</h1>
        <h3 className="md:text-xl">Категории:</h3>
      </div>
      <hr className="hr-line md:mb-8 mx-auto mb-5" />

      {/* Categories List */}
      <div className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container grid grid-cols-2 gap-6 px-2 mx-auto">
        {categories.map(category => {
          return (
            <div key={category.node.slug.current}>
              <Paper elevation={1} className="hover:shadow-lg">
                <Link to={"/sokoproizvodstvo/" + category.node.slug.current}>
                  <Img
                    fluid={
                      category.node.image
                        ? category.node.image.asset.fluid
                        : data.file.childImageSharp.fluid
                    }
                    className="max-h-48 block object-center w-full mb-0 rounded-t"
                  />
                  <div className="category-product-name flex items-center justify-center px-2 my-auto text-center">
                    {category.node.name}
                  </div>
                </Link>
              </Paper>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query AllCategories {
    allSanityJuicePressingCategory(
      sort: { fields: slug___current, order: ASC }
    ) {
      edges {
        node {
          name
          slug {
            current
          }
          image {
            asset {
              fluid(maxHeight: 550) {
                ...GatsbySanityImageFluid
              }
            }
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
export default ProductsPage
