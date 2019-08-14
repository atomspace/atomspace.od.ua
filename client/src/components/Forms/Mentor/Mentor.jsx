import React from 'react';
import { createMentor } from '../../../api/mentor';
import UserForm from '../UserForm';
import { Bubble } from '../../Bubble';
import validators from '../../../utils/validators';

const buttonText = 'Cтать ментором';
export default function Mentor(props) {
  const headerText = 'Стать ментором';
  const mainText =
    'Ментор Atom Space работает с резидентами индивидуально или в группе. Тебе будет предоставлена дорожная карта развития резидентов, чтобы ты точно знал, какие темы необходимо освещать. Мы стремимся к тому, чтобы резиденты самостоятельно осваивали учебный материал, а ментор направлял и показывал, как можно решить задачу эффективнее.';
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
      placeholder: 'Могу поделиться знаниями в сфере:',
      type: 'text',
    },
  ];
  return (
    <section className="form-container">
      <Bubble big animate style={{ bottom: 453, left: 451 }} />
      <Bubble middle animate style={{ bottom: 240, left: '34vw', opacity: 1 }} />
      <Bubble small animate style={{ top: 50, left: 151, opacity: 0.2 }} />
      <UserForm
        inputData={inputData}
        createOrder={createMentor}
        headerText={headerText}
        mainText={mainText}
        buttonText={buttonText}
        {...props}
      />
    </section>
  );
}
