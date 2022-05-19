import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import "./GoogleMap.css";

import { blueEssence } from "./mapStyles";
import { useSelector } from "react-redux";

const MuliGoogleMap = ({ coords, size, zoom, zoomNum, circleArr }) => {
  const googleMapKey = useSelector((state) => state.keys.googleApiKey);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapKey,
  });

  const containerStyle = {
    width: size.width,
    height: size.height,
  };

  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const options = {
    styles: blueEssence,
    disableDefaultUI: true,
    zoomControl: zoom,
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoomNum}
      options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {circleArr?.map((mark, idx) => (
        <Marker
          key={idx}
          position={{ lat: +mark.coords[0], lng: +mark.coords[1] }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MuliGoogleMap;
