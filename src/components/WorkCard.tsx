import { Card } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

export interface IWorkCardProps {
  active: boolean;
  company: string;
  role: string;
  description: string;
  logo: string;
}

export class WorkCard extends React.Component<IWorkCardProps, {}> {
  public render() {
    const { active, company, description, logo, role } = this.props;
    return <Card
      className={classNames("past-experience-content", {
        active,
      })}
      elevation={active ? 3 : 1}
    >
      <div className="past-experience-company">
        <div className="company-header">
          <div className="company-title-role">
            <div className="company-title">
              {company}
            </div>
            <div className="company-role">
              {role}
            </div>
          </div>
          <img className="company-logo" src={logo} />
        </div>
        <div className="company-description">
          {description}
        </div>
      </div>
    </Card>
  }
}