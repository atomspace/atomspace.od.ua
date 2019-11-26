import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Button } from '../../Button/Button';
import { validateUser } from '../utils/validation';

const StepButtons = ({ step, inputData, setStep, setUser, user }) => {
  const { t } = useTranslation();

  const changeStep = ({ target: { innerHTML } }) => {
    const data = inputData[step];
    const { stateUser } = validateUser(user, inputData);
    setUser(stateUser);
    const isError = user[data.id].error;
    return (
      !isError &&
      (innerHTML === t('back') ? setStep(step - 1) : setStep(step + 1))
    );
  };

  const NavButton = ({ title, isBack }) => (
    <Button
      className={cn('button-step-change', isBack ? 'left' : 'right')}
      onClick={changeStep}
    >
      {title}
    </Button>
  );
  return (
    <div>
      {step > 0 ? <NavButton isBack title={t('back')} /> : null}
      {step < inputData.length - 1 ? (
        <NavButton isBack={false} title={t('forward')} />
      ) : null}
    </div>
  );
};

export default StepButtons;
