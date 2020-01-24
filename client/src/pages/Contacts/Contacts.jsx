import React from "react";
import { useTranslation } from "react-i18next";
import { func } from "prop-types";
import Rocket from "../../assets/images/icons/contacts/rocket-donate.svg";
import ContactInfo from "./ContactInfo";
import { ImageLoader } from "../../components/ImageLoader";

const Contacts = ({ handleDialog }) => {
  const { t } = useTranslation();
  return (
    <div className="section contacts-container">
      <div className="contacts-wrapper">
        <div className="center-container">
          <div className="main-block">
            <div className="main-block__information">
              <p className="header-ask">{t("contacts.headerAsk")}</p>
              <div className="logo-wrapper">
                <ImageLoader className="rocket-image" src={Rocket} alt="" />
              </div>
            </div>
            <div className="main-block__requests flex flex-col">
              <p className="header-answer">{t("contacts.headerAnswer")}</p>
              <div className="request-button-container flex">
                <div className="request-button-block">
                  <a className="btn btn-support btn-request" href="#mentorForm" onClick={handleDialog}>
                    {t("form.beMentor")}
                  </a>
                </div>
                <div className="request-button-block">
                  <a className="btn btn-support btn-request" href="#residentForm" onClick={handleDialog}>
                    {t("form.beResident")}
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
              {t("supportProject")}
            </a>
          </div>
        </div>
        <div className="contact-info-mobile">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  handleDialog: func.isRequired,
};

export default Contacts;
