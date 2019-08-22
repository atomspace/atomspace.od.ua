import React, { Component } from 'react';
import Slider from 'react-slick';

import Arrow from '../../components/Arrow';
import MerchSize from './MerchSize';
import MerchBuy from './MerchBuy';
import { getAllMerches } from '../../api/merch';
import { MEDIA_URL } from '../../utils/config';
import { ImageLoader } from '../../components/ImageLoader';
import LocalStorage from '../../localStorage';

const mainText = 'хочешь содействовать развитию проекта?';
const mainTextMobile = 'Желаешь поддержать нас?';
const additionalText = 'Выбирай и носи стильную Атомную футболку!';
const additionalTextMobile = 'Покупай футболку!';
class Store extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      index: 0,
      merches: [],
    };
  }

  increaseCountOfMerch(merches) {
    let tempMerch = [];
    while (tempMerch.length <= 3) {
      tempMerch = tempMerch.concat(merches);
    }
    return tempMerch;
  }

  async componentDidMount() {
    let merches = await getAllMerches();
    if (merches.length) {
      merches = this.increaseCountOfMerch(merches);
      const merch = { ...{ ...merches[0].fields, id: merches[0].pk }, ...LocalStorage.getMerch() };
      this.props.changeMerchAttr(merch);
      this.setState({ merches: merches.map((merch) => ({ id: merch.pk, ...merch.fields })) });
    }
  }

  render() {
    const { order, handleOrder, changeMerchAttr, handleDialog } = this.props;
    const { merches } = this.state;
    let settings = {};
    if (merches.length) {
      settings = {
        infinite: true,
        speed: 500,
        centerPadding: '0px',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <Arrow rotate />,
        nextArrow: <Arrow />,
        focusOnSelect: true,
        swipe: true,
        adaptiveHeight: true,
        swipeToSlide: true,
        centerMode: true,
        afterChange: (index) => {
          this.setState({ index });
          const merch = merches[index] || merches[0];
          changeMerchAttr(merch);
        },
      };
    }

    return (
      <div className="section store-container">
        <div className="store-wrapper">
          <div className="store-main-text">{mainText}</div>
          <div className="store-main-text-mobile">{mainTextMobile}</div>
          <div className="store-additional-text">{additionalText}</div>
          <div className="store-additional-text-mobile">{additionalTextMobile}</div>
          <div className="carousel-container">
            <Slider {...settings}>
              {merches.map((merch, index) => (
                <div key={index} className="carousel-block">
                  <div className="carousel-info__merch">
                    <div className="wrapper">
                      <div className="ellipse" />
                      <ImageLoader className="merch-logo" src={`${MEDIA_URL}/${merch.avatar_url}`} alt="merch" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="store-buttons-mobile">
            <MerchSize changeMerchAttr={changeMerchAttr} size={order.size} merches={merches} />
            <MerchBuy handleDialog={handleDialog} cost={order.cost} />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
