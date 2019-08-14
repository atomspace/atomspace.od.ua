import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

export default function RequestForm(props) {
  const [isMobile, setIsMobile] = useState(true);
  const toggleMobileRequest = () => setIsMobile(!isMobile);

  return (
    <div className="mobile-form-request">
      <div className="header-text">{props.headerText}</div>
      {isMobile ? props.formBlocks : props.formRegister}
      {isMobile ? (
        <button className="button-next-preview" onClick={toggleMobileRequest}>
          К форме
        </button>
      ) : (
        <button className={classname('button-next-preview')} onClick={props.createOrder}>
          {props.headerText}
        </button>
      )}
    </div>
  );
}

RequestForm.propTypes = {
  formBlocks: PropTypes.object,
  formRegister: PropTypes.object,
};
