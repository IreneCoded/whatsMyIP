import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export default function Mapper(props){
const position = [props.lat, props.lang]

return(
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
      <Popup>  
        Your Server is <br /> located here.
      </Popup>
    </Marker>
  </MapContainer>
)
}