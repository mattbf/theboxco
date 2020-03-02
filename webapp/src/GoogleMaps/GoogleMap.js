import React, { useEffect, createRef } from 'react'
require('dotenv').config()

var GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

function GoogleMap() {
  var googleMapRef = React.createRef()
  var googleMap
  var marker
  //console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)

  //init google map
  useEffect(() => {
    const googleMapScript = document.createElement('script')
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleMapScript)

    googleMapScript.addEventListener('load', function(){
      googleMap = createGoogleMap()
      marker = createMarker()
    })
  }, [])

  const createGoogleMap = () =>{
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    })
  }


  const createMarker = () => {
    new window.google.maps.Marker({
      position: { lat: 43.642567, lng: -79.387054 },
      map: googleMap,
    })
  }




  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default GoogleMap
