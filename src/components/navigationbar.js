import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../assets/images/logo.jpg"
import { m as motion } from "framer-motion"
import { MotionConfig, AnimationFeature } from "framer-motion"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import PhoneIcon from "../assets/svgs/smartphone.svg"

const NavBarVariants = {
  top: { height: "80px" },
  scrolled: { height: "60px" },
}
const NavigationBar = () => {
  const [yPos, setYpos] = useState(false)

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -100) {
      setYpos(true)
    } else {
      setYpos(false)
    }
  })

  return (
    <>
      <div className="bg-secondary-1000 w-full h-10 text-white">
        <div className="container flex items-center justify-end h-full px-4 mx-auto">
          <a className="flex" href="tel:0878909322">
            <PhoneIcon className="h-6 mr-3"></PhoneIcon>
            <div className="italic">0878 909 322</div>
          </a>
          <a className="flex ml-8" href="tel:0885172150">
            <PhoneIcon className="h-6 mr-3"></PhoneIcon>
            <div className="italic">0885 172 150</div>
          </a>
        </div>
      </div>
      <MotionConfig features={[AnimationFeature]}>
        <motion.nav
          animate={yPos ? "scrolled" : "top"}
          initial={"top"}
          variants={NavBarVariants}
          transition={{
            ease: "easeIn",
            duration: 0.5,
          }}
          className="sticky top-0 z-50 flex items-center w-full bg-white shadow"
        >
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
                className={`hover:opacity-100 px-4 flex items-center rounded-full secondary-900 menu-item duration-500 ${
                  yPos ? "h-12" : "h-14"
                }`}
                activeClassName={`opacity-100 menu-item-active`}
              >
                Начало
              </Link>
              <Link
                to="/sokoproizvodstvo/"
                partiallyActive={true}
                className={`hover:opacity-100 px-5 flex items-center ml-4 rounded-full secondary-900 menu-item duration-500 ${
                  yPos ? "h-12" : "h-14"
                }`}
                activeClassName={`opacity-100 menu-item-active`}
              >
                Продукти
              </Link>
              <Link
                to="/kontakti/"
                className={`hover:opacity-100 px-5 flex items-center ml-4 rounded-full secondary-900 menu-item duration-500 ${
                  yPos ? "h-12" : "h-14"
                }`}
                activeClassName={`opacity-100 menu-item-active`}
              >
                Контакти
              </Link>
            </div>
          </div>
        </motion.nav>
      </MotionConfig>
    </>
  )
}
export default NavigationBar
