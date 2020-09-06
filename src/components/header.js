import PropTypes from "prop-types"
import React from "react"
import SideBar from "./sidebar"
import NavigationBar from "./navigationbar"

const Header = () => {
  return (
    <>
      <div className="md:invisible z-50 visible overflow-hidden">
        <SideBar />
      </div>
      <div className="md:visible z-50 invisible overflow-hidden">
        <NavigationBar />
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
