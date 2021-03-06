import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { func, shape } from "prop-types";
import { useTranslation } from "react-i18next";
import Arrow from "../../components/Arrow";
import MerchSize from "./MerchSize";
import MerchBuy from "./MerchBuy";
import { getAllMerches } from "../../api/merch";
import { MEDIA_URL } from "../../utils/config";
import { ImageLoader } from "../../components/ImageLoader";
import LocalStorage from "../../utils/localStorage";

const Store = ({ order, changeMerchAttr, handleDialog }) => {
  const [merches, setMerches] = useState([]);
  const { t } = useTranslation();

  const increaseCountOfMerch = (increasedMerches) => {
    let tempMerch = [];
    while (tempMerch.length <= 3) {
      tempMerch = tempMerch.concat(increasedMerches);
    }
    return tempMerch;
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllMerches();
      let requestedMerches = await getAllMerches();
      if (requestedMerches.length) {
        requestedMerches = increaseCountOfMerch(requestedMerches);
        const merch = {
          ...{ ...requestedMerches[0].fields, id: requestedMerches[0].pk },
          ...LocalStorage.getMerch(),
        };
        changeMerchAttr(merch);
        setMerches(requestedMerches.map((val) => ({ id: val.pk, ...val.fields })));
      }
    };
    fetchData();
  }, []);

  let settings = {};
  if (merches.length) {
    settings = {
      infinite: true,
      speed: 500,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <Arrow isRotate />,
      nextArrow: <Arrow />,
      focusOnSelect: true,
      swipe: true,
      adaptiveHeight: true,
      swipeToSlide: true,
      centerMode: true,
      afterChange: (index) => {
        const merch = merches[index] || merches[0];
        changeMerchAttr(merch);
      },
    };
  }

  return (
    <div className="section store-container">
      <div className="store-wrapper">
        <div className="store-main-text">{t("store.mainText")}</div>
        <div className="store-additional-text">{t("store.additionalText")}</div>
        <div className="store-main-text-mobile">{t("store.mainTextMobile")}</div>
        <div className="store-additional-text-mobile">{t("store.additionalTextMobile")}</div>
        <div className="carousel-container">
          <Slider {...settings}>
            {merches.map((merch) => (
              <div key={merch.id} className="carousel-block">
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
          <MerchSize changeMerchAttr={changeMerchAttr} defaultSize={order.size} merches={merches} />
          <MerchBuy handleDialog={handleDialog} cost={order.cost} />
        </div>
      </div>
    </div>
  );
};

Store.propTypes = {
  changeMerchAttr: func.isRequired,
  order: shape({}).isRequired,
  handleDialog: func.isRequired,
};

export default Store;
