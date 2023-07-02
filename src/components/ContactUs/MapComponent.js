import React, { useMemo } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export const MapComponent = () => {
    const center = useMemo(() => ({ lat: 8.547030, lng: 76.880550}), []);
  

  return (
    <div
      className="map-container"
      style={{ height: "400px", width: "100%", position: "relative" }}
    >
      <LoadScript googleMapsApiKey="AIzaSyBEaDbb1XRKw3nrEo8SJ39VkqV9I_5Mf6c">
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 8.547030, lng: 76.880550 }} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}/>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
