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


const App = () => (
  <div>
    <div className="container">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
      </Header>
    </div>
    <Content>
      <Button> Carbon Button </Button>
      <GoogleMap/>
    </Content>
  </div>
);

export default App
