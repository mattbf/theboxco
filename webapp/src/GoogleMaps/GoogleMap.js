/*global google*/
import React, { useEffect, useState, createRef } from 'react'
import GoogleMapReact from 'google-map-react';
import SearchBar from './SearchBar.js';

import {
  Drawer,
  ListItem,
  List,
  IconButton,
  Avatar,
  Typography,
  Divider,
  Chip
} from "@material-ui/core";

import {
  Place,
  Close,
  Work
} from '@material-ui/icons';

var GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

function GoogleMap(props) {
  //var googleMapRef = React.createRef()
  //var googleMap
  // var marker
  var infoWindow, map
  const openMenu = props.openMenu
  //console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)

  // //init google map
  // useEffect(() => {
  //   const googleMapScript = document.createElement('script')
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
  //   window.document.body.appendChild(googleMapScript)
  //
  //
  //   googleMapScript.addEventListener('load', function(){
  //     googleMap = createGoogleMap()
  //     marker = createMarker()
  //   })
  // }, [])
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
  // const createMarker = () => {
  //   new window.google.maps.Marker({
  //     position: { lat: 43.642567, lng: -79.387054 },
  //     map: googleMap,
  //   })
  // }

  const [mapState, setMapState] = useState({
    lat: 0.00,
    lng: 0.00
  })
  const [zoom, setZoom] = useState(11)
  const [loadLocation, setLoadLocation] = useState(false)
  const [marker, setMarker] = useState({
    lat: '69.2643993',
    lng: '-100.2318585'
  })
  const [status, setStatus] = useState("not delivery")

  //load current location
  useEffect(() =>{
    getCurrentLocation()
  }, [])

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(map)
    console.log(maps)
    //infoWindow = new google.maps.InfoWindow;
  };

  const[sideInfoOpen, setSideInfoOpen] = useState(false)

  const ToggleMenu = () => {
    setSideInfoOpen(!sideInfoOpen)
  }

  const handleDrawerClose = () => {
    setSideInfoOpen(false)
  }


function getCurrentLocation(){
  console.log("GET LOCACTION")
  setLoadLocation(true)
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
      setZoom(14)
      setMapState(pos)
      setMarker({
        lat: pos.lat,
        lng: pos.lng
      })
      setLoadLocation(false)
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
    console.log(marker)
    // console.log(mapState)
    // console.log(zoom)
    // console.log(marker)

  }, [mapState])

  const BoundsChange = (center, zoom) => {
    console.log("bounds change")
    setMapState(center);
    setZoom(zoom);
  }

const K_SIZE = 40

  return (
    <div style={{display: 'flex', height: '100%', width: '100%'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      center={mapState}
      zoom={zoom}

      onBoundsChange={BoundsChange}
    >
        <Place
          color="primary"
          lat={marker.lat}
          lng={marker.lng}
          style={{
            width: '2.5%',
            position: 'absolute',
            width: K_SIZE,
            height: K_SIZE,
            left: -K_SIZE / 2,
            top: -K_SIZE / 2,
          }}
          onClick={ToggleMenu}
        />
    </GoogleMapReact>
      <SearchBar getCurrentLocation={getCurrentLocation} loadLocation={loadLocation} openMenu={openMenu}/>
      <Drawer
        open={sideInfoOpen}
        onClose={handleDrawerClose}
        anchor="right"
        >
        <List style={{height: '100%', backgroundColor: '#FFF', width: '400px', padding: '20px'}}>
          <IconButton onClick={handleDrawerClose}>
            <Close style={{color: '#333'}}/>
          </IconButton>
          <div style={{display: 'flex', flexDirection: 'row',  }}>
            <Avatar style={{width: '75px', height: '75px', margin: '10px'}}>
              <Work />
            </Avatar>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flexStart', justifyContent: 'center',}}>
              <Typography style={{color: '#333'}} variant='body1' > Box id: 123456789</Typography>
              <Typography style={{color: '#333'}} variant='body1' > Destination: 123 Address Street</Typography>
            </div>
            <Chip label={status == "delivery" ? "On Route" : "Not in use"} style={status == "delivery" ? {backgroundColor: 'rgb(41,121,255,0.85)'} : null }/>
          </div>
          <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flexStart', justifyContent: 'center', marginTop: '15px'}}>
              <Typography style={{color: '#333'}} variant='subtitle2'> Package Information</Typography>
              <Divider style={{marginBottom: '10px', backgroundColor: '#003333',}}/>
              <Typography style={{color: '#333'}} variant='body1' > Current Location: some location</Typography>
              <Typography style={{color: '#333'}} variant='body1' > Destination: 123 Address Street</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flexStart', justifyContent: 'center', marginTop: '15px'}}>
              <Typography style={{color: '#333'}} variant='subtitle2'> Package Information</Typography>
              <Divider style={{marginBottom: '10px', backgroundColor: '#003333',}}/>
              <Typography style={{color: '#333'}} variant='body1' > Destination: 123 Address Street</Typography>
            </div>
          </div>
        </List>
      </Drawer>
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
