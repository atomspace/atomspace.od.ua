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

  const mainText = (
    <Trans i18nKey="aboutMainText">
      {'Социальный образовательный проект, основанный'}
      <BoldLink href="https://provectus.com/">Provectus</BoldLink>
      {'и'}
      <BoldLink href="https://www.it2school.od.ua/">IT2School</BoldLink>
      {'с целью создать возможность для талантливых подростков расти и развиваться в сфере IT.'}
    </Trans>
  );

  const mainText1 = t('aboutMainText1');

  const mainText2 = t('aboutMainText2');

  const mainText3 = t('aboutMainText3');

  return (
    <div className="section about-container">
      <div className="about-blocks flex flex-cen">
        <div className="about-main-block">
          <div className="about-main-block-image">
            <LazyLoad debounce={false} offsetVertical={500}>
              <ImageLoader alt="AtomSpaceText" src={AtomspaceText} className="about-main-block-image__atomspace" />
            </LazyLoad>
          </div>
          <div className="about-main-block-text">
            <div className="about-text-1">
              <span className="about-text-1--first">{mainText}</span>
              <span className="about-text-1--second">{mainText1}</span>
            </div>
            <div className="about-text-2">{mainText2}</div>
            <div className="about-text-3">{mainText3}</div>
          </div>
        </div>
        <Bubble
          interactive
          image={[AboutPhoto1, AboutPhoto2, AboutPhoto3, AboutPhoto4]}
          style={{ position: 'absolute', zIndex: 100, opacity: 1 }}
        />
        <Bubble middle animate style={{ position: 'absolute',bottom: 150, right: 230, zIndex: 100 }} />
        <Bubble small animate style={{ position: 'absolute',bottom: 70, right: 110, zIndex: 100 }} />
      </div>
    </div>
  );
};

export default About;
