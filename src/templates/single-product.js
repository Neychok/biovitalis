import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Product = ({ data }) => {
  const document = data.allPrismicProduct.edges[0].node.data

  return (
    <Layout>
      <h1>{document.product_name.text}</h1>
      <h3>Описание</h3>
      <p>{document.description.text}</p>
      <h3>Спецификация</h3>
      <p>Мощност: {document.power.text}</p>
      <p>Капацитет: {document.capacity.text}</p>
      <p>Тегло: {document.weight.text}</p>
      <p>Дължина: {document.length.text}</p>
      <p>Височина: {document.height.text}</p>
      <p>Широчина: {document.width.text}</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allPrismicProduct(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          data {
            capacity {
              text
            }
            description {
              text
            }
            height {
              text
            }
            length {
              text
            }
            power {
              text
            }
            product_name {
              text
            }
            weight {
              text
            }
            width {
              text
            }
          }
        }
      }
    }
  }
`
export default Product
