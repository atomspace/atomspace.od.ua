import React from 'react';
import Mentor from './Mentor';
import Resident from './Resident';
import Partner from './Partner';
import Merch from './Merch';

export const Form = ({ hashForm, getBack, order }) => {
  const getForm = () => {
    switch (hashForm) {
      case '#residentForm':
        return <Resident getBack={getBack} />;
      case '#mentorForm':
        return <Mentor getBack={getBack} />;
      case '#partnerForm':
        return <Partner getBack={getBack} />;
      case '#buyForm':
        return <Merch getBack={getBack} order={order} />;
      default:
        return null;
    }
  };
  return getForm();
};
export default Form;
