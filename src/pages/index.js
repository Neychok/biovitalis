import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <div>
      <Img fluid={data.file.childImageSharp.fluid} className="" />
      <h1 className="absolute-middle w-full px-4 py-4 text-center text-white bg-black bg-opacity-50">
        Производство и пакетиране на сок от плодове и зеленчуци
      </h1>
    </div>
  </>
)

export const query = graphql`
  {
    file(relativePath: { eq: "landingimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
