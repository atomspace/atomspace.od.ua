import React from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import LeftSidebar from './Left';
import RightSidebar from './Right';
import SmallSidebar from './Small';
import MyContext from '../../context/Base/AppContext';

const Sidebar = ({ handleDialog, changeMerchAttr, order }) => {
  const { t } = useTranslation();
  const links = [
    {
      href: '#main',
      text: t('nav.main'),
      target: '',
    },
    {
      href: '#about',
      text: t('nav.about'),
      target: '',
    },
    {
      href: '#blog',
      text: t('nav.blog'),
      target: '',
    },
    {
      href: '#edu',
      text: t('nav.edu'),
    },
    {
      id: 5,
      href: '#family',
      text: t('nav.family'),
      target: '',
    },
    {
      href: '#store',
      text: t('nav.store'),
      target: '',
    },
    {
      href: '#contacts',
      text: t('nav.contacts'),
      target: '',
    },
    {
      href: 'https://www.it2school.od.ua/',
      text: 'IT2SCHOOL',
      target: '_blank',
    },
  ];
  return (
    <MyContext.Consumer>
      {({ isLightTheme, currentPage }) => (
        <div className={cl('navigation', currentPage)}>
          <LeftSidebar
            isLightTheme={isLightTheme}
            handleDialog={handleDialog}
            changeMerchAttr={changeMerchAttr}
            order={order}
            pageName={currentPage}
          />
          <RightSidebar pageName={currentPage} links={links} />
          <SmallSidebar pageName={currentPage} links={links} />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Sidebar;
