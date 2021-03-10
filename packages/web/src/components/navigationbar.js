import { Link } from "gatsby"
import React from "react"
import logo from "../assets/images/logo.jpg"
import { m as motion } from "framer-motion"
import { MotionConfig, AnimationFeature } from "framer-motion"

import PhoneIcon from "../assets/svgs/smartphone.svg"

const NavigationBar = () => {
  return (
    <>
      <div className="bg-secondary-1000 w-full h-8 text-white">
        <div className="container flex items-center justify-end h-full px-4 mx-auto">
          <a className="flex items-center" href="tel:0878909322">
            <PhoneIcon className="h-5 mr-3"></PhoneIcon>
            <div className="italic">0878 909 322</div>
          </a>
          <a className="flex items-center ml-8" href="tel:0885172150">
            <PhoneIcon className="h-5 mr-3"></PhoneIcon>
            <div className="italic">0885 172 150</div>
          </a>
        </div>
      </div>
      <MotionConfig features={[AnimationFeature]}>
        <nav className="flex items-center w-full h-20 bg-white shadow">
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
                Продукти
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
      </MotionConfig>
    </>
  )
}
export default NavigationBar
