import React from "react";

export default props => (
  <div>
    <div className={"dot"} />
    <a
      className="list-item form"
      href={props.row.link}
      onClick={props.handleDialog}
    >
      {props.row.title.toUpperCase()}
    </a>
  </div>
);
