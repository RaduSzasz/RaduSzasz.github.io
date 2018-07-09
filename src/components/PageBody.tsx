import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState, Pages } from "../Types";

interface IPageBodyProps {
  page: Pages;
}

class PageBody extends React.Component<IPageBodyProps, {}> {
  public render() {
    switch (this.props.page) {
      case Pages.HOME:
        return (<div>
          Bla
        </div>);
    }
    return null;
  }
}

function mapStateToProps({ page }: IApplicationState) {
  return {
    page,
  };
}

export default connect(mapStateToProps)(PageBody);
