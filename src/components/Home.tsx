import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
import * as React from "react";
import { changePage } from "../Actions";
import { EDUCATION } from "../Education";
import facebookActive from "../media/facebookActive.svg";
import facebookPassive from "../media/facebookPassive.svg";
import linkedinActive from "../media/linkedinActive.png";
import linkedinPassive from "../media/linkedinPassive.png";
import quoraActive from "../media/quoraActive.png";
import quoraPassive from "../media/quoraPassive.png";
import unknown from "../media/Unknown.png"
import { Pages } from "../Types";
import { WORK_EXPERIENCE } from "../WorkExperience";
import "./Home.css";
import { Section } from "./Section";
import { SocialMediaHandle } from "./SocialMediaHandle";

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="home">
        <div className="home-static">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <Button text="Home" className="bp3-minimal" onClick={changeToHome}/>
              <Button text="Blog" className="bp3-minimal" />
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
          <Section
            className="work"
            experiences={WORK_EXPERIENCE}
            title="Work Experience"
          />
          <Section
            className="education"
            experiences={EDUCATION}
            title="Education"
          />
        </div>
      </div>
    );
  }
}

function changeToHome() {
  changePage(Pages.HOME);
}

