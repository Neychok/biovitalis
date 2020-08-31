import React from "react"
import { elastic as Menu } from "react-burger-menu"
import { Link } from "gatsby"

export default props => {
  return (
    <Menu
      width="300px"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <Link to="/" className="menu-item">
        Начало
      </Link>
      <Link to="/категории" className="menu-item">
        Продукти
      </Link>
      <Link to="/за-нас" className="menu-item">
        За нас
      </Link>
      <Link to="/контакти" className="menu-item">
        Контакти
      </Link>
    </Menu>
  )
}
