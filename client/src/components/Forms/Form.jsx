import React from 'react';
import { useTranslation } from 'react-i18next';
import BuyForm from './BuyForm';
import Mentor from './Mentor';
import Resident from './Resident';
import Partner from './Partner';

export const Form = ({ hashForm, getBack, order }) => {
  const { t } = useTranslation();

  const inputBuyFormData = [
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
      type: 'text',
    },
  ];
  const getForm = () => {
    switch (hashForm) {
      case '#residentForm':
        return <Resident getBack={getBack} />;
      case '#mentorForm':
        return <Mentor getBack={getBack} />;
      case '#partnerForm':
        return <Partner getBack={getBack} />;
      case '#buyForm':
        return (
          <BuyForm
            getBack={getBack}
            order={order}
            inputData={inputBuyFormData}
          />
        );
      default:
        return null;
    }
  };
  return getForm();
};
export default Form;
