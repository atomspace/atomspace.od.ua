import React from "react";
import Slider from "react-slick";
import Anna from "../../assets/images/photos/anna-derevyanko.png";
import Kseniya from "../../assets/images/photos/kseniya-yarmolovich.png";
import Soc from "../../components/Soc";
import Arrow from "../../components/Arrow";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class Family extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      entity: {
        id: 0,
        name: "",
        position: "",
        photo: ""
      }
    };
  }

  render() {
    const people = [
      {
        id: 0,
        name: "Анна Деревянко",
        position: "CEO",
        avatar: Anna,
        facebook: 'https://www.facebook.com/anna.derevyankoo',
      },
      {
        id: 1,
        name: "Ксения Ярмолович",
        position: "Event Manager",
        avatar: Kseniya,
        facebook: 'https://www.facebook.com/yarmolovi4',
        linkedin: 'https://www.linkedin.com/in/kseniya-yarmolovich-322918170/',
      }
    ];
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      prevArrow: <Arrow rotate />,
      nextArrow: <Arrow />,
      centerPadding: "0px",
      swipeToSlide: true,
      centerMode: true,
      afterChange: index => {
        this.setState({ index: index });
      }
    };
    return (
      <div className="section family-container">
        <div className="family-wrapper">
          <div className="carousel-container">
            <Slider {...settings}>
              {people.map((emp, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info__photo">
                    <img className="photo-logo" src={emp.avatar} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="carousel-info">
              <div className="carousel-info__header">
                <p className="info-header-name">{`КОМАНДА`}</p>
              </div>
              <div className="carousel-info__desc">
                <p className="info-name">
                  {people[this.state.index] && people[this.state.index].name}
                </p>
                <p className="info-position">
                  {people[this.state.index] &&
                    people[this.state.index].position}
                </p>
              </div>
              <div className="carousel-info__soc">
                <Soc
                  src={{
                    facebook: people[this.state.index] && people[this.state.index].facebook,
                    linkedin: people[this.state.index] && people[this.state.index].linkedin
                  }}
                  classes={"flex soc-icons"}
                />
              </div>
            </div>
          </div>
          <div className="family-wrapper-bot"/>
        </div>
      </div>
    );
  }
}
