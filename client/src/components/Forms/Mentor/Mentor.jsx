import React, { Component } from "react";
import { createMentor } from "../../../api/mentor";
import Form from "../Form";

const headerText = "Стать ментором";
const mainText =
  "Ментор Atom Space работает с резидентами индивидуально или в группе. Тебе будет предоставлена дорожная карта развития резидентов, чтобы ты точно знал, какие темы необходимо освещать. Мы стремимся к тому, чтобы резиденты самостоятельно осваивали учебный материал, а ментор направлял и показывал, как можно решить задачу эффективнее.";
const inputData = [
  {
    id: "name",
    placeholder: "Имя:",
    type: 'text',
  },
  {
    id: "number",
    placeholder: "Телефон:",
    type: 'number',
  },
  {
    id: "email",
    placeholder: "Email:",
    type: 'email',
  },
  {
    id: "information",
    placeholder: "Могу поделиться знаниями в сфере:",
    type: 'text',
  }
];

const beButton = `Cтать ментором`;
export class Mentor extends Component {
  render() {
    return (
      <section className={"form-container"}>
        <Form
          inputData={inputData}
          createOrder={createMentor}
          headerText={headerText}
          mainText={mainText}
          beButton={beButton}
          {...this.props}
        />
      </section>
    );
  }
}
