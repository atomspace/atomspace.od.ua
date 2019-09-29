import React, { Component } from 'react';
import Slider from 'react-slick';

import { withTranslation } from 'react-i18next';
import Arrow from '../../components/Arrow';
import MerchSize from './MerchSize';
import MerchBuy from './MerchBuy';
import { getAllMerches } from '../../api/merch';
import { MEDIA_URL } from '../../utils/config';
import { ImageLoader } from '../../components/ImageLoader';
import LocalStorage from '../../localStorage';

class Store extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      merches: [],
    };
  }

  async componentDidMount() {
    const { changeMerchAttr } = this.props;
    let merches = await getAllMerches();
    if (merches.length) {
      merches = this.increaseCountOfMerch(merches);
      const merch = {
        ...{ ...merches[0].fields, id: merches[0].pk },
        ...LocalStorage.getMerch(),
      };
      changeMerchAttr(merch);
      this.setState({
        merches: merches.map(val => ({ id: val.pk, ...val.fields })),
      });
    }
  }

  increaseCountOfMerch(merches) {
    let tempMerch = [];
    while (tempMerch.length <= 3) {
      tempMerch = tempMerch.concat(merches);
    }
    return tempMerch;
  }

  render() {
    const { order, changeMerchAttr, handleDialog, t } = this.props;
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
        afterChange: index => {
          const merch = merches[index] || merches[0];
          changeMerchAttr(merch);
        },
      };
    }

    const mainText = t('store.mainText');
    const additionalText = t('store.additionalText');
    const mainTextMobile = t('store.mainTextMobile');
    const additionalTextMobile = t('store.additionalTextMobile');

    return (
      <div className="section store-container">
        <div className="store-wrapper">
          <div className="store-main-text">{mainText}</div>
          <div className="store-additional-text">{additionalText}</div>

          <div className="store-main-text-mobile">{mainTextMobile}</div>
          <div className="store-additional-text-mobile">
            {additionalTextMobile}
          </div>
          <div className="carousel-container">
            <Slider {...settings}>
              {merches.map(merch => (
                <div key={merch.id} className="carousel-block">
                  <div className="carousel-info__merch">
                    <div className="wrapper">
                      <div className="ellipse" />
                      <ImageLoader
                        className="merch-logo"
                        src={`${MEDIA_URL}/${merch.avatar_url}`}
                        alt="merch"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="store-buttons-mobile">
            <MerchSize
              changeMerchAttr={changeMerchAttr}
              size={order.size}
              merches={merches}
            />
            <MerchBuy handleDialog={handleDialog} cost={order.cost} />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('')(Store);
