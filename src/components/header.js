import PropTypes from "prop-types"
import React from "react"
import SideBar from "./sidebar"

function Header({ siteTitle }) {
  return <SideBar />
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
