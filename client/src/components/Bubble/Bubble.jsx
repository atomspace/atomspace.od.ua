import React from 'react';
import cl from 'classnames';
import { ImageLoader } from '../ImageLoader';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.getDefaultState(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  getDefaultState() {
    return {
      indexPicture: 0,
    };
  }

  prevImage = () => {
    const { image = [] } = this.props;
    const { indexPicture } = this.state;
    if (!image.length) return false;
    if (indexPicture) {
      this.setState((state) => ({
        ...state,
        indexPicture: indexPicture - 1,
      }));
    } else {
      this.setState(() => ({ indexPicture: image.length - 1 }));
    }
  };

  nextImage = () => {
    const { image = [] } = this.props;
    const { indexPicture } = this.state;
    if (!image.length) return false;
    if (indexPicture !== image.length - 1) {
      this.setState((state) => ({
        ...state,
        indexPicture: indexPicture + 1,
      }));
    } else {
      this.setState(() => this.getDefaultState());
    }
  };

  render() {
    const {
      image, animate, big, small, semiMiddle, middle, interactive, style,
    } = this.props;
    const { indexPicture } = this.state;
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
    };

    if (style.position) {
      customStyle.position = style.position;
    } else {
      customStyle.position = 'absolute';
    }
    return (
      <div className={classes} style={style}>
        {image && (
          <div className="image-block">
            <div className="arrow left-arrow" onClick={this.prevImage} />
            <ImageLoader src={image[indexPicture]} className="bubble-image" alt="bubble" onClick={this.nextImage} />
            <div className="arrow right-arrow" onClick={this.nextImage} />
          </div>
        )}
      </div>
    );
  }
}
