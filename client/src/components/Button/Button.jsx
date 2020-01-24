import React from "react";
import { bool, node } from "prop-types";
import Loader from "../../assets/images/icons/loader.svg";

import { ImageLoader } from "../ImageLoader";

const Button = ({ loading, children, ...rest }) => {
  let child = children;
  if (loading) {
    child = (
      <>
        {children}
        <ImageLoader className="loader-icon" src={Loader} />
      </>
    );
  }

  return (
    <button type="button" {...rest}>
      {child}
    </button>
  );
};
export default Button;

Button.propTypes = {
  children: node,
  loading: bool,
};
Button.defaultProps = {
  children: null,
  loading: false,
};
