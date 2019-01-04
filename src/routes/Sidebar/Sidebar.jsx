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
    console.log(sidebarRows);
    const sidebarClasses = ["vertical-line left"];

    if(!sidebarRows.length){
      sidebarClasses.push("border-none");
    }
    
    
    return (
      <div className={"navigation " + pageName()}>
        <div className={sidebarClasses.join(" ")}>
          <LeftSidebar {...this.props}/>
        </div>
        <div className="vertical-line right">
          <RightSidebar />
        </div>
      </div>
    );
  }
}

export default Sidebar;
