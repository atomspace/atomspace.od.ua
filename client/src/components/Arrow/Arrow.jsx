import React from 'react';
import classname from 'classnames';

export default (props) => (
  <div
    onClick={props.onClick}
    className={classname({ slick: true, 'slick-prev': props.rotate, 'slick-next': !props.rotate })}
  />
);
