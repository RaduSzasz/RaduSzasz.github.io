import * as React from "react";
import "./Timeline.css"
import { TimelineButton } from "./TimelineButton";

export interface IEntry {
  active: boolean;
  activeLogo: string;
  passiveLogo: string;
  onClick: () => void;
}

export interface ITimelineProps {
  entries: IEntry[];
}

export class Timeline extends React.Component<ITimelineProps, {}> {
  public render() {
    return <div className="timeline">
      {this.props.entries.map(({ active, activeLogo, passiveLogo, onClick }, idx) =>
        <TimelineButton
          active={active}
          activeLogo={activeLogo}
          key={idx}
          passiveLogo={passiveLogo}
          onClick={onClick}
        />)
      }
    </div>;
  }
}