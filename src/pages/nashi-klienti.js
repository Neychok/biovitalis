import React from "react"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import Paper from "@material-ui/core/Paper"
import { graphql } from "gatsby"

// InfoWindow component
const InfoWindow = props => {
  const { name } = props
  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  }

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>{name}</div>
    </div>
  )
}

const Marker = ({ show, name }) => {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: show ? "red" : "blue",
    cursor: "pointer",
    zIndex: 10,
  }
  return (
    <>
      <div style={markerStyle} />
      {show && <InfoWindow name={name} />}
    </>
  )
}

const ClientsPage = ({ data }) => {
  const loc = {
    center: {
      lat: 42.7219285,
      lng: 25.4222369,
    },
    zoom: 6.3,
  }

  return (
    <>
      <SEO title="Home" />
      <div className="mt-8 mb-3 text-xl text-center">
        <h1>Наши клиенти</h1>
      </div>
      <hr className="hr-line mx-auto mb-6"></hr>

      <div
        className="border-color-primary border-t"
        style={{ height: "350px", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCf4gZe2xVFObpOCeHTGkJa4hwd7s4wl3w",
          }}
          defaultCenter={loc.center}
          defaultZoom={loc.zoom}
        >
          {data.allPrismicClient.edges.map(node => (
            <Marker
              key={node.node.data.name}
              lat={node.node.data.location.latitude}
              lng={node.node.data.location.longitude}
              show=""
            ></Marker>
          ))}
        </GoogleMapReact>
      </div>
      <Paper className="px-2 py-2">
        <ul>
          {data.allPrismicClient.edges.map(node => (
            <li key={node.node.id} className="py-2 my-1 border">
              Име: {node.node.data.name}
            </li>
          ))}
        </ul>
      </Paper>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allPrismicClient {
      edges {
        node {
          id
          data {
            location {
              latitude
              longitude
            }
            name
          }
        }
      }
    }
  }
`

export default ClientsPage
