import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"

export default props => {
  return (
    <>
      <nav>
        <div className="fixed top-0 w-full shadow-md h-20 bg-white"></div>
        <div className="logonav text-2xl fixed">BioVitalis</div>
        <Menu disableAutoFocus right width="250px" pageWrapId={"page-wrap"}>
          <Link
            to="/"
            className="menu-item text-left py-2 mt-20 mobile-menu-item"
            activeClassName="mobile-menu-item-active"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 mx-4 inline-block"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Начало
          </Link>
          <Link
            to="/категории"
            className="menu-item text-left py-2 mt-2 mobile-menu-item"
            activeClassName="mobile-menu-item-active"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 mx-4 inline-block"
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
            to="/за-нас"
            className="menu-item text-left py-2 mt-2 mobile-menu-item"
            activeClassName="mobile-menu-item-active"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 mx-4 inline-block"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            За нас
          </Link>
          <Link
            to="/контакти"
            className="menu-item text-left py-2 mt-2 mobile-menu-item"
            activeClassName="mobile-menu-item-active"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 mx-4 inline-block"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Контакти
          </Link>
        </Menu>
      </nav>
    </>
  )
}
