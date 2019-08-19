import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button } from '../Button/Button';

export default function MobileRequestForm(props) {
  const { headerText, formBlocks, formRegister, submitForm, isLoading } = props;
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
          <Button className={classname('button-next-preview')} loading={isLoading} onClick={submitForm}>
            {headerText}
          </Button>
        </>
      )}
    </div>
  );
}

MobileRequestForm.propTypes = {
  formBlocks: PropTypes.object,
  formRegister: PropTypes.object,
};
