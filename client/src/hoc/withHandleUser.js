import React, { useState } from 'react';

export const withHandleUser = Component => {
  return ({ inputData, ...rest }) => {
    const getUserByProps = data => {
      return data.reduce(
        (acc, val) => ({ ...acc, [val.id]: { value: '', error: false } }),
        {},
      );
    };
    const [user, setUser] = useState(getUserByProps(inputData));

    const handleInputUser = ({ validate }, event) => {
      const {
        target: { id, type, checked, value },
      } = event;
      const error =
        type === 'checkbox'
          ? false
          : !value.length || (validate && !validate(value));

      if (id === 'birth') {
        event.target.type = 'date';
      }
      setUser({
        ...user,
        [id]: {
          ...user[id],
          error,
          value: type === 'checkbox' ? checked : value,
        },
      });
    };
    return (
      <Component
        handleInputUser={handleInputUser}
        inputData={inputData}
        user={user}
        setUser={setUser}
        {...rest}
      />
    );
  };
};

export default withHandleUser;
