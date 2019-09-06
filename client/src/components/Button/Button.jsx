import React from 'react';
import Loader from '../../assets/images/icons/loader.svg';

export const Button = ({ loading = false, children, ...rest }) => {
  let child = children;
  if (loading) {
    child = (
      <>
        {children}
        <img className="loader-icon" src={Loader} alt="loaderIcon" />
      </>
    );
  }

  return (
    <button type="button" {...rest}>
      {child}
    </button>
  );
};
