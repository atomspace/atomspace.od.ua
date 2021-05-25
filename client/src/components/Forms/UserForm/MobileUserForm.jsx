import React, { useState, useContext, useEffect } from "react";
import { string, oneOfType, func, arrayOf, shape, node, any } from "prop-types";
import { validateUser } from "../utils/validation";
import MobileRequestForm from "./MobileRequestForm";
import withHandleUser from "../../../hoc/withHandleUser";
import MyContext from "../../../context/Base/AppContext";
import { prepareData } from "../utils/data";

const MobileUserForm = ({
  inputData,
  getBack,
  headerText,
  mainText,
  createOrder,
  confirmMessage,
  buttonText,
  handleInputUser,
  user,
  children,
  setUser,
}) => {
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

    console.log("321123 :>> ", 321123);
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
  );
};

MobileUserForm.propTypes = {
  headerText: string,
  mainText: oneOfType([string, shape({})]).isRequired,
  getBack: func.isRequired,
  inputData: arrayOf(shape({})),
  createOrder: func.isRequired,
  confirmMessage: node.isRequired,
  buttonText: string,
  children: any,
  handleInputUser: func,
  user: shape({}),
  setUser: func,
};

MobileUserForm.defaultProps = {
  headerText: "",
  inputData: [],
  buttonText: "",
};

export default withHandleUser(MobileUserForm);
