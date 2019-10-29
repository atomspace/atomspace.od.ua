import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useTranslation, Trans } from 'react-i18next';
import { Bubble } from '../../components/Bubble';
import AboutPhoto1 from '../../assets/images/photos/about_photo_1.png';
import AboutPhoto2 from '../../assets/images/photos/about_photo_2.png';
import AboutPhoto3 from '../../assets/images/photos/about_photo_3.png';
import AboutPhoto4 from '../../assets/images/photos/about_photo_4.png';
import AtomspaceText from '../../assets/images/icons/logos/AtomSpace-about-maintext.svg';
import { ImageLoader } from '../../components/ImageLoader';

const BoldLink = ({ children, href }) => (
  <a className="bold" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

const About = () => {
  const { t } = useTranslation();

  const mainText = t('aboutMainText');
  const mainText1 = t('aboutMainText1');

  return (
    <div className="section about-container">
      <div className="about-blocks flex flex-cen">
        <div className="about-main-block">
          <div className="about-main-block-image">
            <LazyLoad debounce={false} offsetVertical={500}>
              <ImageLoader
                alt="AtomSpaceText"
                src={AtomspaceText}
                className="about-main-block-image__atomspace"
              />
            </LazyLoad>
          </div>
          <div className="about-main-block-text">
            <div className="about-text-1">
              <p className="about-text-1--first">{mainText}</p>
              <br />
              <p className="about-text-1--second">{mainText1}</p>
            </div>
          </div>
        </div>
        <Bubble
          interactive
          image={[AboutPhoto1, AboutPhoto2, AboutPhoto3, AboutPhoto4]}
          style={{ zIndex: 100, opacity: 1 }}
        />
        <Bubble
          middle
          animate
          style={{ position: 'absolute', bottom: 150, right: 230, zIndex: 100 }}
        />
        <Bubble
          small
          animate
          style={{ position: 'absolute', bottom: 70, right: 110, zIndex: 100 }}
        />
      </div>
    </div>
  );
};

export default About;
