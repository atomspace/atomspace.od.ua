import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button } from '../Button/Button';

export default function MobileRequestForm(props) {
  const { headerText, formBlocks, formRegister, submitForm, isLoading, stepButtons, showButton, confirmMessage } = props;
  const [isMobile, setIsMobile] = useState(true);
  return (
    <div className="mobile-form-request">
      <div className="header-text">{headerText}</div>
      {isMobile ? (
        <>
          {formBlocks}
          <button className="button-next-preview" onClick={setIsMobile.bind(this, !isMobile)}>
            К форме
          </button>
        </>
      ) : (
        <>
          {formRegister}
          {stepButtons}
          {showButton ? <Button className={classname('button-step-change', 'right')} loading={isLoading} onClick={submitForm}>{headerText}</Button> : null}
          {confirmMessage}
        </>
      )}
    </div>
  );
}

MobileRequestForm.propTypes = {
  formBlocks: PropTypes.object,
  formRegister: PropTypes.object,
  stepButtons: PropTypes.object,
};
