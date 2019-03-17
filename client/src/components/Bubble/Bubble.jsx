import React from "react";

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.getDefaultState()
    };
  }
  getDefaultState() {
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
    const { image, animate, big, small, semiMiddle, middle } = this.props;
    let classes = ["bubble"];
    middle && classes.push("middle");
    small && classes.push("small")
    semiMiddle && classes.push("semi-middle")
    big && classes.push("big");
    animate && classes.push("animate");
    const style = {
      ...this.props.style,
    }
    if(this.props.style.position){
      style.position = this.props.style.position
    }else{
      style.position = 'absolute';
    }
    return (
      <div
        className={classes.join(" ")}
        style={style}
        onClick={this.changePicture}
      >
        {image && (
          <img
            src={this.props.image[this.state.indexPicture]}
            className="bubble-image"
            alt={"bubble"}
            // style={style}
            onClick={this.changePicture}
          />
        )}
      </div>
    );
  }
}
