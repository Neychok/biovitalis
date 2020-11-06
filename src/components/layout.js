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
      <div className="xl:container xl:bg-white xl:shadow-xl mx-auto">
        <Header />
        <main className="h-full min-h-screen mt-2">{children}</main>
        <footer className="bg-primary-1000 footer-border pt-3 pb-3 text-sm text-center text-white">
          <p>Всички права запазени © BioVitalis {new Date().getFullYear()}</p>
          <a
            href="https://www.linkedin.com/in/neychok/"
            target="_blank"
            className=" text-xs underline"
          >
            Създадено от: Neycho
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
