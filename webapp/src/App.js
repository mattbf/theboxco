import React from "react";
import { render } from "react-dom";
import './app.scss';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Button
} from "carbon-components-react";

import { Content } from 'carbon-components-react/es/components/UIShell';

import GoogleMap from './GoogleMaps/GoogleMap.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const App = () => (
  <div>
    <Router>
      <div className="container">
        <Header aria-label="The Box co.">
          <HeaderName href="#" prefix="The Box co.">
            [demo]
          </HeaderName>
          <HeaderNavigation aria-label="The Box co.">
            <HeaderMenuItem>
              <Link to='/'>
                Home
              </Link>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <Link to='/map'>
                Map
              </Link>
            </HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
        </Header>
      </div>
      <Content style={{paddingTop: '60px'}}>
        <Route exact path="/">
          <Button> Carbon Button </Button>
        </Route>
        <Route path="/map">
          <GoogleMap/>
        </Route>
      </Content>
    </Router>
  </div>
);

export default App
