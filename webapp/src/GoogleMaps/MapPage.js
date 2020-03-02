import React, { useEffect, createRef } from 'react'
import SearchBar from './SearchBar.js';
import GoogleMap from './GoogleMap.js';


function MapPage() {


  return (
    <div style={{height: '100%', width: 'calc(100% - 110px)', border: 'solid'}}>
      <GoogleMap/>
      <SearchBar/>
    </div>
  )
}

export default MapPage
