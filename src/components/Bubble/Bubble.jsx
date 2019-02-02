import React from "react";

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.image,
      ...this.getDefaultState()
    };
  }
  getDefaultState() {
    return {
      indexPicture: 0,
      currentPicture: this.props.image[0]
    };
  }
  changePicture = () => {
    if (this.state.indexPicture !== this.state.pictures.length) {
      const plusIndex = this.state.indexPicture++;
      this.setState(state => {
        return {
          ...state,
          indexPicture: plusIndex,
          currentPicture: this.props.image[plusIndex]
        };
      });
    } else {
      this.setState(state => this.getDefaultState());
    }
  };
  render() {
    let style = {
      width: this.props.width,
      height: this.props.height
    };
    const { image } = this.props.image;
    return (
      <div className="bubble" style={style} onClick={this.changePicture}>
        <img
          src={this.state.currentPicture}
          className="bubble-image"
          style={style}
          onClick={this.changePicture}
        />
      </div>
    );
  }
}
