import React, { useState } from 'react';
import MyContext from '../Base/AppContext';

export const AppProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  return (
    <MyContext.Provider
      value={{
        isLightTheme,
        currentPage,
        setLightTheme,
        setCurrentPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
