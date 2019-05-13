import React, { Component } from "react";
import Slider from "react-slick";

import Arrow from "../../components/Arrow";
import MerchSize from "../../pages/Store/MerchSize";
import MerchBuy from "../../pages/Store/MerchBuy";
import { getAllMerches } from "../../api/merch";
import { MEDIA_URL } from "../../utils/config";

class Store extends Component {
  state = {
    index: 0,
    merches: []
  };
  mainText = `хочешь содействовать развитию проекта?`;
  mainTextMobile = `Желаешь поддержать нас?`;
  additionalText = `Выбирай и носи стильную атомную футболку!?`;
  additionalTextMobile = `Покупай футболку!`;

  async componentDidMount() {
    const merches = await getAllMerches();
    this.setState({ merches: merches.map(merch => merch.fields) });
  }

  render() {
    let settings = {};
    if (this.state.merches.length) {
      settings = {
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
            name: this.state.merches[index].name,
            price: this.state.merches[index].price,
            avatar_url: this.state.merches[index].avatar_url
          };
          this.props.changeMerchAttr(order);
        }
      };
    }

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
            {this.state.merches.length && (
              <Slider {...settings}>
                {this.state.merches.map((merch, index) => (
                    <div key={index} className="carousel-block">
                      <div className="carousel-info__merch">
                        <div className="wrapper">
                          <div className="ellipse" />
                          <img
                            className="merch-logo"
                            src={`${MEDIA_URL}${merch.avatar_url}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            )}
          </div>
          <div className="store-buttons-mobile">
            <MerchSize changeMerchAttr={this.props.changeMerchAttr} />
            <MerchBuy
              order={this.props.order}
              handleDialog={this.props.handleDialog}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
