import { Link } from "gatsby"
import React from "react"
import logo from "../assets/images/logo.jpg"

const NavigationBar = () => {
  return (
    <>
      <nav className="container z-50 flex items-center justify-between h-16 bg-white">
        {/* Container for Logo*/}
        <Link to="/" className="flex items-center w-full ml-2">
          <img
            src={logo}
            alt="Biovitalis logo"
            className="lazyload w-auto h-8 pb-1"
          />
        </Link>

        {/* Container for Menu Links */}
        <div className=" text-lg text-gray-900">
          <Link
            to="/"
            className="hover:opacity-100 menu-item px-5 py-4"
            activeClassName="opacity-100 menu-item-active"
          >
            Начало
          </Link>
          <Link
            to="/sokoproizvodstvo/"
            partiallyActive={true}
            className="hover:opacity-100 menu-item px-5 py-4 ml-4"
            activeClassName="opacity-100 menu-item-active"
          >
            Продукти
          </Link>
          {/* <Link
            to="/nashi-klienti/"
            className="hover:opacity-100 menu-item px-5 py-4 ml-4"
            activeClassName="opacity-100 menu-item-active"
          >
            наши клиенти
          </Link> */}
          <Link
            to="/kontakti/"
            className="hover:opacity-100 menu-item px-5 py-4 ml-4"
            activeClassName="opacity-100 menu-item-active"
          >
            Контакти
          </Link>
        </div>
      </nav>
    </>
  )
}
export default NavigationBar
