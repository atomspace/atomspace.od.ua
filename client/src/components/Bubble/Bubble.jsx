import React from 'react';
import * as classnames from 'classnames';

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
    }, 5000);
  }

  getDefaultState() {
    return {
      indexPicture: 0,
    };
  }

  prevImage = () => {
    const { image = [] } = this.props;
    if (!image.length) return false;
    if (this.state.indexPicture) {
      this.setState((state) => ({
        ...state,
        indexPicture: this.state.indexPicture - 1,
      }));
    } else {
      this.setState((state) => ({ indexPicture: image.length - 1 }));
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
      this.setState((state) => this.getDefaultState());
    }
  };

  render() {
    const { image, animate, big, small, semiMiddle, middle, interactive } = this.props;
    const classes = classnames('bubble', {
      middle,
      small,
      semiMiddle,
      big,
      animate,
      interactive,
    });
    const style = {
      ...this.props.style,
    };

    if (this.props.style.position) {
      style.position = this.props.style.position;
    } else {
      style.position = 'absolute';
    }
    return (
      <div className={classes} style={style}>
        {image && (
          <div className="image-block">
            <div className="arrow left-arrow" onClick={this.prevImage} />
            <img
              src={this.props.image[this.state.indexPicture]}
              className="bubble-image"
              alt="bubble"
              onClick={this.nextImage}
            />
            <div className="arrow right-arrow" onClick={this.nextImage} />
          </div>
        )}
      </div>
    );
  }
}
