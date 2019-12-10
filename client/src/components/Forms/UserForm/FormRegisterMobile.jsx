import React from 'react';
import Select from '../../Select';
import Input from '../../Input';
import { Button } from '../../Button/Button';

const FormRegisterMobile = ({
  step = 0,
  handleInputUser,
  isLoading,
  submitForm,
  buttonText,
  user,
  inputData,
}) => {
  const data = inputData[step];
  const index = inputData.indexOf(data);
  return (
    <div className="form-main">
      <div className="form-registration">
        <div className="form-block" key={index}>
          {data.type === 'select' ? (
            <Select data={data} user={user} handleInputUser={handleInputUser} />
          ) : (
            <Input data={data} user={user} handleInputUser={handleInputUser} />
          )}
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

export default FormRegisterMobile;
