import React, { Component } from "react";
import LeftSidebar from "./Left";
import RightSidebar from "./Right";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render() {
    const {pageName,sidebarRows} = this.props;
    const sidebarClasses = ["vertical-line left"];

    if(!sidebarRows.length){
      sidebarClasses.push("border-none");
    }
    console.log(pageName);
    
    return (
      <div className={"navigation " + pageName}>
        <div className={sidebarClasses.join(" ")}>
          <LeftSidebar {...this.props}/>
        </div>
        <div className="vertical-line right">
          <RightSidebar  {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
