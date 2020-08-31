import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import SideBar from "./sidebar"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return <SideBar />
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
