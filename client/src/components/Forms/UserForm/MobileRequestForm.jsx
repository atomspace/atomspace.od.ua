/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { string, bool, func, node, shape, arrayOf, number } from "prop-types";
import Button from "../../Button/Button";
import FormBlock from "./FormBlock.jsx";
import FormRegisterMobile from "./FormRegisterMobile";
import Confirm from "../../ConfirmMessage/Confirm";
import StepButtons from "./StepButtons";

function MobileRequestForm(props) {
  const {
    headerText,
    mainText,
    sended,
    submitForm,
    isLoading,
    confirmMessage,
    handleInputUser,
    buttonText,
    user,
    inputData,
    setStep,
    setUser,
    step,
  } = props;
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  const lastStep = step === inputData.length - 1;
  return (
    <div className={cn("mobile-form-request", { sended })}>
      {!sended && <div className="header-text">{headerText}</div>}
      {!isMobile && !sended ? (
        <>
          <FormBlock mainText={mainText} headerText={!sended ? headerText : null} />
          <button type="button" className="button-next-preview" onClick={() => setIsMobile(!isMobile)}>
            {t("form.toForm")}
          </button>
        </>
      ) : (
        !sended && (
          <>
            <FormRegisterMobile
              step={step}
              handleInputUser={handleInputUser}
              isLoading={isLoading}
              submitForm={submitForm}
              buttonText={buttonText}
              user={user}
              inputData={inputData}
            />
            <StepButtons setUser={setUser} step={step} inputData={inputData} setStep={setStep} user={user} />
            {lastStep && (
              <Button className={cn("button-step-change", "right")} loading={isLoading} onClick={submitForm}>
                {t("join")}
              </Button>
            )}
          </>
        )
      )}

      {sended && <Confirm confirmMessage={confirmMessage} />}
    </div>
  );
}

MobileRequestForm.propTypes = {
  headerText: string.isRequired,
  mainText: node.isRequired,
  sended: bool.isRequired,
  submitForm: func.isRequired,
  isLoading: bool.isRequired,
  confirmMessage: node.isRequired,
  handleInputUser: func.isRequired,
  buttonText: string.isRequired,
  user: shape({}).isRequired,
  inputData: arrayOf(shape({})).isRequired,
  setStep: func.isRequired,
  setUser: func.isRequired,
  step: number.isRequired,
};

export default MobileRequestForm;
