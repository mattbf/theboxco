import React from "react";
import { render } from "react-dom";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react";

import './app.scss';


const App = () => (
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
);

export default App
