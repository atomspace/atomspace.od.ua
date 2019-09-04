import React from 'react';
import Loader from '../../assets/images/icons/loader.svg';
import { ImageLoader } from '../ImageLoader';

export function Button(props) {
  const { loading = false, children, ...rest } = props;
  let child = props.children;
  if (props.loading) {
    child = (
      <>
        {props.children}
        <ImageLoader className="loader-icon" src={Loader} />
      </>
    );
  }

  return <button {...rest}>{child}</button>;
}
