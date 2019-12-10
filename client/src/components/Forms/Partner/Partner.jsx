import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { createPartner } from '../../../api/partner';
import UserForm from '../UserForm/UserForm.jsx';
import validators from '../../../utils/validators';
import { Bubble } from '../../Bubble';

function Partner(props) {
  const { t } = useTranslation();

  const headerText = t('form.bePartner');
  const mainText = (
    <Trans i18nKey="form.partnerText">
      {''}
      <span className="bold" />
      {''}
    </Trans>
  );

  const confirmMessage = (
    <Trans i18nKey="form.partnerConfirmText">
      <p />
      <p />
    </Trans>
  );

  const inputData = [
    {
      id: 'name',
      placeholder: t('form.placeholders.fullName'),
      autocomplete: 'off',
      type: 'text',
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
      type: 'email',
      validate: validators.email,
    },
    {
      id: 'interest',
      placeholder: t('form.placeholders.interest'),
      type: 'select',
      options: [
        {
          label: t('form.select.option1'),
          value: t('form.select.option1'),
        },
        {
          label: t('form.select.option2'),
          value: t('form.select.option2'),
        },
        {
          label: t('form.select.option3'),
          value: t('form.select.option3'),
        },
        {
          label: t('form.select.option4'),
          value: t('form.select.option4'),
        },
        {
          label: t('form.select.option5'),
          value: t('form.select.option5'),
        },
        {
          label: t('form.select.option6'),
          value: t('form.select.option6'),
        },
      ],
    },
    {
      id: 'information',
      placeholder: t('form.placeholders.comments'),
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
        {...props}
        createOrder={createPartner}
        headerText={headerText}
        mainText={mainText}
        confirmMessage={confirmMessage}
      />
    </section>
  );
}

export default Partner;
