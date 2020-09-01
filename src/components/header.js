import PropTypes from "prop-types"
import React from "react"
import SideBar from "./sidebar"
import NavigationBar from "./navigationbar"

const Header = () => {
  return (
    <>
      <div className="visible md:invisible z-50 overflow-hidden">
        <SideBar />
      </div>
      <div className="invisible md:visible z-50 overflow-hidden">
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
