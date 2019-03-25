import React from "react";

export default () => {
  const eduItems = [
    {
      logo: "rocket-logo",
      text: "Space management - управление проектами"
    },
    {
      logo: "layout-logo",
      text: "HTML/CSS - основы"
    },
    {
      logo: "checklist-logo",
      text: "Курс тестирования web - приложений"
    },
    {
      logo: "computer-rocket-logo",
      text: "Space Marketing"
    },
    {
      logo: "scripts-logo",
      text: "JavaScript"
    },
    {
      logo: "book-logo",
      text: "Английский язык"
    },
    {
      logo: "python-logo",
      text: "Python - базовый курс"
    },
    {
      logo: "wordpress-logo",
      text: "Работа с WordPress"
    }
  ];
  return (
    <div className="section edu-container">
      <div className="edu-wrapper">
        <div className="main-text">{`ПРОГРАММЫ ATOM SPACE`}</div>
        <div className="edu-items">
          {eduItems.map((item, index) => (
            <div key={index} className="edu-item">
              <div className="edu-item__layout flex flex-col flex-acen flex-jcen">
                <div className={`edu-item__${item.logo}`} />
                <div className="edu-item__text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
