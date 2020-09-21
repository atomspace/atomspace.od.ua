import React from "react";
import cn from "classnames";
import { func, shape, string } from "prop-types";

const Input = ({ data, user, handleInputUser }) => {
  const props = {
    className: cn({ error: user[data.id].error }),
    id: data.id,
    type: data.type,
    placeholder: data.placeholder,
    value: user[data.id].value || data.defaultValue,
    onChange: (e) => handleInputUser(data, e),
    onBlur: (e) => handleInputUser(data, e),
  };
  return (
    <>
      <input {...props} />
      {data.hint && <p className="hint">{data.hint}</p>}
    </>
  );
};

Input.propTypes = {
  data: shape({
    id: string,
    type: string,
    placeholder: string,
  }).isRequired,
  user: shape({}).isRequired,
  handleInputUser: func.isRequired,
};

export default Input;
