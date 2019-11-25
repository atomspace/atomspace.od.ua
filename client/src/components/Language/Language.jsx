import React, { useState, useEffect, useContext } from 'react';
import cl from 'classnames';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon/Icon';
import MyContext from '../../context/Base/AppContext';

const RU = 'ru-RU';
const EN = 'en-US';

const Language = () => {
  const defaultLanguage = i18next.language || window.localStorage.i18nextLng;
  const [lang, setLang] = useState(defaultLanguage);
  const { i18n } = useTranslation();
  const { currentPage, isNavOpened, hiddenSidebars } = useContext(MyContext);

  const lightPages = [
    'about',
    'edu',
    'blog',
    'store',
    'resident',
    'mentor',
    'family',
  ];

  useEffect(() => {
    setLang(defaultLanguage);
  }, [defaultLanguage]);

  const getImage = val => {
    switch (val) {
      case RU:
        return <Icon link={false} name="russia" />;
      case EN:
        return <Icon link={false} name="england" />;
      default:
        return <Icon link={false} name="russia" />;
    }
  };

  const changeLanguage = () => {
    const currentLang = lang === EN ? RU : EN;
    setLang(currentLang);
    i18n.changeLanguage(currentLang);
  };
  return (
    <div
      className={cl('language-btn-container', {
        none: !isNavOpened,
        light_theme: lightPages.includes(currentPage) || hiddenSidebars,
      })}
    >
      <div className="language-btn" onClick={changeLanguage}>
        {lang === EN ? getImage(RU) : getImage(EN)}
      </div>
    </div>
  );
};

export default Language;
