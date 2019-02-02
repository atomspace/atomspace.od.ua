import React from "react";

export default () => {
  const eduItems = [
    {
      logo: "rocket-logo",
      text: "Space management - управление проектами"
    },
    {
      logo: "css-html-logo",
      text: "HTML/CSS - основы"
    },
    {
      logo: "tasks-logo",
      text: "Курс тестирования web - приложений"
    },
    {
      logo: "rocket-from-monitor-logo",
      text: "Space Marketing"
    },
    {
      logo: "js-logo",
      text: "JavaScript"
    },
    {
      logo: "abc-logo",
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
    <div className="edu-container">
      <div className="edu-items">
        {eduItems.map((item, index) => (
          <div key={index} className="edu-item">
            <div className="edu-item__layout flex flex-col flex-acen flex-jcen">
              <div className={`edu-item__${item.logo}`}/>
              <div className="edu-item__text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
