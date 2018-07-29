import * as classNames from "classnames";
import * as React from "react";
import { Timeline } from "./Timeline";

export interface IExperience {
  title: string;
  role: string;
  time: string;
  activeLogo: string;
  passiveLogo: string;
  description: string;
}

export interface ISectionProps {
  className?: string;
  experiences: IExperience[];
}

export interface ISectionState {
  selectedExperienceIdx: number;
}

export class Section extends React.Component<ISectionProps, ISectionState> {
  constructor(props: ISectionProps) {
    super(props);
    this.state = {
      selectedExperienceIdx: 0,
    };
  }

  public render() {
    const { className, experiences } = this.props;
    const { selectedExperienceIdx: selectedIdx } = this.state;
    const { activeLogo, description, role, time, title } = experiences[selectedIdx];
    return (
      <div className={classNames("home-section", className)}>
        <Timeline
          entries={experiences.map((exp, idx) => ({
            active: selectedIdx === idx,
            activeLogo: exp.activeLogo,
            onClick: () => this.setState({ selectedExperienceIdx: idx }),
            passiveLogo: exp.passiveLogo,
          }))}
        />
        <div className="home-section-header">
          <div className="company-title-role">
            <div className="company-title">{title}</div>
            <div className="company-role">{role}</div>
            <div className="company-time">{time}</div>
          </div>
          <img className="company-logo" src={activeLogo} />
        </div>
        <div className="home-section-body">{description}</div>
      </div>
    );
  }
}