import React, { useState } from 'react';
import MyContext from '../Base/AppContext';

export const AppProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  const [hiddenSidebars, setHiddenSidebars] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isLightTheme,
        currentPage,
        setLightTheme,
        setCurrentPage,
        hiddenSidebars,
        setHiddenSidebars,
        isNavOpened,
        setIsNavOpened,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
