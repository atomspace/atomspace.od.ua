import React, { Component } from "react";
import LeftSidebar from "./Left";
import RightSidebar from "./Right";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pageName } = this.props;
    return (
      <div className={"navigation " + pageName}>
        <LeftSidebar {...this.props} />
        <RightSidebar {...this.props} />
      </div>
    );
  }
}

export default Sidebar;
