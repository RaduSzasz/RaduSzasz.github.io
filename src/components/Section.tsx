import * as classNames from "classnames";
import * as React from "react";

export interface ISectionProps {
  title: string;
  className?: string;
  body: React.ReactElement<{}>;
}

export class Section extends React.Component<ISectionProps, {}> {
  public render() {
    const { body, className, title } = this.props;
    return (
      <div className={classNames("home-section", className)}>
        <div className="section-title">{title}</div>
        {body}
      </div>
    );
  }
}