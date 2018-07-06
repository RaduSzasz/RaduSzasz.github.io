import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                  Radu Szasz
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
                  <Button text="Home"/>
              </NavbarGroup>
          </Navbar>
      </div>
    );
  }
}

export default App;
