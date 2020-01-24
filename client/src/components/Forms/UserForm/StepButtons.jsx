import React from "react";
import { useTranslation } from "react-i18next";
import { number, shape, func, arrayOf } from "prop-types";
import { validateUser } from "../utils/validation";
import NavButton from "./NavButton";

const StepButtons = ({ step, inputData, setStep, setUser, user }) => {
  const { t } = useTranslation();

  const changeStep = ({ target: { innerHTML } }) => {
    const data = inputData[step];
    const { stateUser } = validateUser(user, inputData);
    setUser(stateUser);
    const isError = user[data.id].error;
    return !isError && (innerHTML === t("back") ? setStep(step - 1) : setStep(step + 1));
  };

  return (
    <div>
      {step > 0 ? <NavButton isBack title={t("back")} changeStep={changeStep} /> : null}
      {step < inputData.length - 1 ? <NavButton isBack={false} title={t("forward")} changeStep={changeStep} /> : null}
    </div>
  );
};
StepButtons.propTypes = {
  step: number.isRequired,
  inputData: arrayOf(shape({})).isRequired,
  setStep: func.isRequired,
  setUser: func.isRequired,
  user: shape({}).isRequired,
};

export default StepButtons;
