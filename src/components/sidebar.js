import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"

export default props => {
  return (
    <Menu
      disableAutoFocus
      right
      width="300px"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <div
        id="menulogo"
        className="p-2 text-center text-2xl lg:text-4xl no-underline text-gray-900"
      >
        BioVitalis
      </div>
      <Link
        to="/"
        className="menu-item text-xl text-center text-gray-900 py-3 mt-4"
      >
        Начало
      </Link>
      <Link
        to="/категории"
        className="menu-item text-xl text-center text-gray-900 py-3"
      >
        Продукти
      </Link>
      <Link
        to="/за-нас"
        className="menu-item text-xl text-center text-gray-900 py-3"
      >
        За нас
      </Link>
      <Link
        to="/контакти"
        className="menu-item text-xl text-center text-gray-900 py-3"
      >
        Контакти
      </Link>
    </Menu>
  )
}
