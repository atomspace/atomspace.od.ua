import React, { Component } from 'react';
import Slider from 'react-slick';
import Arrow from '../../components/Arrow';
import MindLogo from '../../assets/images/icons/blog/mind-logo.svg';
import TeamLogo from '../../assets/images/icons/blog/team-logo.svg';
import TrustLogo from '../../assets/images/icons/blog/trust-logo.svg';
import PuzzleLogo from '../../assets/images/icons/blog/puzzle-logo.svg';
import { ImageLoader } from '../../components/ImageLoader';

const mainText = 'Ценности ATOM SPACE';
const mainTextMobile = 'Ценности';

const skillsData = [
  {
    logo: 'mind',
    header: 'Обучение длиною в жизнь',
    description:
      'Мы делимся с резидентами не только актуальными на сегодняшний день знаниями, но и учим учиться, комбинируя различные формы и методы: работа с ментором и проектное обучение, самообразование и онлайн-обучение',
    image: MindLogo,
  },
  {
    logo: 'team',
    header: 'Командная синергия',
    description:
      'Мы помогаем создавать команды единомышленников, где все участники одинаково важны и имеют возможность проявлять энтузиазм, предлагать идеи, ошибаться без страха осуждения и расти вместе с командой ради общего результата.',
    image: TeamLogo,
  },
  {
    logo: 'puzzle',
    header: 'Нестандартное мышление',
    description:
      'Мы развиваем умение выявлять проблемы и потребности людей и, главное, решать их с помощью техник дизайн-мышления',
    image: PuzzleLogo,
  },
  {
    logo: 'trust',
    header: 'Доверительная атмосфера',
    description:
      'В общении со всеми участниками проекта мы стремимся к взаимопониманию, искренности и доверию через диалог, неформальные встречи и совместный отдых.',
    image: TrustLogo,
  },
];

class Blog extends Component {
  state = {
    index: 0,
  };

  render() {
    const settings = {
      speed: 500,
      arrows: true,
      prevArrow: <Arrow rotate />,
      nextArrow: <Arrow />,
      centerPadding: '0px',
      centerMode: true,
      slidesToShow: 1,

      variableWidth: true,
      afterChange: (index) => {
        this.setState({ index });
      },

      dots: true,
    };
    return (
      <div className="section blog-container">
        <div className="blog-wrapper flex flex-acent flex-jcent">
          <div className="main-text">{mainText}</div>
          <div className="main-text-mobile">{mainTextMobile}</div>
          <div className="blog-skill-blocks">
            {skillsData.map((skill, index) => (
              <div key={index} className="blog-skill-item">
                <ImageLoader alt="blogImage" src={skill.image} className={`blog-skill-item__${skill.logo}-logo`} />
                <div className="blog-skill-item-information">
                  <div className="blog-skill-item-information__header">{skill.header}</div>
                  <div className="blog-skill-item-information__description">{skill.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-skill-blocks-mobile">
            <Slider {...settings}>
              {skillsData.map((skill, index) => (
                <div key={index} className="blog-skill-item">
                  <ImageLoader alt="blogImage" src={skill.image} className={`blog-skill-item__${skill.logo}-logo`} />
                  <div className="blog-skill-item-information">
                    <div className="blog-skill-item-information__header">{skill.header}</div>
                    <div className="blog-skill-item-information__description">{skill.description}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
