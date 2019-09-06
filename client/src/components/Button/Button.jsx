import React from 'react';
import Loader from '../../assets/images/icons/loader.svg';
import { ImageLoader } from '../ImageLoader';

export const Button = ({ loading = false, children, ...rest }) => {
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
