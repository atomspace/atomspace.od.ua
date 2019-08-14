import React from 'react';
import { createResident } from '../../../api/resident';
import UserForm from '../UserForm';
import validators from '../../../utils/validators';

const headerText = 'Стать резидентом';
const mainText = (
  <div>
    <span>Резидентом Atom Space может стать каждый мотивированный подросток</span>
    <span className="bold">{' от 16 до 20 лет '}</span>
    <span>
      , который хочет связать свое будущее с миром IT, и готов изучать, исследовать, интересоваться, спрашивать,
      пробовать, экспериментировать, создавать, проверять, ошибаться и начинать сначала.
    </span>
  </div>
);
const inputData = [
  {
    id: 'name',
    placeholder: 'Имя:',
    autocomplete: 'off',
    type: 'text',
  },
  {
    id: 'birth',
    placeholder: 'Дата рождения: ',
    type: 'text',
    autocomplete: 'off',
  },
  {
    id: 'number',
    placeholder: 'Телефон: (ex. 0635522111)',
    autocomplete: 'off',
    type: 'number',
    validate: validators.phone,
  },
  {
    id: 'email',
    placeholder: 'Email:',
    type: 'email',
    validate: validators.email,
  },
  {
    id: 'information',
    placeholder: 'Почему хочешь стать резидентом?',
    autocomplete: 'off',
    type: 'text',
  },
];
const buttonText = 'Стать резидентом';

export default function Resident(props) {
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
Resident.propTypes = {};
