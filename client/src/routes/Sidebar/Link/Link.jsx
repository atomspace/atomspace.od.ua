import React from 'react';

const Link = ({ handleDialog, row }) => (
  <div>
    <div className="dot" />
    <a className="list-item form" href={row.link} onClick={handleDialog}>
      {row.title.toUpperCase()}
    </a>
  </div>
);

export default Link;
