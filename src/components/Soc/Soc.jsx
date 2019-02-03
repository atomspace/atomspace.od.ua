import React from "react";
export default props => (
  <div className={props.classes}>
    {props.src.facebook ? (
      <a className="facebook-icon" href={props.src.facebook} />
    ) : null}
    {props.src.instagram ? (
      <a className="instagram-icon" href={props.src.instagram} />
    ) : null}
  </div>
);
