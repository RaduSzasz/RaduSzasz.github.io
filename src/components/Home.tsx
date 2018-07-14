import { Alignment, Button, Card, Navbar, NavbarGroup } from "@blueprintjs/core";
import * as React from "react";
import { changePage } from "../Actions";
import { Pages } from "../Types";
import facebookActive from "./facebookActive.svg";
import facebookPassive from "./facebookPassive.svg";
import "./Home.css";
import linkedinActive from "./linkedinActive.png";
import linkedinPassive from "./linkedinPassive.png";
import quoraActive from "./quoraActive.png";
import quoraPassive from "./quoraPassive.png";
import { SocialMediaHandle } from "./SocialMediaHandle";
import unknown from "./Unknown.png"
import { WorkCard } from "./WorkCard";

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
            <div className="home-presentation">
              <div className="home-intro">
                Hey! Whatever!
              </div>
              <img src={unknown} className="avatar" />
            </div>
            <div className="social-media-group">
              <SocialMediaHandle
                activeIcon={facebookActive}
                link={"https://www.facebook.com/radu.szasz.5"}
                passiveIcon={facebookPassive}
              />
              <SocialMediaHandle
                activeIcon={linkedinActive}
                link={"https://www.linkedin.com/in/radu-szasz-185a34126/"}
                passiveIcon={linkedinPassive}
              />
              <SocialMediaHandle
                activeIcon={quoraActive}
                passiveIcon={quoraPassive}
                link={"https://www.quora.com/profile/Radu-Szasz"}
              />
            </div>
          </div>
        </div>
        <div className="home-body">
          <div className="home-section">
            <span className="section-title">What I'm doing</span>
            <div className="current-work">
              Facebook
            </div>
            <div className="past-experience">
              <WorkCard/>
              <Card className="past-experience-content">
                Palantir Technologies
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function changeToHome() {
  changePage(Pages.HOME);
}

