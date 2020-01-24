import React, { useState, useContext, useEffect } from "react";
import { string, oneOfType, func, arrayOf, shape, node } from "prop-types";
import { validateUser } from "../utils/validation";
import MobileRequestForm from "./MobileRequestForm";
import Confirm from "../../ConfirmMessage/Confirm";
import withHandleUser from "../../../hoc/withHandleUser";
import MyContext from "../../../context/Base/AppContext";
import FormRegister from "./FormRegister";
import FormBlock from "./FormBlock";
import { prepareData } from "../utils/data";

const UserForm = (props) => {
  const {
    inputData,
    getBack,
    headerText,
    mainText,
    createOrder,
    confirmMessage,
    buttonText,
    handleInputUser,
    user,
    setUser,
  } = props;
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [sended, setSended] = useState(false);
  const { isLightTheme, setLightTheme, hiddenSidebars, setHiddenSidebars, isNavOpened, setIsNavOpened } = useContext(
    MyContext,
  );

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
  headerText: string,
  mainText: oneOfType([string, shape({})]).isRequired,
  getBack: func.isRequired,
  inputData: arrayOf(shape({})),
  createOrder: func.isRequired,
  confirmMessage: node.isRequired,
  buttonText: string,
  handleInputUser: func.isRequired,
  user: shape({}).isRequired,
  setUser: func.isRequired,
};

UserForm.defaultProps = {
  headerText: "",
  inputData: [],
  buttonText: "",
};

export default withHandleUser(UserForm);
