import React from 'react';
import cn from 'classnames';

const Input = ({ data, user, handleInputUser }) => (
  <input
    className={cn({ error: user[data.id].error })}
    id={data.id}
    type={data.id === 'birth' ? 'text' : data.type}
    placeholder={data.placeholder}
    value={user[data.id].value || data.defaultValue}
    onChange={handleInputUser.bind(this, data)}
    onFocus={handleInputUser.bind(this, data)}
  />
);
export default Input;
