import React from "react";
import AnimatePlanet from "./AnimatePlanet";
const mainText = `образовательное  Tech - пространство для подростков`;
class Main extends React.Component {
  render() {
    return (
      <div className="section main-container">
        <div className="logo-container">
          <div className="center-wrapper">
            <div className="header-stars">{mainText}</div>
            <AnimatePlanet />
            <div className="main-logo"/>
            <div className="donate-block">
              <a
                className="btn btn-support btn-donate"
                target="_blank"
                rel="noopener noreferrer"
                href="https://secure.wayforpay.com/button/b4a090420eb14"
              >{`Поддержать проект`}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
