import { Card } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";
import palantirLogo from "./Palantir-logo.png";

export interface IWorkCardProps {
  active: boolean;
  company: string;
  role: string;
  description: string;
}

export class WorkCard extends React.Component<IWorkCardProps, {}> {
  public render() {
    const { active } = this.props;
    return <Card
      className={classNames("past-experience-content", {
        active,
      })}
    >
      <div className="past-experience-company">
        <div className="company-header">
          <div className="company-title-role">
            <div className="company-title">
              {this.props.company}
            </div>
            <div className="company-role">
              {this.props.role}
            </div>
          </div>
          <img className="company-logo" src={palantirLogo} />
        </div>
        <div className="company-description">
          {this.props.description}
        </div>
      </div>
    </Card>
  }
}