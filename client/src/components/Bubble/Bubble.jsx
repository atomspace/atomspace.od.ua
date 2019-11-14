import React, { useState, useCallback } from 'react';
import cl from 'classnames';
import { ImageLoader } from '../ImageLoader';
import useInterval from '../../hooks/useInterval';

const Bubble = ({
  image = [],
  animate,
  big,
  small,
  semiMiddle,
  middle,
  interactive,
  style,
}) => {
  const [indexPicture, setIndexPicture] = useState(0);

  const prevImage = () => {
    if (!image.length) return false;
    if (indexPicture) {
      setIndexPicture(indexPicture - 1);
    } else {
      setIndexPicture(image.length - 1);
    }
  };
  const nextImage = useCallback(() => {
    if (!image.length) return false;
    if (indexPicture !== image.length - 1) {
      setIndexPicture(indexPicture + 1);
    } else {
      setIndexPicture(0);
    }
  }, [indexPicture]);
  useInterval(() => {
    nextImage();
  }, 3000);

  const classes = cl('bubble', {
    middle,
    small,
    semiMiddle,
    big,
    animate,
    interactive,
  });
  const customStyle = {
    ...style,
    position: style.position || 'absolute',
  };

  return (
    <div className={classes} style={customStyle}>
      {image && (
        <div className="image-block">
          <div className="arrow left-arrow" onClick={prevImage} />
          <ImageLoader
            src={image[indexPicture]}
            className="bubble-image"
            alt="bubble"
            onClick={nextImage}
          />
          <div className="arrow right-arrow" onClick={nextImage} />
        </div>
      )}
    </div>
  );
};

export default Bubble;
