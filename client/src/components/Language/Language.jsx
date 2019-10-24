import React, { useState, useEffect } from 'react';
import cl from 'classnames';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon/Icon';
import MyContext from '../../context/Base/AppContext';

const RU = 'ru-RU';
const EN = 'en-US';
// const UA = 'ua-UA';

const Language = ({ userHash }) => {
  const defaultLanguage = i18next.language || window.localStorage.i18nextLng;
  const [lang, setLang] = useState(defaultLanguage);
  const { i18n } = useTranslation();
  const nonDisplayPages = ['#main'];
  const isDisplay = nonDisplayPages.includes(userHash[userHash.length - 1]);
  useEffect(() => {
    setLang(defaultLanguage);
  }, [defaultLanguage]);

  const getImage = val => {
    switch (val) {
      case RU:
        return <Icon name="russia" />;
      case EN:
        return <Icon name="england" />;
      default:
        return <Icon name="russia" />;
    }
  };

  const changeLanguage = () => {
    const currentLang = lang === EN ? RU : EN;
    setLang(currentLang);
    i18n.changeLanguage(currentLang);
  };
  console.log(lang);
  return (
    <MyContext>
      {({ isLightTheme }) => {
        return (
          <div
            className={cl('language-btn-container', {
              none: !isDisplay,
              light_theme: isLightTheme,
            })}
          >
            <div className="language-btn" onClick={changeLanguage}>
              {lang === EN ? getImage(RU) : getImage(EN)}
            </div>
          </div>
        );
      }}
    </MyContext>
  );
};

export default Language;
