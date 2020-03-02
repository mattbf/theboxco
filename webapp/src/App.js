import React from "react";
import { render } from "react-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  Drawer,
  Search,
} from "@material-ui/core";

import Home from './Home.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3D5AFE',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#00c853',
    },
    info: {
      main: '#00c853',
    },
    warning: {
      main: '#00c853',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    "fontFamily": "\"IMB Plex Sans\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 700,
    "fontWeightBold": 900,
    button: {
      textTransform: "none",
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 1
  }
});

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div style={{display: 'flex', height: '100vh'}}>
        <Router>
            <Route path="/">
              <Home/>
            </Route>
        </Router>
      </div>
    </ThemeProvider>
  )
}


export default App

//
// <Header aria-label="The Box co.">
//   <HeaderName href="#" prefix="The Box co.">
//     [demo]
//   </HeaderName>
//   <HeaderNavigation aria-label="The Box co.">
//     <HeaderMenuItem>
//       <Link to='/'>
//         Home
//       </Link>
//     </HeaderMenuItem>
//     <HeaderMenuItem>
//       <Link to='/map'>
//         Map
//       </Link>
//     </HeaderMenuItem>
//     <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
//       <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
//       <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
//       <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
//     </HeaderMenu>
//   </HeaderNavigation>
// </Header>
