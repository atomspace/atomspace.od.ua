import React, { Component } from "react";
import Slider from "react-slick";

import Merch1 from "../../assets/images/photos/i-need-more-space-2-shirt.png";
import Merch2 from "../../assets/images/photos/i-need-more-space-shirt.png";
import Merch3 from "../../assets/images/photos/nlo-shirt.png";
import Merch4 from "../../assets/images/photos/shirt.png";
import Arrow from "../../components/Arrow";
import MerchSize from "../../pages/Store/MerchSize";
import MerchBuy from "../../pages/Store/MerchBuy";

class Store extends Component {
  state = {
    index: 0
  };
  mainText = `хочешь содействовать развитию проекта?`;
  mainTextMobile = `Желаешь поддержать нас?`;
  additionalText = `Выбирай и носи стильную атомную футболку!?`;
  additionalTextMobile = `Покупай футболку!`;

  merches = [
    {
      type: "shirt",
      cost: 500,
      name: "I need more space",
      image: Merch1
    },
    {
      type: "shirt",
      cost: 500,
      name: "I need more space 2",
      image: Merch2
    },
    {
      type: "shirt",
      cost: 300,
      name: "NLO Shirt",
      image: Merch3
    },
    {
      type: "shirt",
      cost: 500,
      name: "NLO shirt without circle",
      image: Merch4
    }
  ];

  returnDefaultMerch = () => ({
    type: "shirt",
    cost: 500,
    name: "i-need-more-space",
    image: Merch1
  });

  componentDidMount() {
    this.props.changeMerchAttr({
      type: "shirt",
      cost: 500,
      name: "i-need-more-space",
      image: Merch1
    });
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <Arrow rotate />,
      nextArrow: <Arrow />,
      variableWidth: true,
      focusOnSelect: true,
      swipe: true,
      adaptiveHeight: true,
      swipeToSlide: true,
      centerMode: true,
      afterChange: (index, a) => {
        this.setState({ index });
        const order = {
          name: this.merches[index].name,
          cost: this.merches[index].cost,
          image: this.merches[index].image
        };
        this.props.changeMerchAttr(order);
      }
    };

    return (
      <div className="section store-container">
        <div className="store-wrapper">
          <div className="store-main-text">{this.mainText}</div>
          <div className="store-main-text-mobile">{this.mainTextMobile}</div>
          <div className="store-additional-text">{this.additionalText}</div>
          <div className="store-additional-text-mobile">
            {this.additionalTextMobile}
          </div>
          <div className="carousel-container">
            <Slider {...settings}>
              {this.merches.map((merch, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info__merch">
                    <div className="wrapper">
                      <div className="ellipse" />
                      <img className="merch-logo" src={merch.image} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="store-buttons-mobile">
            {/* <div className="size-button" /> */}
            <MerchSize changeMerchAttr={this.props.changeMerchAttr} />
            <MerchBuy
              order={this.props.order}
              handleDialog={this.props.handleDialog}
            />
            {/* <div className="buy-button" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
