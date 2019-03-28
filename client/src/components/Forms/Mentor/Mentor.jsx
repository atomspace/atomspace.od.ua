import React, { Component } from "react";
import { createMentor } from "../../../api/mentor";
import { Bubble } from "../../Bubble";

const headerText = "Стать ментором";
const mainText =
  "Ментор Atom Space работает с резидентами индивидуально или в группе. Тебе будет предоставлена дорожная карта развития резидентов, чтобы ты точно знал, какие темы необходимо освещать. Мы стремимся к тому, чтобы резиденты самостоятельно осваивали учебный материал, а ментор направлял и показывал, как можно решить задачу эффективнее.";
export class Mentor extends Component {
  state = {
    user: {
      name: "",
      number: "",
      email: "",
      information: ""
    },
    isDisabled: false
  };
  createMentor = async () => {
    let user = this.state.user;
    this.setState({ isDisabled: true });
    try {
      await createMentor(user);
      this.setState({ isDisabled: false });
    } catch (e) {
      this.setState({ isDisabled: true });
    }
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
        <Bubble
          middle
          animate
          style={{ bottom: "19vw", left: "38vw", opacity: 1 }}
        />
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
              placeholder="Могу поделиться знаниями в сфере:"
              type="text"
              value={this.state.user.information}
              onChange={this.onChangeUser}
            />
          </div>
          <div className="request-button-block">
            <button
              className="btn btn-support btn-request"
              disabled={this.state.isDisabled}
              onClick={this.createMentor}
            >{`Стать ментором`}</button>
          </div>
        </div>
      </section>
    );
  }
}