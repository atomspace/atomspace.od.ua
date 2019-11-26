import React from 'react';
import { bool, node } from 'prop-types';
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
  Button.propTypes = {
    children: node.isRequired,
    loading: bool.isRequired,
  };
  return (
    <button type="button" {...rest}>
      {child}
    </button>
  );
};
