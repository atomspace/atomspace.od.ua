import React from "react";
import LeftSidebar from "../../routes/Sidebar/Left";

export default props => (
  <div className={"form-container"}>
    <div className={"navigation " + props.pageName}>
      <LeftSidebar {...props} />
    </div>
    {props.children}
    <div className="atom-logo" />
    <div className="close-dialog-btn" onClick={props.closeForm}></div>
  </div>
);
