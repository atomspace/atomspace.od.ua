import React from "react";
import classnames from "classnames";

const mainText = `Программы Atom Space`;
const mainTextMobile = `Программы`;

export default class Edu extends React.Component {
  state = { index: 0 };
  eduItems = [
    {
      logo: "rocket-logo",
      text: "Space management - управление проектами",
      mobileText: "Space management"
    },
    {
      logo: "layout-logo",
      text: "HTML/CSS - основы",
      mobileText: "HTML/CSS"
    },
    {
      logo: "checklist-logo",
      text: "Курс тестирования web - приложений",
      mobileText: "Quality assurance"
    },
    {
      logo: "computer-rocket-logo",
      text: "Space Marketing",
      mobileText: "Space Marketing"
    },
    {
      logo: "scripts-logo",
      text: "JavaScript",
      mobileText: "JavaScript"
    },
    {
      logo: "book-logo",
      text: "Английский язык",
      mobileText: "Английский язык"
    },
    {
      logo: "python-logo",
      text: "Python - базовый курс",
      mobileText: "Python"
    },
    {
      logo: "wordpress-logo",
      text: "Работа с WordPress",
      mobileText: "WordPress"
    }
  ];
  changeEduItem = e => {
    this.setState({ index: Number(e.target.id) });
  };
  render() {
    return (
      <div className="section edu-container">
        <div className="edu-wrapper">
          <div className="main-text">{mainText}</div>
          <div className="main-text-mobile">{mainTextMobile}</div>
          <div className="edu-items">
            {this.eduItems.map((item, index) => (
              <div key={index} className="edu-item">
                <div className="edu-item__layout flex flex-col flex-acen flex-jcen">
                  <div className={`edu-item__${item.logo}`} />
                  <div className="edu-item__text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="edu-items-mobile">
            <div className="edu-items-list">
              {this.eduItems.map((item, index) => (
                <div
                  key={index}
                  className={classnames("edu-item", {
                    selected: this.state.index === index
                  })}
                >
                  <div
                    id={index}
                    className="edu-item__text"
                    onClick={this.changeEduItem}
                  >
                    {item.mobileText}
                  </div>
                  <div className={`edu-item__${item.logo}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
