import React from 'react';
import { useTranslation } from 'react-i18next';
import BuyForm from '../BuyForm/BuyForm.jsx';

const Merch = ({ getBack, order }) => {
  const { t } = useTranslation();

  const inputData = [
    {
      id: 'fullName',
      placeholder: t('form.placeholders.fullName'),
      type: 'text',
    },
    {
      id: 'phone',
      placeholder: t('form.placeholders.phone'),
      type: 'number',
    },
    {
      id: 'city',
      placeholder: t('form.placeholders.city'),
      type: 'text',
    },
    {
      id: 'npMail',
      placeholder: t('form.placeholders.npMail'),
      type: 'number',
    },
  ];
  return <BuyForm getBack={getBack} order={order} inputData={inputData} />;
};

export default Merch;
