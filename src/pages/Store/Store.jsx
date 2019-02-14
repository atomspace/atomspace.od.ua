import React, { Component } from "react";
import Slider from "react-slick";

import Merch1 from "../../assets/images/photos/i-need-more-space-2-shirt.png";
import Merch2 from "../../assets/images/photos/i-need-more-space-shirt.png";
import Merch3 from "../../assets/images/photos/nlo-shirt.png";

class Store extends Component {
  state = {
    index: 0
  };
  render() {
    const merches = [
      {
        type: "shirt",
        cost: 500,
        name: "i-need-more-space",
        image: Merch1
      },
      {
        type: "shirt",
        cost: 500,
        name: "i-need-more-space-2",
        image: Merch2
      },
      {
        type: "shirt",
        cost: 300,
        name: "nlo",
        image: Merch3
      },
      {
        type: "shirt",
        cost: 500,
        name: "nlo",
        image: Merch3
      }
    ];
    const settings = {
      infinite: true,
      speed: 500,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true,
      swipe: false,
      adaptiveHeight: true,
      swipeToSlide: true,
      centerMode: true,
      afterChange: (index, a) => {
        this.setState({ index });
        const order = {
          name: merches[index].name
        };
        this.props.changeMerchAttr(order);
      }
    };

    return (
      <div className="section store-container">
        <div className="store-wrapper">
          <div className="carousel-container">
            <Slider {...settings}>
              {merches.map((merch, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info__merch">
                    <img className="merch-logo" src={merch.image} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
