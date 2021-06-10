import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Img from "gatsby-image"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Layout from "../components/layout"
const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Машини" />
      <div className="px-3">
        <h1 className="md:text-2xl md:mb-4 px-3 mt-8 mb-3 text-xl font-normal text-center">
          Машини
        </h1>
        <hr className="hr-line md:mb-8 mx-auto mb-5" />
        <div className="md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 md:gap-5 container grid grid-cols-2 gap-3 mx-auto">
          {data.allSanitySection.edges.map(section => {
            return (
              <Link to={`/${section.node.slug.current.toLowerCase()}`}>
                <Paper elevation={1} className="hover:shadow-lg">
                  <Img
                    fluid={
                      section.node.image.asset
                        ? section.node.image.asset.fluid
                        : data.file.childImageSharp.fluid
                    }
                  />
                  <span className="category-product-name lg:text-lg flex items-center justify-center px-2 my-auto text-center">
                    {section.node.section_name}
                  </span>
                </Paper>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query Sections {
    allSanitySection(sort: { fields: order, order: ASC }) {
      edges {
        node {
          slug {
            current
          }
          section_name
          image {
            alt
            image {
              asset {
                fluid(maxHeight: 550) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          _id
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
