import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
import * as React from "react";
import { changePage } from "../Actions";
import { Pages } from "../Types";
import "./Home.css";
import unknown from "./Unknown.png"

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="home">
        <div className="home-static">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <Button text="Home" className="pt-minimal" onClick={changeToHome}/>
              <Button text="Blog" className="pt-minimal" />
            </NavbarGroup>
          </Navbar>
          <div className="home-static-body">
            <img src={unknown} className="avatar" />
          </div>
        </div>
        <div className="home-body">
          bcd
        </div>
      </div>
    );
  }

}

function changeToHome() {
  changePage(Pages.HOME);
}

