import React, { useState, useEffect } from 'react';
import cl from 'classnames';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { ImageLoader } from '../ImageLoader';
// import Ukraine from '../../assets/images/icons/countries/ukraine.svg';
import Russia from '../../assets/images/icons/countries/russia.svg';
import England from '../../assets/images/icons/countries/england.svg';

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
        return <ImageLoader src={Russia} alt={val} />;
      case EN:
        return <ImageLoader src={England} alt={val} />;
      default:
        return <ImageLoader src={Russia} alt={val} />;
    }
  };
  const toggleLang = lang => {
    switch (lang) {
      case EN:
        return RU;
      default:
        return EN;
    }
  };

  const changeLanguage = () => {
    const currentLang = toggleLang(lang);
    setLang(currentLang);
    i18n.changeLanguage(currentLang);
  };
  return (
    <div className={cl('language-btn-container', { none: !isDisplay })}>
      <div className="language-btn" onClick={changeLanguage}>
        {lang !== EN ? getImage(EN) : getImage(RU)}
      </div>
    </div>
  );
};

export default Language;
