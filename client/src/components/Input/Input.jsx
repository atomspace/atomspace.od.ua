import React from "react";
import cn from "classnames";
import { func, shape, string } from "prop-types";

const Input = ({ data, user, handleInputUser }) => (
  <>
    <input
      className={cn({ error: user[data.id].error })}
      id={data.id}
      type={data.id === "birth" ? "text" : data.type}
      placeholder={data.placeholder}
      value={user[data.id].value || data.defaultValue}
      onChange={handleInputUser.bind(this, data)}
      onFocus={handleInputUser.bind(this, data)}
    />
    {data.hint && <span className="hint">{data.hint}</span>}
  </>
);

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
