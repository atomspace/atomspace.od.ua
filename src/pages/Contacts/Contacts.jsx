import React, { Component } from "react";
import Rocket from "../../assets/images/icons/rocket-donate.png";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="section contacts-container">
        <div className="contacts-wrapper">
          <div className="center-container">
            <div className="main-block">
              <div className="main-block__information">
                <p className="header-ask">{`Вам нравится, что мы делаем?`}</p>
                <div className="logo-wrapper">
                  <img className="rocket-image" src={Rocket} alt="" />
                </div>
              </div>
              <div className="main-block__requests flex flex-col">
                <p className="header-answer">{`Давайте развивать Atom Space вместе!`}</p>
                <div className="request-button-container flex">
                  <div className="request-button-block">
                    <button className="btn btn-support btn-request">{`Стать ментором`}</button>
                  </div>
                  <div className="request-button-block">
                    <button className="btn btn-support btn-request">{`Стать резидентом`}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="donate-block flex flex-jcen">
              <a
                className="btn btn-support btn-donate"
                target="_blank"
                href="https://secure.wayforpay.com/button/b4a090420eb14"
              >{`Поддержать проект`}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;