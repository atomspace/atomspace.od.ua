import React from "react";
import AnimatePlanet from "./AnimatePlanet";
import AtomSpaceLogo from "../../assets/images/icons/AtomSpace-logo-vertical.png";
class Main extends React.Component {
  render() {
    return (
      <div className="section main-container">
        <div className="logo-container">
          <div className="center-wrapper">
            <AnimatePlanet />
            <div className="main-logo" src={AtomSpaceLogo} />
            <div className="btn btn-support">Поддержать проект</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
