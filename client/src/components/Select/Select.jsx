import React from 'react';
import cn from 'classnames';

const Select = ({ user, data, handleInputUser }) => {
  return (
    <select
      className={cn('dropdown', { error: user[data.id].error })}
      id={data.id}
      placeholder={data.placeholder}
      onFocus={handleInputUser.bind(this, data)}
    >
      {data.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
