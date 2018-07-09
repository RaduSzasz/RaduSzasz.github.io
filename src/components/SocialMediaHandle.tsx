import * as React from "react";

export interface ISocialMediaHandleProps {
  activeIcon: string;
  passiveIcon: string;
  link: string;
}

interface ISocialMediaHandleState {
  hovered: boolean;
}

export class SocialMediaHandle extends React.Component<ISocialMediaHandleProps, ISocialMediaHandleState> {
  public state = {
    hovered: false,
  }

  public render() {
    const { activeIcon, passiveIcon } = this.props;
    return <img
      className="social-media"
      onMouseEnter={this.setHoveringState(true)}
      onMouseLeave={this.setHoveringState(false)}
      onClick={this.openLink}
      src={this.state.hovered ? activeIcon : passiveIcon}
    />;
  }


  private setHoveringState = (hovered: boolean) =>
    () => this.setState((prev: ISocialMediaHandleState) => ({
    ...prev,
    hovered,
  }))

  private openLink = () => window.open(this.props.link, "_blank");
}

