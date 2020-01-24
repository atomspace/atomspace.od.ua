import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { arrayOf, shape, func } from "prop-types";
import Toggle from "../../Toggle";

const FormRegister = ({ inputData, user, handleInputUser }) => {
  const { t } = useTranslation();
  return (
    <>
      {inputData.map((data) => (
        <div className={`${data.id}-block`} key={data.id}>
          <input
            className={cn({
              error: user[data.id].error,
              "atom-toggle__hide": data.type === "checkbox",
            })}
            id={data.id}
            type={data.type}
            placeholder={data.placeholder}
            value={user[data.id].value}
            onChange={handleInputUser.bind(this, data)}
            onBlur={handleInputUser.bind(this, data)}
          />
        </div>
      ))}
      <Toggle value={t("form.toggle")} />
    </>
  );
};

FormRegister.propTypes = {
  inputData: arrayOf(shape({})).isRequired,
  user: shape({}),
  handleInputUser: func.isRequired,
};

export default FormRegister;
