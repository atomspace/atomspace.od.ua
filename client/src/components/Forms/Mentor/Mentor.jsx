import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { createMentor } from '../../../api/mentor';
import UserForm from '../UserForm';
import { Bubble } from '../../Bubble';
import validators from '../../../utils/validators';

const Mentor = props => {
  const { t } = useTranslation();

  const headerText = t('form.beMentor');
  const mainText = t('form.mentorText');
  const confirmMessage = (
    <Trans i18nKey="form.mentorConfirmText">
      <p />
      <p />
      <p />
    </Trans>
  );

  const inputData = [
    {
      id: 'name',
      placeholder: t('form.placeholders.fullName'),
      type: 'text',
      autocomplete: 'off',
    },
    {
      id: 'phone',
      placeholder: t('form.placeholders.phone'),
      autocomplete: 'off',
      type: 'number',
    },
    {
      id: 'email',
      placeholder: t('form.placeholders.email'),
      autocomplete: 'off',
      type: 'email',
      validate: validators.email,
    },
    {
      id: 'information',
      placeholder: t('form.placeholders.informationMentor'),
      autocomplete: 'off',
      type: 'text',
    },
  ];

  return (
    <section className="form-container">
      <Bubble big animate style={{ bottom: 453, left: 451 }} />
      <Bubble
        middle
        animate
        style={{
          bottom: 240,
          left: '34vw',
          opacity: 1,
        }}
      />
      <Bubble small animate style={{ top: 50, left: 151, opacity: 0.2 }} />
      <UserForm
        inputData={inputData}
        createOrder={createMentor}
        headerText={headerText}
        mainText={mainText}
        confirmMessage={confirmMessage}
        {...props}
      />
    </section>
  );
};

export default Mentor;
