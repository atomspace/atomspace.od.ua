import React from "react";
import cl from "classnames";
import { bool, arrayOf, string, shape } from "prop-types";
import Slider from "react-slick";
import Arrow from "../Arrow";

const ImageBubble = ({ images, style }) => {
  const classes = cl("bubble-image-container");
  const customStyle = {
    ...style,
    position: style.position || "absolute",
  };
  const settings = {
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: <Arrow isRotate />,
    nextArrow: <Arrow />,
    centerPadding: "0px",
    swipeToSlide: false,
    imageLazy: true,
    lazyLoad: "ondemand",
    centerMode: false,
  };
  return (
    <div className={classes} style={customStyle}>
      <div className="image-block">
        <Slider {...settings}>
          {images.map((image) => (
            <img alt="imageLazy" key={image} src={image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

ImageBubble.propTypes = {
  images: arrayOf(string).isRequired,
  animate: bool,
  big: bool,
  small: bool,
  semiMiddle: bool,
  middle: bool,
  interactive: bool,
  style: shape({}).isRequired,
};

ImageBubble.defaultProps = {
  animate: false,
  big: false,
  small: false,
  semiMiddle: false,
  middle: false,
  interactive: false,
};

export default ImageBubble;
