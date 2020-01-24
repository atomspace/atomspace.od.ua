import React from "react";
import { useTranslation } from "react-i18next";
import { arrayOf, bool, shape, func } from "prop-types";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button/Button";

const FormRegister = ({ inputData, sended, isLoading, submitForm, user, handleInputUser }) => {
  const { t } = useTranslation();

  return !sended ? (
    <div className="form-main">
      <div className="form-registration">
        {inputData.map((data) => (
          <div className="form-block" key={data.id}>
            {data.type === "select" ? (
              <Select data={data} user={user} handleInputUser={handleInputUser} />
            ) : (
              <Input data={data} user={user} handleInputUser={handleInputUser} />
            )}
          </div>
        ))}
        <div className="request-button-block">
          <Button className="btn btn-support btn-request" loading={isLoading} onClick={submitForm}>
            {t("join")}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

FormRegister.propTypes = {
  inputData: arrayOf(shape({})).isRequired,
  sended: bool.isRequired,
  isLoading: bool.isRequired,
  submitForm: func.isRequired,
  user: shape({}).isRequired,
  handleInputUser: func.isRequired,
};

export default FormRegister;
