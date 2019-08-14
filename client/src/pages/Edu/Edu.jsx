import React from 'react';
import classnames from 'classnames';
import RocketLogo from '../../assets/images/icons/edu/rocket-logo.svg';
import LayoutLogo from '../../assets/images/icons/edu/layout-logo.svg';
import ChecklistLogo from '../../assets/images/icons/edu/checklist-logo.svg';
import ComputerRocketLogo from '../../assets/images/icons/edu/computer-rocket-logo.svg';
import ScriptsLogo from '../../assets/images/icons/edu/scripts-logo.svg';
import BookLogo from '../../assets/images/icons/edu/book-logo.svg';
import PythonLogo from '../../assets/images/icons/edu/python-logo.svg';
import WordPressLogo from '../../assets/images/icons/edu/wordpress-logo.svg';

const mainText = `Программы Atom Space`;
const mainTextMobile = `Программы`;

export default class Edu extends React.Component {
  state = { index: 0 };
  eduItems = [
    {
      logo: 'rocket-logo',
      text: 'Space management - управление проектами',
      mobileText: 'Space management',
      image: RocketLogo,
    },
    {
      logo: 'layout-logo',
      text: 'HTML/CSS - основы',
      mobileText: 'HTML/CSS',
      image: LayoutLogo,
    },
    {
      logo: 'checklist-logo',
      text: 'Курс тестирования web - приложений',
      mobileText: 'Quality assurance',
      image: ChecklistLogo,
    },
    {
      logo: 'computer-rocket-logo',
      text: 'Space Marketing',
      mobileText: 'Space Marketing',
      image: ComputerRocketLogo,
    },
    {
      logo: 'scripts-logo',
      text: 'JavaScript',
      mobileText: 'JavaScript',
      image: ScriptsLogo,
    },
    {
      logo: 'book-logo',
      text: 'Английский язык',
      mobileText: 'Английский язык',
      image: BookLogo,
    },
    {
      logo: 'python-logo',
      text: 'Python - базовый курс',
      mobileText: 'Python',
      image: PythonLogo,
    },
    {
      logo: 'wordpress-logo',
      text: 'Работа с WordPress',
      mobileText: 'WordPress',
      image: WordPressLogo,
    },
  ];
  changeEduItem = (e) => {
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
                  <img alt="eduImage" src={item.image} className={`edu-item__${item.logo}`} />
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
                  className={classnames('edu-item', {
                    selected: this.state.index === index,
                  })}
                >
                  <div id={index} className="edu-item__text" onClick={this.changeEduItem}>
                    {item.mobileText}
                  </div>
                  {this.state.index === index && (
                    <img alt="eduImageSelected" src={item.image} className={`edu-item__${item.logo}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
