import React, { useState } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import Soc from '../../components/Soc';
import Arrow from '../../components/Arrow';
import TapSwipe from '../../assets/images/icons/adaptive/tap-swipe.svg';
import AnnaPhoto from '../../assets/images/photos/anna-derevyanko.png';
import VeronikaPhoto from '../../assets/images/photos/veronika-ilnitckaya.png';
import { ImageLoader } from '../../components/ImageLoader';

const Family = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const people = [
    {
      id: 1,
      name: t('family.anna'),
      position: 'CEO',
      avatar: 'anna',
      imageLink: AnnaPhoto,
      facebook: 'https://www.facebook.com/anna.derevyankoo',
      quote: t('family.quote-text-anna'),
    },
    {
      id: 2,
      name: t('family.ver'),
      position: 'PR & Communications Manager',
      avatar: 'veronika',
      imageLink: VeronikaPhoto,
      facebook: 'https://www.facebook.com/verilnitskaya',
      quote: t('family.quote-text-ver'),
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <Arrow isRotate />,
    nextArrow: <Arrow />,
    centerPadding: '0px',
    swipeToSlide: true,
    centerMode: true,
    afterChange: i => {
      setIndex(i);
    },
  };
  return (
    <div className="section family-container">
      <div className="family-wrapper">
        <div className="main-text-mobile">{t('team')}</div>
        <ImageLoader
          alt="tapSwipeImage"
          src={TapSwipe}
          className="tap-swipe-logo"
        />
        <div className="carousel-container">
          <Slider {...settings}>
            {people.map(emp => (
              <div key={emp.id} className="carousel-block">
                <div className="carousel-info__photo">
                  <ImageLoader
                    alt="empPhoto"
                    src={emp.imageLink}
                    className={`photo-logo ${emp.avatar}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="carousel-info">
            <div className="carousel-info__header">
              <p className="info-header-name">{t('team')}</p>
            </div>
            <div className="carousel-info__desc">
              <p className="info-name">{people[index] && people[index].name}</p>
              <p className="info-position">
                {people[index] && people[index].position}
              </p>
            </div>
            <div className="carousel-info__soc">
              <Soc
                src={{
                  facebook: people[index] && people[index].facebook,
                  linkedin: people[index] && people[index].linkedin,
                }}
                classes="soc-icons"
              />
            </div>
            <div className="carousel-info__quote-block">
              <div className="quotes">
                <p className="quote-text">{people[index] && people[index].quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
