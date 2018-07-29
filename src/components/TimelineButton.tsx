import * as classNames from "classnames";
import * as React from "react";

export interface ITimelineButtonProps {
  active: boolean;
  activeLogo: string;
  passiveLogo: string;
  onClick: () => void;
}

export class TimelineButton extends React.Component<ITimelineButtonProps, {}> {
  public render() {
    const { active, activeLogo, passiveLogo, onClick } = this.props;
    return <img
      className={classNames("timeline-btn", {
          active,
        })
      }
      src={active ? activeLogo : passiveLogo}
      onClick={onClick}
    />;
  }
}