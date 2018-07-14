import { Card } from "@blueprintjs/core";
import * as React from "react";
import palantirLogo from "./Palantir-logo.png";

export class WorkCard extends React.Component<{}, {}> {
  public render() {
    return <Card className="past-experience-content">
      <div className="past-experience-company">
        <div className="company-header">
          <div className="company-title-role">
            <div className="company-title">
              Palantir Technologies
            </div>
            <div className="company-role">
              Forward deployed engineer intern
            </div>
          </div>
          <img className="company-logo" src={palantirLogo} />
        </div>
        <div className="company-description">
          React + redux
        </div>
      </div>
    </Card>
  }
}