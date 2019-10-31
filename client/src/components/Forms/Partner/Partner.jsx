import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { createResident } from '../../../api/resident';
import UserForm from '../UserForm';
import validators from '../../../utils/validators';

export default function Partner(props) {
  const { t } = useTranslation();

  const headerText = t('form.bePartner');
  const mainText = (
    <Trans i18nKey="form.residentText">
      {'Резидентом Atom Space может стать каждый мотивированный подросток'}
      <span className="bold">от 16 до 20 лет</span>
      {', который хочет  связать свое будущее с миром IT, и готов изучать,'}
      {
        'исследовать, интересоваться, спрашивать, пробовать, экспериментировать,'
      }
      {'создавать, проверять, ошибаться и начинать'}
      {'сначала.'}
    </Trans>
  );

  const confirmMessage = (
    <Trans i18nKey="form.residentConfirmText">
      <p>Спасибо что оставили заявку!</p>
      <p>Мы с вами свяжемся в ближайшее время!</p>
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
      validate: validators.phone,
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
          selected: true,
          value: 'option1',
        },
        {
          label: t('form.select.option2'),
          value: 'option2',
        },
        {
          label: t('form.select.option3'),
          value: 'option3',
        },
        {
          label: t('form.select.option4'),
          value: 'option4',
        },
        {
          label: t('form.select.option5'),
          value: 'option5',
        },
        {
          label: t('form.select.option6'),
          value: 'option6',
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
