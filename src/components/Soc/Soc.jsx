import React from "react";
export default props => (
  <div className={props.classes}>
    {props.src.facebook ? (
      <a className="icon facebook" href={props.src.facebook} />
    ) : null}
    {props.src.instagram ? (
      <a className="icon instagram" href={props.src.instagram} />
    ) : null}
    {props.src.linkedin ? (
      <a className="icon linkedin" href={props.src.linkedin} />
    ) : null}
  </div>
);
