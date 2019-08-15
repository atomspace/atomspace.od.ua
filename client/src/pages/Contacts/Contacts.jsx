import React, { Component } from 'react';
import Rocket from '../../assets/images/icons/contacts/rocket-donate.svg';
import ContactInfo from './ContactInfo';
import { ImageLoader } from '../../components/ImageLoader';

class Contacts extends Component {
  state = {};

  render() {
    return (
      <div className="section contacts-container">
        <div className="contacts-wrapper">
          <div className="center-container">
            <div className="main-block">
              <div className="main-block__information">
                <p className="header-ask">Вам нравится, что мы делаем?</p>
                <div className="logo-wrapper">
                  <ImageLoader className="rocket-image" src={Rocket} alt="" />
                </div>
              </div>
              <div className="main-block__requests flex flex-col">
                <p className="header-answer">Давайте развивать Atom Space вместе!</p>
                <div className="request-button-container flex">
                  <div className="request-button-block">
                    <a className="btn btn-support btn-request" href="#mentorForm" onClick={this.props.handleDialog}>
                      Стать ментором
                    </a>
                  </div>
                  <div className="request-button-block">
                    <a className="btn btn-support btn-request" href="#residentForm" onClick={this.props.handleDialog}>
                      {'Стать резидентом'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="donate-block flex flex-jcen">
              <a
                className="btn btn-support btn-donate"
                target="_blank"
                rel="noopener noreferrer"
                href="https://secure.wayforpay.com/button/b4a090420eb14"
              >
                {'Поддержать проект'}
              </a>
            </div>
          </div>
          <div className="contact-info-mobile">
            <ContactInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
