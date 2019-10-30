import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useTranslation, Trans } from 'react-i18next';
import { Bubble } from '../../components/Bubble';
import AboutPhoto1 from '../../assets/images/photos/about_photo_1.png';
import AboutPhoto2 from '../../assets/images/photos/about_photo_2.png';
import AboutPhoto3 from '../../assets/images/photos/about_photo_3.png';
import AboutPhoto4 from '../../assets/images/photos/about_photo_4.png';
import AboutPhoto5 from '../../assets/images/photos/about_photo_5.png';
import AboutPhoto6 from '../../assets/images/photos/about_photo_6.png';
import AboutPhoto7 from '../../assets/images/photos/about_photo_7.png';
import AboutPhoto8 from '../../assets/images/photos/about_photo_8.png';
import AboutPhoto9 from '../../assets/images/photos/about_photo_9.png';
import AboutPhoto10 from '../../assets/images/photos/about_photo_10.png';
import AboutPhoto11 from '../../assets/images/photos/about_photo_11.png';
import AboutPhoto12 from '../../assets/images/photos/about_photo_12.png';
import AboutPhoto13 from '../../assets/images/photos/about_photo_13.png';
import AboutPhoto14 from '../../assets/images/photos/about_photo_14.png';
import AboutPhoto15 from '../../assets/images/photos/about_photo_15.png';
import AboutPhoto16 from '../../assets/images/photos/about_photo_16.png';
import AboutPhoto17 from '../../assets/images/photos/about_photo_17.png';
import AboutPhoto18 from '../../assets/images/photos/about_photo_18.png';
import AboutPhoto19 from '../../assets/images/photos/about_photo_19.png';
import AtomspaceText from '../../assets/images/icons/logos/AtomSpace-about-maintext.svg';
import { ImageLoader } from '../../components/ImageLoader';

const BoldLink = ({ children, href }) => (
  <a className="bold" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

const About = () => {
  const { t } = useTranslation();

  const mainText = (
    <Trans i18nKey="aboutMainText">
      {'Социальный образовательный проект, основанный'}
      <BoldLink href="https://provectus.com/">Provectus</BoldLink>
      {'и'}
      <BoldLink href="https://www.it2school.od.ua/">IT2School</BoldLink>
      {
        'с целью создать возможность для талантливых подростков расти и развиваться в сфере IT.'
      }
    </Trans>
  );

  const mainText1 = t('aboutMainText1');

  const mainText2 = t('aboutMainText2');

  const mainText3 = t('aboutMainText3');

  const aboutPhotos = [
    AboutPhoto1,
    AboutPhoto2,
    AboutPhoto3,
    AboutPhoto4,
    AboutPhoto5,
    AboutPhoto6,
    AboutPhoto7,
    AboutPhoto8,
    AboutPhoto9,
    AboutPhoto10,
    AboutPhoto11,
    AboutPhoto12,
    AboutPhoto13,
    AboutPhoto14,
    AboutPhoto15,
    AboutPhoto16,
    AboutPhoto17,
    AboutPhoto18,
    AboutPhoto19,
  ];

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
              <p className="about-text-1--second">{mainText1}</p>
              <br />
            </div>
            <div className="about-text-2">{mainText2}</div>
            <br />
            <div className="about-text-3">{mainText3}</div>
          </div>
        </div>
        <Bubble
          interactive
          image={aboutPhotos}
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
