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
        <div className="px-3 mt-8 mb-3 text-xl text-center">
          <h1>Машини</h1>
        </div>
        <hr className="hr-line mx-auto mb-6"></hr>
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
    </Layout>
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
