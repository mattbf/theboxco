/*global google*/
import React, { useEffect, useState, createRef } from 'react'
import GoogleMapReact from 'google-map-react';
import SearchBar from './SearchBar.js';

var GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

function GoogleMap() {
  // var googleMapRef = React.createRef()
  // var googleMap
  // var marker
  var infoWindow, map
  //console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)

  //init google map
  //useEffect(() => {
    // const googleMapScript = document.createElement('script')
    // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    // window.document.body.appendChild(googleMapScript)


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

  const [mapState, setMapState] = useState({
    lat: 59.95,
    lng: 30.33
  })
  const [zoom, setZoom] = useState(11)

  const handleApiLoaded = (map, maps) => {
  // use map and maps objects
  console.log(map)
  console.log(maps)
  infoWindow = new google.maps.InfoWindow;
  };


function getCurrentLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //infoWindow.setPosition(pos);
      //infoWindow.setContent('Location found.');
      //infoWindow.open(map);
      console.log(pos)
      setMapState(pos)
      return(pos)

      //map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError() {
    return console.log("error")
  }
}

  useEffect(() => {
    console.log("map state changed")
    console.log(mapState)
  }, [mapState])


  return (
    <div style={{display: 'flex', height: '100%', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapState}
        center={mapState}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <div
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
          style={{backgroundColor: '#00c676', width: '50px', height: '50px'}}
        />
      </GoogleMapReact>
      <SearchBar getCurrentLocation={getCurrentLocation}/>
    </div>
  )
}

export default GoogleMap

//
// <div
//   id="google-map"
//   ref={googleMapRef}
//   style={{ width: '100%', height: '100%' }}
// />
