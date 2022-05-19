import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  StreetViewPanorama,
} from "@react-google-maps/api";

import "./GoogleMap.css";

import { blueEssence } from "./mapStyles";
import { useSelector } from "react-redux";

const GoogleMaps = ({ coords, size, zoom, zoomNum, mode }) => {
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
      {mode === "marker" && (
        <Marker
          position={{
            lat: coords.lat,
            lng: coords.lng,
          }}
          // icon={{
          //   url: "/f1icon.svg",
          //   scaledSize: new window.google.maps.Size(75, 75),
          //   origin: new window.google.maps.Point(0, 0),
          // }}
        />
      )}
      {mode === "street" && (
        <StreetViewPanorama
          position={center}
          visible={true}
          // icon={{
          //   url: "/f1icon.svg",
          //   scaledSize: new window.google.maps.Size(75, 75),
          //   origin: new window.google.maps.Point(0, 0),
          // }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMaps);
