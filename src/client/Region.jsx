import React, { useRef, useState } from "react";
// import { GoogleMap, LoadScript, Autocomplete, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "80%",
//   height: "200px",
// };

// const defaultCenter = {
//   lat: 40.7128, // Example latitude
//   lng: -74.0060, // Example longitude
// };

// const App = () => {
//   const [center, setCenter] = useState(defaultCenter);
//   const [markerPosition, setMarkerPosition] = useState(defaultCenter);
//   const autocompleteRef = useRef(null);

//   const onPlaceChanged = () => {
//     const place = autocompleteRef.current.getPlace();
//     console.log(place);
//     if (place.geometry) {
//       const newLocation = {
//         lat: place.geometry.location.lat(),
//         lng: place.geometry.location.lng(),
//       };
//       setCenter(newLocation);
//       setMarkerPosition(newLocation);
//     }
//   };

//   return (
//     <div className="page-format">
//         <LoadScript googleMapsApiKey="" libraries={["places"]}>
//         <Autocomplete
//             onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
//             onPlaceChanged={onPlaceChanged}
//         >
//             <div className="region-search" style={{ paddingBottom: '20px' }}>
//                 <h3 style={{ fontWeight: 'bold' }}>Enter your address</h3>
//                 <input
//                 type="text"
                
//                 placeholder="Search for a place"
//                 style={{ width: "100%", padding: "10px" }}
//                 />
//             </div>
//         </Autocomplete>
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//             <Marker position={markerPosition} />
//         </GoogleMap>
//         </LoadScript>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      Region component.
    </div>
  )
}

export default App;