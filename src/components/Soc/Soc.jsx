import React from "react";
export default props => (
  <div className={props.classes}>
    {props.src.facebook ? (
      <a className="icon facebook" href={props.src.facebook}>
        &nbsp;
      </a>
    ) : null}
    {props.src.instagram ? (
      <a className="icon instagram" href={props.src.instagram}>
        &nbsp;
      </a>
    ) : null}
    {props.src.linkedin ? (
      <a className="icon linkedin" href={props.src.linkedin}>
        &nbsp;
      </a>
    ) : null}
  </div>
);
