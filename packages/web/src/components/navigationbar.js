import { Link } from "gatsby"
import React from "react"
import logo from "../assets/images/logo.jpg"

import PhoneIcon from "../assets/svgs/smartphone.svg"

const NavigationBar = () => {
  return (
    <>
      <div className="bg-secondary-1000 w-full h-10 text-white">
        <div className="container flex items-center justify-start h-full px-4 mx-auto">
          <span className="opacity-90 mr-4">Свържете се с нас:</span>
          <a
            className="opacity-90 hover:opacity-100 flex items-center"
            href="tel:0878909322"
          >
            <PhoneIcon className="h-4 mr-2"></PhoneIcon>
            <span className="text-lg">0878 909 322</span>
          </a>
          <a
            className="opacity-90 hover:opacity-100 flex items-center ml-8"
            href="tel:0885172150"
          >
            <PhoneIcon className="h-4 mr-2"></PhoneIcon>
            <span className="text-lg">0885 172 150</span>
          </a>
        </div>
      </div>
      <nav className="flex items-center w-full h-20 font-normal bg-white shadow">
        <div className="container flex items-center justify-between h-full px-4 mx-auto">
          {/* Container for Logo*/}
          <Link to="/" className="flex items-center h-full ml-2">
            <img
              src={logo}
              alt="Biovitalis logo"
              className="lazyload lg:h-10 w-auto h-8 pb-1"
            />
          </Link>

          {/* Container for Menu Links */}
          <div className="flex items-center text-lg">
            <Link
              to="/"
              className="hover:opacity-100 secondary-900 menu-item h-14 flex items-center px-5 duration-100 rounded-full"
              activeClassName={`opacity-100 menu-item-active`}
            >
              Начало
            </Link>
            <Link
              to="/sokoproizvodstvo/"
              partiallyActive={true}
              className="hover:opacity-100 secondary-900 menu-item h-14 flex items-center px-5 ml-4 duration-100 rounded-full"
              activeClassName={`opacity-100 menu-item-active`}
            >
              Машини
            </Link>
            <Link
              to="/kontakti/"
              className="hover:opacity-100 secondary-900 menu-item h-14 flex items-center px-5 ml-4 duration-100 rounded-full"
              activeClassName={`opacity-100 menu-item-active`}
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavigationBar
