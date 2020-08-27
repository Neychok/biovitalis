import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div></div>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/categories/">Продукти</Link>
          </li>
          <li>
            <Link to="/about-us">За нас</Link>
          </li>
          <li>
            <Link to="/contact">Контакти</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
