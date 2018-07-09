import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
import * as React from 'react';
import { changePage } from "./Actions";
import './App.css';
import PageBody from "./components/PageBody";
import { Pages } from "./Types";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                  Radu Szasz
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
                  <Button text="Home" onClick={changeToHome}/>
              </NavbarGroup>
          </Navbar>
          <PageBody />
      </div>
    );
  }
}

function changeToHome() {
  changePage(Pages.HOME);
}

export default App;
