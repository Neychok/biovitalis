import { Link } from "gatsby"
import React from "react"
function NavigationBar() {
  return (
    <>
      <nav className="xl:container flex mx-auto px-2 h-20 bg-white items-center justify-between z-50">
        {/* Container for Logo*/}
        <div className="">
          <Link to="/" className="text-2xl p-4 menulogo">
            BioVitalis
          </Link>
        </div>
        {/* Container for Menu Links */}
        <div className="text-lg text-gray-900 ">
          <Link
            to="/"
            className="py-4 px-5 hover:opacity-100 menu-item"
            activeClassName="opacity-100 menu-item-active"
          >
            Начало
          </Link>
          <Link
            to="/продукти/"
            partiallyActive={true}
            className="ml-4 py-4 px-5 hover:opacity-100 menu-item"
            activeClassName="opacity-100 menu-item-active"
          >
            Продукти
          </Link>
          <Link
            to="/за-нас/"
            className="ml-4 py-4 px-5 hover:opacity-100 menu-item"
            activeClassName="opacity-100 menu-item-active"
          >
            За нас
          </Link>
          <Link
            to="/контакти/"
            className="ml-4 py-4 px-5 hover:opacity-100 menu-item"
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
