import React from "react";
import { render } from "react-dom";
import './app.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Button,
  Search
} from "carbon-components-react";

import { Content } from 'carbon-components-react/es/components/UIShell';

import GoogleMap from './GoogleMaps/GoogleMap.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
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
    h4: {
      fontFamily: "\"Work Sans\", \"Helvetica\", \"Arial\", sans-serif",
      fontWeight: 700,
      fontSize: 30
    },
    "fontFamily": "\"Dm Sans\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 700,
    "fontWeightBold": 900,
   }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div style={{display: 'flex'}}>
      <Router>
        <div>
        </div>
        <div style={{height: '100vh', width: '125px', backgroundColor: '#333'}}>

        </div>
        <div style={{paddingTop: '0px', width: '100%'}}>
          <Search/>
          <Route exact path="/">
            <Button> Carbon Button </Button>
          </Route>
          <Route path="/map">
            <GoogleMap/>
          </Route>
        </div>
      </Router>
    </div>
  </ThemeProvider>

);

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
