import React from "react";

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.getDefaultState()
    };
  }
  getDefaultState() {
    const { image = [] } = this.props;
    return {
      indexPicture: 0,
    };
  }
  changePicture = () => {
    const { image = [] } = this.props;

    if (image.length) {
      if (this.state.indexPicture !== image.length - 1) {
        this.setState(state => {
          return {
            ...state,
            indexPicture: this.state.indexPicture + 1,
          };
        });
      } else {
        this.setState(state => this.getDefaultState());
      }
    }
  };
  render() {
    const { image, animate, big, small, middle } = this.props;
    let classes = ["bubble"];
    middle && classes.push("middle");
    small && classes.push("small")
    big && classes.push("big");
    animate && classes.push("animate");

    return (
      <div
        className={classes.join(" ")}
        style={this.props.style}
        onClick={this.changePicture}
      >
        {image && (
          <img
            src={this.props.image[this.state.indexPicture]}
            className="bubble-image"
            style={this.props.style}
            onClick={this.changePicture}
          />
        )}
      </div>
    );
  }
}
