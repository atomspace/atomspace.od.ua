import React, { Component } from "react";

class Blog extends Component {
  state = {};
  render() {
    const mainText =
      '"Самообучаться, помогать реализовывать собственные идеи и встречать единомышленников", Миссия Atom Space';

    const skillsData = [
      {
        logo: "mind",
        header: "Обучение длиною в жизнь",
        description:
          "Мы делимся с резидентами не только актуальными на сегодняшний день знаниями, но и учим учиться, комбинируя различные формы и методы: работа с ментором и проектное обучение, самообразование и онлайн-обучение"
      },
      {
        logo: "team",
        header: "Командная синергия",
        description:
          "Мы помогаем создавать команды единомышленников, где все участники одинаково важны и имеют возможность проявлять энтузиазм, предлагать идеи, ошибаться без страха осуждения и расти вместе с командой ради общего результата."
      },
      {
        logo: "puzzle",
        header: "Нестандартное мышление",
        description:
          "Мы развиваем умение выявлять проблемы и потребности людей и, главное, решать их с помощью техник дизайн-мышления"
      },
      {
        logo: "trust",
        header: "Доверительная атмосфера",
        description:
          "В общении со всеми участниками проекта мы стремимся к взаимопониманию, искренности и доверию через диалог, неформальные встречи и совместный отдых."
      }
    ];
    return (
      <div className="section blog-container">
        <div className="blog-wrapper flex flex-acent flex-jcent">
          <div className="blog-main-text">{mainText}</div>
          <div className="blog-skill-blocks">
            {skillsData.map((skill, index) => (
              <div key={index} className="blog-skill-item">
                <div className={`blog-skill-item__${skill.logo}-logo`} />
                <div className={`blog-skill-item-information`}>
                  <div className={`blog-skill-item-information__header`}>
                    {skill.header}
                  </div>
                  <div className={`blog-skill-item-information__description`}>
                    {skill.description}
                  </div>
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
