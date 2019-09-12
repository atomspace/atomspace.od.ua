import { useState } from 'react';

export const setUserState = (defaultValue) => {
  const [user, setUser] = useState(defaultValue);

  let isDisabled = false;
  Object.keys(user).forEach((key) => {
    const { value } = user[key];
    const validated = () => {
      const isExist = inputData.find((val) => val.id === key);
      return Boolean(isExist.validate && !isExist.validate(value));
    };
    setUser({ error: !value.length || validated() });
    if (!value.length || validated()) {
      isDisabled = true;
    }
  });

  return [user, setUser, isDisabled];
};
