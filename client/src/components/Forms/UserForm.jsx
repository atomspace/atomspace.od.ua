import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import LeftSidebar from '../../routes/Sidebar/Left';
import { validateUser } from './utils/validation';
import MobileRequestForm from './MobileRequestForm';
import { Button } from '../Button/Button';
import Confirm from '../ConfirmMessage/Confirm';
import { withHandleUser } from '../../hoc/withHandleUser';

const UserForm = props => {
  const {
    inputData,
    createOrder,
    getBack,
    headerText,
    confirmMessage,
    buttonText,
    mainText,
    handleInputUser,
    user,
    setUser,
  } = props;
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [sended, setSended] = useState(false);
  const { t } = useTranslation();

  const prepareData = user =>
    Object.keys(user).reduce(
      (acc, key) => ({ ...acc, [key]: user[key].value }),
      {},
    );

  const submitForm = async () => {
    const { stateUser, isDisabled } = validateUser(user, inputData);
    setUser(stateUser);
    if (!isDisabled) {
      const data = prepareData(user);
      try {
        setLoading(true);
        await createOrder(data);
        setLoading(false);
        setSended(true);
      } catch (e) {
        setLoading(false);
        getBack();
      }
    }
  };

  const renderFormBlocks = () => {
    return (
      <div className="form-blocks flex flex-cen">
        <div className="form-maintext-block">
          <div className="form-maintext-block__header">{headerText}</div>
          <div className="form-maintext-block__text">{mainText}</div>
        </div>
      </div>
    );
  };

  const changeStep = ({ target: { innerHTML } }) => {
    return innerHTML === t('back') ? setStep(step - 1) : setStep(step + 1);
  };

  const renderStepButtons = () => {
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

  const renderFormRegister = () => {
    return !sended ? (
      <div className="form-main">
        <div className="form-registration">
          {inputData.map(data => (
            <div className="form-block" key={data.id}>
              <input
                className={cn({ error: user[data.id].error })}
                id={data.id}
                type={data.id === 'birth' ? 'text' : data.type}
                placeholder={data.placeholder}
                value={user[data.id].value || data.defaultValue}
                onChange={handleInputUser.bind(this, data)}
                onFocus={handleInputUser.bind(this, data)}
              />
            </div>
          ))}
          <div className="request-button-block">
            <Button
              className="btn btn-support btn-request"
              loading={isLoading}
              onClick={submitForm}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    ) : null;
  };

  const renderFormRegisterMobile = (step = 0) => {
    const data = inputData[step];
    const index = inputData.indexOf(data);
    return (
      <div className="form-main">
        <div className="form-registration">
          <div className="form-block" key={index}>
            <input
              className={cn({ error: user[data.id].error })}
              id={data.id}
              type={data.id === 'birth' ? 'text' : data.type}
              placeholder={data.placeholder}
              value={user[data.id].value || data.defaultValue}
              onChange={handleInputUser.bind(this, data)}
              onFocus={handleInputUser.bind(this, data)}
            />
          </div>
          <div className="request-button-block">
            <Button
              className="btn btn-support btn-request"
              loading={isLoading}
              onClick={submitForm}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-form-container">
      <div className="navigation">
        <LeftSidebar {...props} />
      </div>

      <div className="form-request">
        {renderFormBlocks()}
        {renderFormRegister()}
        {sended ? <Confirm confirmMessage={confirmMessage} /> : null}
      </div>
      <div className="atom-logo" />
      <div className="close-dialog-btn" onClick={getBack} />
      <div className="nav_toggle arrow" onClick={getBack} />
      <MobileRequestForm
        formBlocks={renderFormBlocks()}
        formRegister={!sended ? renderFormRegisterMobile(step) : null}
        stepButtons={!sended && renderStepButtons()}
        confirmMessage={
          sended ? <Confirm confirmMessage={confirmMessage} /> : null
        }
        headerText={!sended ? headerText : null}
        submitForm={submitForm}
        isLoading={isLoading}
        changeStep={changeStep}
        showButton={!sended && step === inputData.length - 1}
      />
    </div>
  );
};

UserForm.propTypes = {
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  mainText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  getBack: PropTypes.func.isRequired,
  inputData: PropTypes.arrayOf(PropTypes.object),
};

UserForm.defaultProps = {
  headerText: '',
  buttonText: '',
  inputData: [],
};

export default withHandleUser(UserForm);
