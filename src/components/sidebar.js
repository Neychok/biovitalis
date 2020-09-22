import React, { Component } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import "./hamburger-button.css"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"

import logo from "../images/logo.png"

const variantsMenu = {
  open: { x: 0 },
  closed: { x: "100%" },
}

const variantsOverlay = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  componentDidMount() {
    this.targetElement = document.querySelector("#navigation")
  }

  //! Does not lock for Android
  //TODO Fix bodylocking for android
  OpenMenu = () => {
    this.setState({ active: !this.state.active })
    this.state.active
      ? enableBodyScroll(this.targetElement)
      : disableBodyScroll(this.targetElement)
  }

  // Clears all bodylocks
  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  render() {
    return (
      <>
        {/* Container for the whole menu */}
        <nav id="navigation" className="mb-12">
          {/* Top navbar */}
          <div className="h-14 fixed top-0 z-50 flex items-center justify-between w-full pl-2 pr-0 bg-white shadow-md">
            {/* Container for the LOGO */}
            <Link to="/" className="">
              <img src={logo} alt="Biovitalis logo" className="lazyload w-32" />
            </Link>

            {/* Container for the hamburger button */}
            <div className="pt-1">
              <button
                className={`hamburger hamburger--collapse flex items-center no-outline pr-2 py-1 ${
                  this.state.active ? "is-active" : ""
                }`}
                onClick={this.OpenMenu}
              >
                <span className="dark-green pr-1 text-base">
                  {this.state.active ? "ЗАТВОРИ" : "МЕНЮ"}
                </span>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>

          {/* Sidebar with menu items */}
          <motion.div
            animate={this.state.active ? "open" : "closed"}
            initial={"closed"} // Initial state of the menu
            variants={variantsMenu}
            transition="easeIn"
            className="mt-14 fixed top-0 right-0 z-50 flex flex-col w-48 h-full overflow-hidden bg-white border-t"
          >
            {/* Background pattern */}
            <div className="mobile-menuimage w-full h-24"></div>

            <Link
              to="/"
              className="mobile-menu-item py-2 mt-6 mb-2 text-sm"
              activeClassName="mobile-menu-item-active"
              onClick={this.OpenMenu}
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
              to="/продукти/"
              className="mobile-menu-item py-2 mb-2 text-sm"
              activeClassName="mobile-menu-item-active"
              onClick={this.OpenMenu}
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
              to="/за-нас/"
              className="mobile-menu-item py-2 mb-2 text-sm"
              activeClassName="mobile-menu-item-active"
              onClick={this.OpenMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-6 h-6 ml-4 mr-5"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              За нас
            </Link>
            <Link
              to="/контакти/"
              className="mobile-menu-item py-2 text-sm"
              activeClassName="mobile-menu-item-active"
              onClick={this.OpenMenu}
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
          </motion.div>

          {/* OVERLAY */}
          <motion.div
            animate={this.state.active ? "open" : "closed"}
            initial={"closed"}
            variants={variantsOverlay}
            transition="easeIn"
            onClick={this.OpenMenu}
            className={`bg-opacity-50 bg-gray-900 h-full w-full top-0 right-0 fixed overflow-hidden z-30 ${
              this.state.active ? "" : "hidden"
            }`}
          ></motion.div>
        </nav>
      </>
    )
  }
}
export default Sidebar
