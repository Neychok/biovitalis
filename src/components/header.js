import PropTypes from "prop-types"
import React from "react"
import SideBar from "./sidebar"
import NavigationBar from "./navigationbar"

const Header = () => {
  return (
    <>
      <div className="visible md:invisible">
        <SideBar />
      </div>
      <div className="invisible md:visible">
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
