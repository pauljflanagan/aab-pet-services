import React, { useEffect } from "react";

function LocationComponent() {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log("Latitude:", position.coords.latitude);
              console.log("Longitude:", position.coords.longitude);
            },
            (error) => {
              console.error("Error getting location:", error.message);
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            }
          );
        } else {
          console.warn("Location permission denied.");
        }
      });
    } else {
      console.warn("Geolocation not supported by this browser.");
    }
  }, []);

  return <div>Check the console for location info!</div>;
}

export default LocationComponent;