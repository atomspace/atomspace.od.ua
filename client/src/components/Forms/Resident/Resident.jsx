import React, { Component } from "react";
import { createResident } from "../../../api/resident";
import { Bubble } from "../../Bubble";

const headerText = "Стать резидентом";
const mainText =
  "Резидентом Atom Space может стать каждый мотивированный подросток от 14 до 19 лет, который хочет связать свое будущее с миром IT, и готов изучать, исследовать, интересоваться, спрашивать, пробовать, экспериментировать, создавать, проверять, ошибаться и начинать сначала.";
export class Resident extends Component {
  state = {
    user: {
      name: "",
      number: "",
      email: "",
      information: ""
    },
    isDisabled: false
  };
  createResident = async () => {
    let user = this.state.user;
    this.setState({isDisabled: true});
    await createResident(user);
    this.setState({isDisabled: false});
    this.props.closeForm();
  };

  onChangeUser = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.id]: event.target.value
      }
    });
  };
  render() {
    return (
      <section className={"flex flex-acen resident-form-container"}>
        <Bubble big animate style={{ bottom: 453, left: 451 }} />
        <Bubble semiMiddle animate style={{ bottom:  "19vw", left: "38vw", opacity: 1 }} />
        <Bubble small animate style={{ top: 50, left: 151, opacity: 0.2 }} />
        <div className="form-blocks flex flex-cen">
          <div className="form-maintext-block">
            <div className={"form-maintext-block__header"}>{headerText}</div>
            <div className={"form-maintext-block__text"}>{mainText}</div>
          </div>
        </div>
        <div className="form-registration">
          <div className="form-name-block">
            <input
              id="name"
              placeholder="Имя:"
              type="text"
              value={this.state.user.name}
              onChange={this.onChangeUser}
            />
          </div>
          <div className="form-number-block">
            <input
              id="number"
              placeholder="Телефон:"
              value={this.state.user.number}
              onChange={this.onChangeUser}
            />
          </div>
          <div className="form-email-block">
            <input
              id="email"
              type="text"
              placeholder="Email:"
              value={this.state.user.email}
              onChange={this.onChangeUser}
            />
          </div>
          <div className="form-information-block">
            <input
              id="information"
              placeholder="Почему хочешь стать резидентом Atom Space?"
              type="text"
              value={this.state.user.information}
              onChange={this.onChangeUser}
            />
          </div>
          <div className="request-button-block">
            <button
              className="btn btn-support btn-request"
              disabled={this.state.isDisabled}
              onClick={this.createResident}
            >{`Стать резидентом`}</button>
          </div>
        </div>
      </section>
    );
  }
}
