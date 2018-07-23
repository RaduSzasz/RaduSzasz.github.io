import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
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
            <div className="section-title">What I'm doing</div>
            <div className="experience">
              <WorkCard
                active={true}
                company="Facebook"
                role="Software Engineer"
                description="I would love to know this myself"
              />
              <WorkCard
                active={false}
                company="Palantir Technologies"
                role="Forward Deployed Engineer Intern"
                description="Worked in a medium sized team on a product delivered to a CPG company. On the frontend I
refactored and added new features to a React Redux application written in TypeScript, while on
the Java Dropwizard backend, my activity focused on querying the data required to respond to the
requests received in an ecient manner. As side tasks, I worked on data processing and collection."
              />
              <WorkCard
                active={false}
                company="Palantir Technologies"
                role="Forward Deployed Engineer Intern"
                description="I will fill this in a while"
              />
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

