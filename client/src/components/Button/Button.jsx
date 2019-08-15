import React from 'react';
import Loader from '../../assets/images/icons/loader.svg';

export function Button(props) {
  const { loading = false, children, ...rest } = props;
  let child = props.children;
  console.log(props);
  if (props.loading) {
    console.log('IMAGE');
    child = (
      <>
        {props.children}
        <img className="loader-icon" src={Loader} />
      </>
    );
  }

  return <button {...rest}>{child}</button>;
}
