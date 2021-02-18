import React from "react"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import ClientMap from "../components/clientmap"

// InfoWindow component
const ClientsPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <div className="mt-8 mb-3 text-xl text-center">
        <h1>Наши клиенти</h1>
      </div>
      <hr className="hr-line mx-auto mb-6"></hr>

      <ClientMap></ClientMap>
    </>
  )
}

export default ClientsPage
