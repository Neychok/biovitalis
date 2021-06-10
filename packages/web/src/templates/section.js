import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"

const SectionPage = ({ data }) => {
  const categories = data.allSanityJuicePressingCategory.edges
  return (
    <Layout>
      <SEO title={data.sanitySection.section_name} />
      {/* Categories Title */}
      <div className="md:text-2xl md:mb-4 px-3 mt-8 mb-3 text-xl text-center">
        <h1 className="mb-1 font-normal">{data.sanitySection.section_name}</h1>
        {/* <h3 className="md:text-xl">Категории:</h3> */}
      </div>
      <hr className="hr-line md:mb-8 mx-auto mb-5" />

      {/* Categories List */}
      <div className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6 md:gap-5 container grid grid-cols-2 gap-3 px-2 mx-auto mb-12">
        {categories.map(category => {
          return (
            <div key={category.node.slug.current}>
              <Link
                to={`/${data.sanitySection.slug.current.toLowerCase()}/${category.node.slug.current.toLowerCase()}`}
              >
                <Paper elevation={1} className="hover:shadow-lg">
                  <Img
                    fluid={
                      category.node.image.asset
                        ? category.node.image.asset.fluid
                        : data.file.childImageSharp.fluid
                    }
                  />
                  <div className="category-product-name flex items-center justify-center px-2 my-auto text-center">
                    {category.node.name}
                  </div>
                </Paper>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllCategories($slug: String!) {
    allSanityJuicePressingCategory(
      sort: { fields: order, order: ASC }
      filter: { section: { slug: { current: { eq: $slug } } } }
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
    sanitySection(slug: { current: { eq: $slug } }) {
      section_name
      slug {
        current
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

export default SectionPage
