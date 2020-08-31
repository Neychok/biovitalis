import PropTypes from "prop-types"
import React, { useState, useEffect, ComponentDidMount } from "react"
import SideBar from "./sidebar"
import NavigationBar from "./navigationbar"

const Header = () => {
  if (typeof window !== `undefined`) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768)
    const updateMedia = () => {
      setDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
    })

    return <div>{isDesktop ? <NavigationBar /> : <SideBar />}</div>
  } else return null
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
