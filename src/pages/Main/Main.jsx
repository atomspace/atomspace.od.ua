import React from "react";
import AnimatePlanet from "./AnimatePlanet";
import AtomSpaceLogo from "../../assets/images/icons/AtomSpace-logo-vertical.png";
class Main extends React.Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <div id="main" className="main-container">
        <div className="logo-container">
          <AnimatePlanet />
          <div className="main-logo" src={AtomSpaceLogo} />
          <div className="btn btn-support">Поддержать проект</div>
        </div>
      </div>
    );
  }
}

export default Main;
