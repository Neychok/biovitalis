import React from "react"
import { m as motion } from "framer-motion"
import { MotionConfig, AnimationFeature } from "framer-motion"
import { Link } from "gatsby"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import "./hamburger-button.css"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
//import InputBase from "@material-ui/core/InputBase"

import logo from "../images/logo.png"

const variantsMenu = {
  open: { x: 0 },
  closed: { x: "-100%" },
}

const variantsOverlay = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

// const variantsSearch = {
//   open: { opacity: 1 },
//   closed: { opacity: 0 },
// }

const Sidebar = () => {
  const [menuOpen, setMenu] = React.useState(false)
  // const [searchOpen, setSearch] = React.useState(false)

  const OpenMenu = () => {
    setMenu(!menuOpen)
    menuOpen
      ? enableBodyScroll("#navigation")
      : disableBodyScroll("#navigation")
  }

  // const OpenSearch = () => {
  //   setSearch(!searchOpen)
  // }

  return (
    <>
      {/* Container for the whole menu */}
      <MotionConfig features={[AnimationFeature]}>
        <nav id="navigation" className="mb-12">
          {/* Top navbar */}
          <div className="h-14 fixed top-0 z-50 flex items-center w-full bg-white shadow-md">
            {/* Container for the hamburger button */}
            <div className="flex justify-start w-1/2">
              <button
                className={`hamburger hamburger--collapse flex items-center no-outline p-3 ${
                  menuOpen ? "is-active" : ""
                }`}
                onClick={OpenMenu}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <Link to="/" className="flex items-center w-full ml-2">
                <img
                  src={logo}
                  alt="Biovitalis logo"
                  className="lazyload w-24"
                />
              </Link>
            </div>

            {/* Search Button */}
            {/* <div className="flex items-center justify-end w-1/3">
              <button
                onClick={OpenSearch}
                className="no-outline flex items-center max-w-full p-3"
              >
                <span className="primary-1000 pr-1 text-sm">ТЪРСЕНЕ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#014d40"
                  className="w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Sidebar with menu items */}
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            initial={"closed"} // Initial state of the m
            variants={variantsMenu}
            transition="easeIn"
            className="mt-14 fixed top-0 left-0 z-50 flex flex-col justify-between w-48 h-full pb-24 overflow-hidden bg-white border-t"
          >
            <div>
              {/* Background pattern */}
              <div className="mobile-menuimage w-full h-24"></div>

              <Link
                to="/"
                className="mobile-menu-item block py-2 mt-6 mb-2 text-sm"
                activeClassName="mobile-menu-item-active"
                onClick={OpenMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block w-6 h-6 ml-4 mr-5"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Начало
              </Link>
              <Link
                partiallyActive={true}
                to="/produkti/"
                className="mobile-menu-item block py-2 mb-2 text-sm"
                activeClassName="mobile-menu-item-active"
                onClick={OpenMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block w-6 h-6 ml-4 mr-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                Продукти
              </Link>
              <Link
                to="/nashi-klienti/"
                className="mobile-menu-item block py-2 mb-2 text-sm"
                activeClassName="mobile-menu-item-active"
                onClick={OpenMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block w-6 h-6 ml-4 mr-5"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Наши клиенти
              </Link>
              <Link
                to="/kontakti/"
                className="mobile-menu-item block py-2 text-sm"
                activeClassName="mobile-menu-item-active"
                onClick={OpenMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block w-6 h-6 ml-4 mr-5"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Контакти
              </Link>
            </div>

            <div className="text-center">
              <a
                className="menu-quick-action flex items-center justify-between py-3 pl-2 pr-3 mb-1 text-xl"
                href="tel:0895000166"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="secondary-600 w-10"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <div className="secondary-600 text-sm leading-none">
                    Обадете ни се
                  </div>
                  <div className="text-xl leading-tight underline">
                    0878 909 322
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* OVERLAY MENU */}
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            initial={"closed"}
            variants={variantsOverlay}
            transition="easeIn"
            onClick={OpenMenu}
            className={`bg-opacity-50 bg-gray-900 h-full w-full top-0 right-0 fixed overflow-hidden z-30 ${
              menuOpen ? "" : "hidden "
            } `}
          ></motion.div>

          {/* OVERLAY SEARCH*/}
          {/* <motion.div
            animate={searchOpen ? "open" : "closed"}
            initial={"closed"}
            variants={variantsOverlay}
            transition="easeIn"
            onClick={OpenSearch}
            className={`bg-opacity-50 bg-gray-900 h-full w-full top-0 right-0 fixed overflow-hidden z-30 ${
              searchOpen ? "" : "hidden "
            } `}
          ></motion.div>

          <motion.div
            animate={searchOpen ? "open" : "closed"}
            initial={"closed"}
            variants={variantsSearch}
            transition="easeIn"
            className={`h-14 fixed top-0 z-50 flex items-center w-full pr-0 bg-white ${
              searchOpen ? "" : "hidden"
            } `}
          >
            <div className="">
              <button
                className="no-outline flex items-center justify-start px-2 py-2"
                onClick={OpenSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#014d40"
                  className="w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full pr-2">
              <InputBase
                placeholder="Търсене..."
                inputProps={{ "aria-label": "search" }}
                className="border-search w-full px-3 py-1 border-2 rounded-lg"
              />
            </div>
          </motion.div> */}
        </nav>
      </MotionConfig>
    </>
  )
}

export default Sidebar
