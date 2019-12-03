import React from 'react';
import { func, shape, string } from 'prop-types';

const Link = ({ handleDialog, row }) => (
  <div>
    <div className="dot" />
    <a className="list-item form" href={row.link} onClick={handleDialog}>
      {row.title.toUpperCase()}
    </a>
  </div>
);

Link.propTypes = {
  handleDialog: func.isRequired,
  row: shape({
    link: string,
  }).isRequired,
};

export default Link;
