import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Img from "gatsby-image"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"

const ProductsPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <div className="px-3 pt-4">
        <h1 className="text-primary-black pb-6 text-xl">Видове машини</h1>
        <Link to="/sokoproizvodstvo" className="">
          <Paper className="menu-item-active flex items-center w-full p-2">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className="w-16 rounded-full"
            />
            <span className="text-primary-black pl-3 text-lg">
              Сокопроизводство
            </span>
          </Paper>
        </Link>
      </div>
    </>
  )
}
export const query = graphql`
  {
    file(relativePath: { eq: "sokoproizvodstvo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ProductsPage
