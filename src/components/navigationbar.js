import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../assets/images/logo.jpg"
import { m as motion } from "framer-motion"
import { MotionConfig, AnimationFeature } from "framer-motion"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const NavBarVariants = {
  top: { backgroundColor: "rgba(0, 0, 0, 0)", height: "100px" },
  scrolled: { backgroundColor: "#fff", height: "70px" },
}
const LogoVariants = {
  top: { opacity: 0 },
  scrolled: { opacity: 1 },
}
const MenuItemsVariants = {
  top: { color: "#fff" },
  scrolled: { color: "#627d98" },
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
      <div
        className={`sm:block fixed z-50 hidden w-full overflow-hidden ${
          yPos ? "shadow" : ""
        }`}
      >
        <MotionConfig features={[AnimationFeature]}>
          <motion.nav
            animate={yPos ? "scrolled" : "top"}
            initial={"top"}
            variants={NavBarVariants}
            transition={{
              ease: "anticipate",
              duration: 0.5,
            }}
            className="z-50 flex items-center"
          >
            <div className="container flex items-center justify-between px-4 mx-auto">
              {/* Container for Logo*/}
              <motion.div
                animate={yPos ? "scrolled" : "top"}
                initial={"top"}
                variants={LogoVariants}
                transition={{ duration: 0.2 }}
              >
                <Link to="/" className="flex items-center w-full ml-2">
                  <img
                    src={logo}
                    alt="Biovitalis logo"
                    className="lazyload w-auto h-8 pb-1"
                  />
                </Link>
              </motion.div>

              {/* Container for Menu Links */}
              <motion.div
                className="text-lg"
                animate={yPos ? "scrolled" : "top"}
                initial={"top"}
                variants={MenuItemsVariants}
              >
                <Link
                  to="/"
                  className={`hover:opacity-100 px-5 py-4 ${
                    yPos ? "menu-item" : "menu-item-top"
                  }`}
                  activeClassName={`opacity-100 ${
                    yPos ? "menu-item-active " : ""
                  } `}
                >
                  Начало
                </Link>
                <Link
                  to="/sokoproizvodstvo/"
                  partiallyActive={true}
                  className={`hover:opacity-100 px-5 py-4 ml-4 ${
                    yPos ? "menu-item" : "menu-item-top"
                  }`}
                  activeClassName={`opacity-100 ${
                    yPos ? "menu-item-active " : ""
                  } `}
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
                  className={`hover:opacity-100 px-5 py-4 ml-4 ${
                    yPos ? "menu-item" : "menu-item-top"
                  }`}
                  activeClassName={`opacity-100 ${
                    yPos ? "menu-item-active " : ""
                  } `}
                >
                  Контакти
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </MotionConfig>
      </div>
    </>
  )
}
export default NavigationBar
