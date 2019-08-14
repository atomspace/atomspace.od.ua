import React from 'react';
import Loader from '../../assets/images/icons/loader.svg';

export function Button(props) {
  let child = props.children;
  if (props.loading) {
    child = (
      <>
        {props.children}
        <img className="loader-icon" src={Loader} />
      </>
    );
  }

  return <button {...props}>{child}</button>;
}
