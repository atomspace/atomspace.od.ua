import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { createResident } from '../../../api/resident';
import UserForm from '../UserForm';
import validators from '../../../utils/validators';

export default function Resident(props) {
  const { t } = useTranslation();

  const headerText = t('contacts.beResident');
  const mainText = (
    <Trans i18nKey="form.residentText">
      {'Резидентом Atom Space может стать каждый мотивированный подросток'}
      <span className="bold">от 16 до 20 лет</span>
      {', который хочет  связать свое будущее с миром IT, и готов изучать,'}
      {'исследовать, интересоваться, спрашивать, пробовать, экспериментировать,'}
      {'создавать, проверять, ошибаться и начинать'}
      {'сначала.'}
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
      validate: validators.phone,
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
  const buttonText = t('form.beResident');

  return (
    <section className="form-container">
      <UserForm
        inputData={inputData}
        {...props}
        createOrder={createResident}
        headerText={headerText}
        mainText={mainText}
        buttonText={buttonText}
      />
    </section>
  );
}
