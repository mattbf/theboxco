import React, { useEffect, useState, createRef } from 'react'
import GoogleMapReact from 'google-map-react';


var GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

function GoogleMap() {
  var googleMapRef = React.createRef()
  var googleMap
  var marker
  //console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)

  //init google map
  //useEffect(() => {
    // const googleMapScript = document.createElement('script')
    // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    // window.document.body.appendChild(googleMapScript)

    const [mapState, setMapState] = useState({
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    })

  //   googleMapScript.addEventListener('load', function(){
  //     googleMap = createGoogleMap()
  //     marker = createMarker()
  //   })
  // }, [])
  //
  // const createGoogleMap = () =>{
  //   new window.google.maps.Map(googleMapRef.current, {
  //     zoom: 10,
  //     center: {
  //       lat: 43.642567,
  //       lng: -79.387054,
  //     },
  //     disableDefaultUI: true,
  //   })
  // }
  //
  //
  // const createMarker = () => {
  //   new window.google.maps.Marker({
  //     position: { lat: 43.642567, lng: -79.387054 },
  //     map: googleMap,
  //   })
  // }




  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={mapState.center}
      defaultZoom={mapState.zoom}
      yesIWantToUseGoogleMapApiInternals

    >
      <div
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
        style={{backgroundColor: '#00c676', width: '50px', height: '50px'}}
      />
    </GoogleMapReact>
  )
}

export default GoogleMap

//
// <div
//   id="google-map"
//   ref={googleMapRef}
//   style={{ width: '100%', height: '100%' }}
// />
