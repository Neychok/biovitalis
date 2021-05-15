import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Link from "gatsby"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Страницата не беше намерена</h1>
    <Link to="/">Върни се обратно</Link>
  </Layout>
)

export default NotFoundPage
