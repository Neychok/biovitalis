import React from "react"
import SideBar from "./sidebar"
import NavigationBar from "./navigationbar"

const Header = () => {
  return (
    <>
      {/* Default: Visible / Makes invisible if screensize > 768px */}
      <div className="sm:hidden z-50 block overflow-hidden">
        <SideBar />
      </div>

      {/* Default: Invisible / Makes visible if screensize > 768px */}
      <div
        id="desktop-nav"
        className={`sm:block z-50 hidden overflow-visible w-full`}
      >
        <NavigationBar />
      </div>
    </>
  )
}

export default Header
