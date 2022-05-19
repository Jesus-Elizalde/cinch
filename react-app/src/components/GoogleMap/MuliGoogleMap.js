import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

import "./GoogleMap.css";

import { blueEssence } from "./mapStyles";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MuliGoogleMap = ({ coords, size, zoom, zoomNum, circleArr }) => {
  const googleMapKey = useSelector((state) => state.keys.googleApiKey);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapKey,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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
    >
      {circleArr?.map((mark, idx) => (
        <Marker
          key={idx}
          position={{ lat: +mark.coords[0], lng: +mark.coords[1] }}
          onClick={() => handleActiveMarker(mark?.id)}
        >
          {activeMarker === mark.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="flex_column">
                <NavLink to={`/customers/${mark.id}`}>
                  {mark?.display_name}
                </NavLink>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MuliGoogleMap;
