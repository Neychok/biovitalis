import React, { Component } from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import Paper from "@material-ui/core/Paper"
import GoogleMapReact from "google-map-react"

const Marker = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#ff0000"
    className="marker w-8"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
)

class ContactPage extends Component {
  static defaultProps = {
    center: {
      lat: 42.81995,
      lng: 23.23017,
    },
    zoom: 15,
  }
  render() {
    return (
      <>
        <SEO title="Home" />
        {/* Page Title */}
        <div className="mt-8 mb-3 text-xl text-center">
          <h1>Контакти</h1>
        </div>
        <hr className="hr-line mx-auto mb-6"></hr>

        <Paper className="pb-4 mx-2 mb-4">
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
            <div className="secondary-700 pt-1 mb-2 text-base text-center">
              ул. Първи Май 15, Костинброд 2230
            </div>
            <div
              className="border-color-primary border-t"
              style={{ height: "300px", width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCf4gZe2xVFObpOCeHTGkJa4hwd7s4wl3w",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <Marker lat={42.81995} lng={23.23017}></Marker>
              </GoogleMapReact>
            </div>
          </div>
          <div className="flex items-center justify-around px-2 py-4">
            <div className="w-2/5">
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
              <div className="primary-1000 text-xl text-center">Телефон</div>
            </div>
            <div className="border-color-primary flex flex-col items-center justify-center w-3/5 h-20 border-l-2">
              <a
                href="tel:+359878909322"
                className="secondary-700 block pb-2 text-lg"
              >
                +359 878 909 322
              </a>
              <a
                href="tel:+359885172150"
                className="secondary-700 block pt-2 text-lg"
              >
                +359 885 172 150
              </a>
            </div>
          </div>

          <div className="flex items-center justify-around px-2 py-4">
            <div className="w-2/5">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="primary-1000 text-xl text-center">E-mail</div>
            </div>
            <div className="border-color-primary flex items-center justify-center w-3/5 h-20 align-middle border-l-2">
              <a
                href="mailto:biovitalis.bulgaria@gmail.com"
                className="secondary-700 block text-lg text-center"
              >
                <span className="block">biovitalis.bulgaria</span>
                <span className="block">@gmail.com</span>
              </a>
            </div>
          </div>
        </Paper>
        <Paper className="py-4 mx-2 mb-4">
          <ContactForm message="Свържете се с нас"></ContactForm>
        </Paper>
      </>
    )
  }
}
export default ContactPage
