import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { createResident } from '../../../api/resident';
import UserForm from '../UserForm';
import validators from '../../../utils/validators';

export default function Resident(props) {
  const { t } = useTranslation();

  const headerText = t('form.beResident');
  const mainText = (
    <Trans i18nKey="form.residentText">
      {''}
      <span className="bold" />
      {''}
    </Trans>
  );

  const confirmMessage = (
    <Trans i18nKey="form.residentConfirmText">
      <p />
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
      id: 'birth',
      placeholder: t('form.placeholders.birth'),
      type: 'date',
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
      type: 'email',
      validate: validators.email,
    },
    {
      id: 'information',
      placeholder: t('form.placeholders.informationResident'),
      autocomplete: 'off',
      type: 'text',
    },
  ];

  return (
    <section className="form-container">
      <UserForm
        inputData={inputData}
        {...props}
        createOrder={createResident}
        headerText={headerText}
        mainText={mainText}
        confirmMessage={confirmMessage}
      />
    </section>
  );
}
