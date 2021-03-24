import React from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import Map from "../components/map"

import GoogleMapsIcon from "../assets/svgs/google-maps.svg"

const ContactPage = () => {
  const position = [42.82008, 23.2291849]
  const zoom = 13
  return (
    <Layout>
      <div className="max-w-6xl px-2 mx-auto">
        <SEO title="Home" />
        {/* Page Title */}
        <h1 className="md:text-2xl mt-8 mb-3 text-xl font-normal text-center">
          Контакти
        </h1>
        <hr className="hr-line mx-auto mb-6"></hr>

        <Paper className="pb-4 mb-4">
          <div className="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#014D40"
              className="w-16 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="primary-1000 text-xl text-center">Адрес</div>
            <div className="flex justify-center my-2">
              <a
                href="https://www.google.com/maps/place/1-%D0%B2%D0%B8+%D0%BC%D0%B0%D0%B9+15,+2230+%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%9A%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B1%D1%80%D0%BE%D0%B4/@42.82008,23.2291849,19z/data=!4m5!3m4!1s0x40aa943693d84399:0xc92418574869ddd9!8m2!3d42.8201635!4d23.2294209"
                target="_blank"
                rel="nofollow"
                className="hover:bg-gray-100 inline-flex items-center justify-center p-2 border rounded"
                title="Към Google Maps"
              >
                <GoogleMapsIcon className="h-8 mr-2" />
                <p className="secondary-700 xl:text-xl text-lg text-center">
                  ул. Първи Май 15, Костинброд 2230
                </p>
              </a>
            </div>
            <div
              className="border-color-primary border-t"
              style={{ width: "100%", height: "24rem" }}
            >
              <Map position={position} zoom={zoom} />
            </div>
          </div>
          <div className="md:flex">
            {/* Phones */}
            <div className="md:w-1/2 flex items-center justify-around px-2 py-4">
              <div className="md:px-8 md:justify-end flex justify-center w-2/5">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#014D40"
                    className="w-16 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="primary-1000 text-xl text-center">
                    Телефон
                  </div>
                </div>
              </div>
              <div className="border-color-primary md:items-start md:px-8 flex flex-col items-center justify-center w-3/5 h-20 border-l-2">
                <a
                  href="tel:+359878909322"
                  className="secondary-700 xl:text-xl hover:underline block pb-2 text-lg"
                >
                  +359 878 909 322
                </a>
                <a
                  href="tel:+359885172150"
                  className="secondary-700 xl:text-xl hover:underline block pt-2 text-lg"
                >
                  +359 885 172 150
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="md:w-1/2 flex items-center px-2 py-4">
              <div className="md:px-8 md:justify-end flex justify-center w-2/5">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#014D40"
                    className="w-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="primary-1000 text-xl">E-mail</div>
                </div>
              </div>
              <div className="border-color-primary md:justify-start md:px-8 flex items-center justify-center w-3/5 h-20 align-middle border-l-2">
                <a
                  href="mailto:biovitalis.bulgaria@gmail.com"
                  className="secondary-700 xl:text-xl hover:underline block text-lg text-center"
                >
                  <span className="block">biovitalis.bulgaria</span>
                  <span className="block">@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </Paper>
        <Paper className="xl:py-10 pb-6 mb-4">
          <div className="max-w-3xl mx-auto">
            <ContactForm message="Изпратете ни имейл и ние ще се свържим с вас!"></ContactForm>
          </div>
        </Paper>
      </div>
    </Layout>
  )
}
export default ContactPage
