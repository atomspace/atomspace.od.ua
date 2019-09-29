import React from 'react';
import cl from 'classnames';

const Arrow = ({ onClick, rotate }) => (
  <div
    onClick={onClick}
    className={cl({ slick: true, 'slick-prev': rotate, 'slick-next': !rotate })}
  />
);

export default Arrow;
