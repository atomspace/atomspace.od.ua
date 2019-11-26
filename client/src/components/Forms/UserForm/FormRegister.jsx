import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../../Select';
import Input from '../../Input';
import { Button } from '../../Button/Button';

const FormRegister = ({
  inputData,
  sended,
  isLoading,
  submitForm,
  user,
  handleInputUser,
}) => {
  const { t } = useTranslation();

  return !sended ? (
    <div className="form-main">
      <div className="form-registration">
        {inputData.map(data => (
          <div className="form-block" key={data.id}>
            {data.type === 'select' ? (
              <Select
                data={data}
                user={user}
                handleInputUser={handleInputUser}
              />
            ) : (
              <Input
                data={data}
                user={user}
                handleInputUser={handleInputUser}
              />
            )}
          </div>
        ))}
        <div className="request-button-block">
          <Button
            className="btn btn-support btn-request"
            loading={isLoading}
            onClick={submitForm}
          >
            {t('join')}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default FormRegister;
