import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ location, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main className="md:mt-0 h-full min-h-screen mt-2">{children}</main>
      <footer className="bg-primary-1000 footer-border pt-3 pb-3 text-sm text-center text-white">
        <p>Всички права запазени © BioVitalis {new Date().getFullYear()}</p>
        <a
          href="https://www.linkedin.com/in/neychok/"
          target="_blank"
          rel="noreferrer"
          className=" text-xs underline"
        >
          Дизайн и изработка: Neycho
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
