import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mt-20 p-10">This is the Index</h1>
  </Layout>
)

export default IndexPage
