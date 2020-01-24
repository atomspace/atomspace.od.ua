import React from "react";
import { string, bool, func, arrayOf, shape, number } from "prop-types";
import Select from "../../Select";
import Input from "../../Input";
import Button from "../../Button/Button";

const FormRegisterMobile = ({ step, handleInputUser, isLoading, submitForm, buttonText, user, inputData }) => {
  const data = inputData[step];
  const index = inputData.indexOf(data);
  return (
    <div className="form-main">
      <div className="form-registration">
        <div className="form-block" key={index}>
          {data.type === "select" ? (
            <Select data={data} user={user} handleInputUser={handleInputUser} />
          ) : (
            <Input data={data} user={user} handleInputUser={handleInputUser} />
          )}
        </div>
        <div className="request-button-block">
          <Button className="btn btn-support btn-request" loading={isLoading} onClick={submitForm}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
FormRegisterMobile.propTypes = {
  step: number,
  handleInputUser: func.isRequired,
  isLoading: bool.isRequired,
  submitForm: func.isRequired,
  buttonText: string.isRequired,
  user: shape({}).isRequired,
  inputData: arrayOf(shape({})).isRequired,
};
FormRegisterMobile.defaultProps = {
  size: 0,
};
export default FormRegisterMobile;
