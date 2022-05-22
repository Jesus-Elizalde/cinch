import React from "react";
import { useSelector } from "react-redux";
import MuliGoogleMap from "../GoogleMap/MuliGoogleMap";

const Map = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);

  return (
    <MuliGoogleMap
      coords={{ lat: 39.5, lng: -98.38 }}
      size={{ width: "100%", height: "500px" }}
      zoom={true}
      zoomNum={4}
      circleArr={business?.customers}
    />
  );
};

export default Map;
