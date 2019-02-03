import React from "react";
import Slider from "react-slick";
import Anna from "../../assets/images/photos/anna-derevyanko.png";
import Kseniya from "../../assets/images/photos/kseniya-yarmolovich.png";
import Olha from "../../assets/images/photos/olha-sprenchan.png";
import Soc from "../../components/Soc";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        avatar: Anna
      },
      {
        id: 1,
        name: "Ксения Ярмолович",
        position: "Event Manager",
        avatar: Kseniya
      },
      {
        id: 2,
        name: "Оля Спренчан",
        position: "PR Manager",
        avatar: Olha
      }
    ];
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      prevArrow: <a class="arrow left" />,
      nextArrow: <a class="arrow right" />,
      centerPadding: '0px',
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // adaptiveHeight: true,
      centerMode: true
    };
    return (
      <div className="section family-container">
        <div className="family-wrapper">
          <div className="carousel-container">
            <Slider {...settings}>
              {people.map((emp, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info">
                    <div className="carousel-info__photo">
                      <img className="photo-logo" src={emp.avatar} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="carousel-info__header">
              <span className="info-header-name">{`КОМАНДА`}</span>
            </div>
            <div className="carousel-info__desc">
              <span className="info-name">name</span>
              <span className="info-position">position</span>
            </div>
            <div className="carousel-info__soc">
              <Soc
                src={{
                  facebook: "https://www.facebook.com/atomspace.od.ua/",
                  instagram: "https://www.instagram.com/atomspace.od/"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
