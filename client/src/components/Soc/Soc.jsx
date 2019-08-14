import React from 'react';

export default function Soc(props) {
  return (
    <div className={props.classes}>
      {props.src.facebook ? (
        <a className="icon facebook" rel="noopener noreferrer" target="_blank" href={props.src.facebook}>
          &nbsp;
        </a>
      ) : null}
      {props.src.instagram ? (
        <a className="icon instagram" rel="noopener noreferrer" target="_blank" href={props.src.instagram}>
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
}
