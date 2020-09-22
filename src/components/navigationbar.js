import { Link } from "gatsby"
import React from "react"
function NavigationBar() {
  return (
    <>
      <nav className="z-50 flex items-center justify-between h-20 px-2 bg-white">
        {/* Container for Logo*/}
        <div className="">
          <Link to="/" className="menulogo p-4 text-2xl">
            BioVitalis
          </Link>
        </div>
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
            to="/продукти/"
            partiallyActive={true}
            className="hover:opacity-100 menu-item px-5 py-4 ml-4"
            activeClassName="opacity-100 menu-item-active"
          >
            Продукти
          </Link>
          <Link
            to="/за-нас/"
            className="hover:opacity-100 menu-item px-5 py-4 ml-4"
            activeClassName="opacity-100 menu-item-active"
          >
            За нас
          </Link>
          <Link
            to="/контакти/"
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
