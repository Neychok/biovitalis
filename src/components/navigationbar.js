import { Link } from "gatsby"
import React from "react"

function NavigationBar() {
  return (
    <>
      {/* Outer wrapper */}
      <nav className="">
        {/* Container for Logo*/}
        <div className=""></div>
        {/* Container for Menu Links */}
        <div className="">
          <Link to="/" className="">
            Начало
          </Link>
          <Link to="/категории" className="">
            Продукти
          </Link>
          <Link to="/за-нас" className="">
            За нас
          </Link>
          <Link to="/контакти" className="">
            Контакти
          </Link>
        </div>
      </nav>
    </>
  )
}
export default NavigationBar
