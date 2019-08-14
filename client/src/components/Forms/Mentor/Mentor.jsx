import React from 'react';
import {createMentor} from '../../../api/mentor';
import UserForm from '../UserForm';
import {Bubble} from '../../Bubble';


const buttonText = `Cтать ментором`;
export default function Mentor(props){
  const headerText = 'Стать ментором';
  const mainText =
      'Ментор Atom Space работает с резидентами индивидуально или в группе. Тебе будет предоставлена дорожная карта развития резидентов, чтобы ты точно знал, какие темы необходимо освещать. Мы стремимся к тому, чтобы резиденты самостоятельно осваивали учебный материал, а ментор направлял и показывал, как можно решить задачу эффективнее.';
  const inputData = [
    {
      id: 'name',
      placeholder: 'Имя:',
      type: 'text',
      autocomplete: 'off',
    },
    {
      id: 'number',
      placeholder: 'Телефон: (ex. 380635522111)',
      autocomplete: 'off',
      type: 'number',
      validate: (val) => val.match(/^[0-9]{12}$/),
    },
    {
      id: 'email',
      placeholder: 'Email:',
      autocomplete: 'off',
      type: 'email',
      validate: (val) => val.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/),
    },
    {
      id: 'information',
      placeholder: 'Могу поделиться знаниями в сфере:',
      autocomplete: 'off',
      type: 'text',
    },
  ];
    return (
      <section className={'form-container'}>
        <Bubble big animate style={{bottom: 453, left: 451}} />
        <Bubble
          middle
          animate
          style={{bottom: 240, left: '34vw', opacity: 1}}
        />
        <Bubble small animate style={{top: 50, left: 151, opacity: 0.2}} />
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
