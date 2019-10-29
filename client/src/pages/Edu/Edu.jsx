import React, { useState } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import RocketLogo from '../../assets/images/icons/edu/rocket-logo.svg';
import LayoutLogo from '../../assets/images/icons/edu/layout-logo.svg';
import ChecklistLogo from '../../assets/images/icons/edu/checklist-logo.svg';
import ComputerRocketLogo from '../../assets/images/icons/edu/computer-rocket-logo.svg';
import ScriptsLogo from '../../assets/images/icons/edu/scripts-logo.svg';
import BookLogo from '../../assets/images/icons/edu/book-logo.svg';
import PythonLogo from '../../assets/images/icons/edu/python-logo.svg';
import WordPressLogo from '../../assets/images/icons/edu/wordpress-logo.svg';
import { ImageLoader } from '../../components/ImageLoader';

const Edu = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const mainText = t('edu.programs');
  const mainTextMobile = t('edu.programsMob');

  const eduItems = [
    {
      id: 1,
      logo: 'rocket-logo',
      text: t('edu.rocket-logo.text'),
      mobileText: t('edu.rocket-logo.mobileText'),
      image: RocketLogo,
    },
    {
      id: 2,
      logo: 'layout-logo',
      text: t('edu.layout-logo.text'),
      mobileText: t('edu.layout-logo.mobileText'),
      image: LayoutLogo,
    },
    {
      id: 3,
      logo: 'checklist-logo',
      text: t('edu.checklist-logo.text'),
      mobileText: t('edu.checklist-logo.mobileText'),
      image: ChecklistLogo,
    },
    {
      id: 4,
      logo: 'computer-rocket-logo',
      text: t('edu.computer-rocket-logo.text'),
      mobileText: t('edu.computer-rocket-logo.mobileText'),
      image: ComputerRocketLogo,
    },
    {
      id: 5,
      logo: 'scripts-logo',
      text: t('edu.scripts-logo.text'),
      mobileText: t('edu.scripts-logo.mobileText'),
      image: ScriptsLogo,
    },
    {
      id: 6,
      logo: 'book-logo',
      text: t('edu.book-logo.text'),
      mobileText: t('edu.book-logo.mobileText'),
      image: BookLogo,
    },
    {
      id: 7,
      logo: 'python-logo',
      text: t('edu.python-logo.text'),
      mobileText: t('edu.python-logo.mobileText'),
      image: PythonLogo,
    },
    {
      id: 8,
      logo: 'wordpress-logo',
      text: t('edu.wordpress-logo.text'),
      mobileText: t('edu.wordpress-logo.mobileText'),
      image: WordPressLogo,
    },
  ];

  const changeEduItem = e => {
    setIndex(Number(e.target.id));
  };

  return (
    <div className="section edu-container">
      <div className="edu-wrapper">
        <div className="main-text">{mainText}</div>
        <div className="main-text-mobile">{mainTextMobile}</div>
        <div className="edu-items">
          {eduItems.map(item => (
            <div key={item.id} className="edu-item">
              <div className="edu-item__layout flex flex-col flex-acen flex-jcen">
                <ImageLoader
                  alt="eduImage"
                  src={item.image}
                  className={`edu-item__${item.logo}`}
                />
                <div className="edu-item__text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="edu-items-mobile">
          <div className="edu-items-list">
            {eduItems.map(item => (
              <div
                key={item.id}
                className={classnames('edu-item', {
                  selected: index === item.id,
                })}
              >
                <div
                  id={item.id}
                  className="edu-item__text"
                  onClick={changeEduItem}
                  role="presentation"
                >
                  {item.mobileText}
                </div>
                {index === item.id && (
                  <ImageLoader
                    alt="eduImageSelected"
                    src={item.image}
                    className={`edu-item__${item.logo}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
