import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateUser } from '../utils/validation';
import MobileRequestForm from './MobileRequestForm';
import Confirm from '../../ConfirmMessage/Confirm';
import { withHandleUser } from '../../../hoc/withHandleUser';
import MyContext from '../../../context/Base/AppContext';
import FormRegister from './FormRegister';
import FormBlock from './FormBlock';
import { prepareData } from '../utils/data';

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
  const {
    isLightTheme,
    setLightTheme,
    hiddenSidebars,
    setHiddenSidebars,
    isNavOpened,
    setIsNavOpened,
  } = useContext(MyContext);

  useEffect(() => {
    setLightTheme(true);
    setIsNavOpened(false);
    setHiddenSidebars(true);
    return () => {
      setLightTheme(false);
      setHiddenSidebars(false);
    };
  }, [isLightTheme, isNavOpened, hiddenSidebars]);

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

  return (
    <div className="main-form-container">
      <div className="form-request">
        <FormBlock mainText={mainText} headerText={headerText} />
        <FormRegister
          inputData={inputData}
          sended={sended}
          isLoading={isLoading}
          submitForm={submitForm}
          user={user}
          handleInputUser={handleInputUser}
        />
        {sended ? <Confirm confirmMessage={confirmMessage} /> : null}
      </div>
      <div className="atom-logo" />
      <div className="close-dialog-btn" onClick={getBack} />
      <div className="nav_toggle arrow" onClick={getBack} />
      <MobileRequestForm
        step={step}
        handleInputUser={handleInputUser}
        buttonText={buttonText}
        user={user}
        setStep={setStep}
        inputData={inputData}
        sended={sended}
        confirmMessage={confirmMessage}
        mainText={mainText}
        headerText={headerText}
        submitForm={submitForm}
        isLoading={isLoading}
        setUser={setUser}
      />
    </div>
  );
};

UserForm.propTypes = {
  headerText: PropTypes.string,
  mainText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  getBack: PropTypes.func.isRequired,
  inputData: PropTypes.arrayOf(PropTypes.object),
};

UserForm.defaultProps = {
  headerText: '',
  inputData: [],
};

export default withHandleUser(UserForm);
