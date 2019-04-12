import React from "react";
import AnimatePlanet from "./AnimatePlanet";
const mainText = `образовательное  Tech-пространство для подростков`;
class Main extends React.Component {
  render() {
    const { handleDialog } = this.props;
    return (
      <div className="section main-container">
        <div className="logo-container">
          <div className="center-wrapper">
            <div className="header-stars">{mainText}</div>
            <AnimatePlanet />
            <div className="main-logo" />
            <div className="donate-block">
              <a
                className="btn btn-support btn-donate"
                target="_blank"
                rel="noopener noreferrer"
                href="https://secure.wayforpay.com/button/b4a090420eb14"
              >{`Поддержать проект`}</a>
            </div>
            <div className="bottom-quastion">{`Кем, ты хочешь стать?`}</div>
            <div className="support-container">
              <a
                className="support resident-support"
                href={"#residentForm"}
                onClick={handleDialog}
              >{`Резидентом`}</a>
              <a
                className="support mentor-support"
                href={"#mentorForm"}
                onClick={handleDialog}
              >{`Ментором`}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
