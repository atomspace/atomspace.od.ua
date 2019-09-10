import React from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import LeftSidebar from './Left';
import RightSidebar from './Right';
import SmallSidebar from './Small';

const Sidebar = ({ pageName, handleDialog, changeMerchAttr, order }) => {
  const { t } = useTranslation();
  const classes = cl('navigation', pageName);
  const links = [
    {
      id: 1,
      href: '#main',
      text: t('nav.main'),
      target: ''
    },
    {
      id: 2,
      href: '#about',
      text: t('nav.about'),
      target: ''
    },
    {
      id: 3,
      href: '#blog',
      text: t('nav.blog'),
      target: ''
    },
    {
      id: 4,
      href: '#edu',
      text: t('nav.edu'),
    },
    {
      id: 5,
      href: '#family',
      text: t('nav.family'),
      target: ''
    },
    {
      id: 6,
      href: '#store',
      text: t('nav.store'),
      target: ''
    },
    {
      id: 7,
      href: '#contacts',
      text: t('nav.contacts'),
      target: ''
    },
    {
      id: 8,
      href: 'https://www.it2school.od.ua/',
      text: 'IT2SCHOOL',
      target: '_blank'
    },
  ];
  return (
    <div className={classes}>
      <LeftSidebar pageName={pageName} handleDialog={handleDialog} changeMerchAttr={changeMerchAttr} order={order} />
      <RightSidebar pageName={pageName} links={links} />
      <SmallSidebar pageName={pageName} links={links} />
    </div>
  );
};

export default Sidebar;
