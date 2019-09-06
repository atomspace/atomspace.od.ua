import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

function MobileRequestForm(props) {
  const {
    headerText,
    formBlocks,
    formRegister,
    submitForm,
    isLoading,
    stepButtons,
    showButton,
    confirmMessage,
  } = props;
  const [isMobile, setIsMobile] = useState(true);
  const { t } = useTranslation();
  return (
    <div className="mobile-form-request">
      <div className="header-text">{headerText}</div>
      {isMobile ? (
        <>
          {formBlocks}
          <button type="button" className="button-next-preview" onClick={setIsMobile.bind(this, !isMobile)}>
            {t('form.toForm')}
          </button>
        </>
      ) : (
        <>
          {formRegister}
          {stepButtons}
          {showButton ? (
            <Button className={cl('button-step-change', 'right')} loading={isLoading} onClick={submitForm}>
              {t('contacts.beResident')}
            </Button>
          ) : null}
          {confirmMessage}
        </>
      )}
    </div>
  );
}

MobileRequestForm.propTypes = {
  formBlocks: PropTypes.element.isRequired,
  formRegister: PropTypes.element.isRequired,
  stepButtons: PropTypes.element.isRequired,
};

export default MobileRequestForm;
