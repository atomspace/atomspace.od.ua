import React from 'react';
import { useTranslation } from 'react-i18next';
import { func } from 'prop-types';
import AnimatePlanet from './AnimatePlanet';
import MainLogo from '../../assets/images/icons/logos/AtomSpace-logo-vertical.svg';
import { ImageLoader } from '../../components/ImageLoader';

const Main = ({ handleDialog }) => {
  const { t } = useTranslation();
  const mainText = t('main.mainText');
  return (
    <div className="section main-container">
      <div className="logo-container">
        <div className="center-wrapper">
          <div className="header-stars">{mainText}</div>
          <AnimatePlanet />
          <ImageLoader alt="Main Logo" className="main-logo" src={MainLogo} />
          <div className="donate-block">
            <a
              className="btn btn-support btn-donate"
              target="_blank"
              rel="noopener noreferrer"
              href="https://secure.wayforpay.com/button/b4a090420eb14"
            >
              {t('supportProject')}
            </a>
          </div>
          <div className="bottom-quastion">{t('whoYouAre')}</div>
          <div className="support-container">
            <a
              className="support resident-support"
              href="#residentForm"
              onClick={handleDialog}
            >
              {t('resident')}
            </a>
            <a
              className="support mentor-support"
              href="#mentorForm"
              onClick={handleDialog}
            >
              {t('mentor')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.protoType = {
  handleDialog: func.isRequired,
};

export default Main;
