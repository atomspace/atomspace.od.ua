import React from 'react';
import Slider from 'react-slick';
import Soc from '../../components/Soc';
import Arrow from '../../components/Arrow';
import TapSwipe from '../../assets/images/icons/adaptive/tap-swipe.svg';
import AnnaPhoto from '../../assets/images/photos/anna-derevyanko.png';
import KseniyaPhoto from '../../assets/images/photos/kseniya-yarmolovich.png';
import VeronikaPhoto from '../../assets/images/photos/veronika-ilnitckaya.png';

const people = [
  {
    id: 0,
    name: 'Анна Деревянко',
    position: 'CEO',
    avatar: 'anna',
    imageLink: AnnaPhoto,
    facebook: 'https://www.facebook.com/anna.derevyankoo',
  },
  {
    id: 1,
    name: 'Ксения Ярмолович',
    position: 'Event Manager',
    avatar: 'kseniya',
    imageLink: KseniyaPhoto,
    facebook: 'https://www.facebook.com/yarmolovi4',
  },
  {
    id: 1,
    name: 'Вероника Ильницкая',
    position: 'PR Manager',
    avatar: 'veronika',
    imageLink: VeronikaPhoto,
    facebook: 'https://www.facebook.com/verilnitskaya',
  },
];
export default class Family extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      entity: {
        id: 0,
        name: '',
        position: '',
        photo: '',
      },
    };
  }

  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      prevArrow: <Arrow rotate />,
      nextArrow: <Arrow />,
      centerPadding: '0px',
      swipeToSlide: true,
      centerMode: true,
      afterChange: (index) => {
        this.setState({ index: index });
      },
    };
    return (
      <div className="section family-container">
        <div className="family-wrapper">
          <div className="main-text-mobile">{`КОМАНДА`}</div>
          <img alt="tapSwipeImage" src={TapSwipe} className="tap-swipe-logo" />
          <div className="carousel-container">
            <Slider {...settings}>
              {people.map((emp, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info__photo">
                    <img src={emp.imageLink} className={`photo-logo ${emp.avatar}`} />
                    {/* <div className={`photo-logo ${emp.avatar}`} alt={emp.avatar} /> */}
                  </div>
                </div>
              ))}
            </Slider>
            <div className="carousel-info">
              <div className="carousel-info__header">
                <p className="info-header-name">{`КОМАНДА`}</p>
              </div>
              <div className="carousel-info__desc">
                <p className="info-name">{people[this.state.index] && people[this.state.index].name}</p>
                <p className="info-position">{people[this.state.index] && people[this.state.index].position}</p>
              </div>
              <div className="carousel-info__soc">
                <Soc
                  src={{
                    facebook: people[this.state.index] && people[this.state.index].facebook,
                    linkedin: people[this.state.index] && people[this.state.index].linkedin,
                  }}
                  classes={'flex soc-icons'}
                />
              </div>
              <div className="carousel-info__quote-block">
                <div className="quotes">
                  <p className="quote-text">
                    {`Мы создаем возможности для талантливых подростков, которые мечтают строить будущее с помощью инновационных технологий.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
