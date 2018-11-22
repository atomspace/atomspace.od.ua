import React, { Component } from "react";
import LeftSidebar from "./Left";
import RightSidebar from "./Right";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return;
    <div className="navigation">
      <div className="vertical-line left" />    
      <LeftSidebar />
      <RightSidebar />
      <div className="vertical-line right" />
    </div>;
  }
}

export default Sidebar;
