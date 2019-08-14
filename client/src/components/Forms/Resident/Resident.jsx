import React from 'react';
import { createResident } from '../../../api/resident';
import UserForm from '../UserForm';
import validators from '../../../utils/validators';

const headerText = 'Стать резидентом';
const mainText = (
  <div>
    <span>Резидентом Atom Space может стать каждый мотивированный подросток</span>
    <span className="bold">{' от 14 до 19 лет '}</span>
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
    type: 'text',
  },
  {
    id: 'number',
    placeholder: 'Телефон: (ex. 0635522111)',
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
