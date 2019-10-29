import React from 'react';
import { useTranslation } from 'react-i18next';
import validators from '../../utils/validators';
import BuyForm from './BuyForm';
import Mentor from './Mentor';
import Resident from './Resident';

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
      validate: validators.phone,
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
  return (
    <>
      {hashForm === '#residentForm' && <Resident getBack={getBack} />}
      {hashForm === '#mentorForm' && <Mentor getBack={getBack} />}
      {hashForm === '#buyForm' && (
        <BuyForm getBack={getBack} order={order} inputData={inputBuyFormData} />
      )}
    </>
  );
};
export default Form;
