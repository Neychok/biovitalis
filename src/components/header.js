import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.module.css"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <>
      {/* Container for the menu */}
      <nav className="flex absolute w-full top-0 items-center justify-between flex-wrap bg-teal-500 p-6 z-50">
        {/* Container for the Logo and site name */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* LOGO */}
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          {/* Site name */}
          <span className="font-semibold text-xl tracking-tight">
            {siteTitle}
          </span>
        </div>
        {/* Hamburger menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white focus:outline-none"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Menu Contents */}
        <div
          className={`${
            isExpanded ? `block sticky` : `hidden`
          } w-full bg-teal-500 flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex-grow lg:text-right text-center">
            <Link
              to={`/`}
              className="block py-4 mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4"
            >
              Начало
            </Link>
            <Link
              to={`/категории`}
              className="block py-4 mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4"
            >
              Продукти
            </Link>
            <Link
              to={`/за-нас`}
              className="block py-4 mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-4"
            >
              За нас
            </Link>
            <Link
              to={`/контакти`}
              className="block py-4 mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>
      {/* Button to close menu when clicking outside menu */}
      {isExpanded && (
        <button
          onClick={() => toggleExpansion(false)}
          aria-label="Close Menu"
          className=" fixed inset-0 h-full w-full bg-black opacity-50 z-40"
        ></button>
      )}
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
