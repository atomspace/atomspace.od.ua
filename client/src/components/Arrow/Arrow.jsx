import React from "react";
import cl from "classnames";
import { bool, func } from "prop-types";

const Arrow = ({ onClick, isRotate }) => (
  <div
    onClick={onClick}
    className={cl({
      slick: true,
      "slick-prev": isRotate,
      "slick-next": !isRotate,
    })}
  />
);

Arrow.propTypes = {
  isRotate: bool,
  onClick: func,
};

Arrow.defaultProps = {
  onClick: () => {},
  isRotate: false,
};

export default Arrow;
