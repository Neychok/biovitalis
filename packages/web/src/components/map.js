import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Map = ({ position, zoom }) => {
  return (
    <MapContainer className="h-full" center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>БиоВиталис - ул. Първи Май 15, Костинброд</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
