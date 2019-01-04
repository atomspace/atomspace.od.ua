import React, { Component } from "react";

class Blog extends Component {
  state = {};
  render() {
    const mainText =
      '"Самообучаться, помогать реализовывать собственные идеи и встречать единомышленников", Миссия Atom Space';

    const skillsData = [
      {
        logo: "mind",
        header: "Самообразование",
        description:
          "Совмещение самообразования и работы с практикующими специалистами, как метод эффективного получения технических знаний для резидентов"
      },
      {
        logo: "people",
        header: "Командная работа",
        description:
          "Совместная работа над практическими задачами в команде менторами и такими же резидентами, как способ получения навыков командного достижения целей"
      },
      {
        logo: "puzzle",
        header: "Креативность",
        description:
          "Возможность работы над своими проектами и идеями в максимально дружелюбном сообществе, как способ проактивного развития "
      }
    ];
    return (
      <div className="blog-container">
        <div className="blog-wrapper flex flex-acent flex-jcent">
          <div className="blog-main-text">{mainText}</div>
          <div className="blog-skill-blocks">
            {skillsData.map(skill => (
              <div className="blog-skill-item">
                <div className={`blog-skill-item__${skill.logo}-logo`} />
                <div className="blog-skill-item__header">{skill.header}</div>
                <div className="blog-skill-item__description">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
