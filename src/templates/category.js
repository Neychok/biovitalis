import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CategoryPage = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" />
      <h1>This is a Category Page</h1>
      <ul>
        {data.allPrismicProduct.edges.map(node => {
          return (
            <li key={node.node.id}>
              <Link to={node.node.url}>{node.node.data.product_name.text}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  </>
)

export const query = graphql`
  query($slug: String!) {
    allPrismicProduct(filter: { data: { category: { uid: { eq: $slug } } } }) {
      edges {
        node {
          id
          url
          data {
            product_name {
              text
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
