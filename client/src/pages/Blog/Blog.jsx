import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import Arrow from '../../components/Arrow';
import MindLogo from '../../assets/images/icons/blog/mind-logo.svg';
import TeamLogo from '../../assets/images/icons/blog/team-logo.svg';
import TrustLogo from '../../assets/images/icons/blog/trust-logo.svg';
import PuzzleLogo from '../../assets/images/icons/blog/puzzle-logo.svg';
import { ImageLoader } from '../../components/ImageLoader';

const Blog = () => {
  const { t } = useTranslation();
  const mainText = t('blog.mainText');
  const mainTextMobile = t('blog.mainTextMobile');

  const skillsData = [
    {
      id: 1,
      logo: 'mind',
      header: t('blog.mind.header'),
      description: t('blog.mind.description'),
      image: MindLogo,
    },
    {
      id: 2,
      logo: 'team',
      header: t('blog.team.header'),
      description: t('blog.team.description'),
      image: TeamLogo,
    },
    {
      id: 3,
      logo: 'puzzle',
      header: t('blog.puzzle.header'),
      description: t('blog.puzzle.description'),
      image: PuzzleLogo,
    },
    {
      id: 4,
      logo: 'trust',
      header: t('blog.trust.header'),
      description: t('blog.trust.description'),
      image: TrustLogo,
    },
  ];
  const settings = {
    speed: 500,
    arrows: true,
    prevArrow: <Arrow isRotate />,
    nextArrow: <Arrow />,
    centerPadding: '0px',
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    dots: true,
  };
  return (
    <div className="section blog-container">
      <div className="blog-wrapper flex flex-acent flex-jcent">
        <div className="main-text">{mainText}</div>
        <div className="main-text-mobile">{mainTextMobile}</div>
        <div className="blog-skill-blocks">
          {skillsData.map(skill => (
            <div key={skill.id} className="blog-skill-item">
              <ImageLoader
                alt="blogImage"
                src={skill.image}
                className={`blog-skill-item__${skill.logo}-logo`}
              />
              <div className="blog-skill-item-information">
                <div className="blog-skill-item-information__header">
                  {skill.header}
                </div>
                <div className="blog-skill-item-information__description">
                  {skill.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-skill-blocks-mobile">
          <Slider {...settings}>
            {skillsData.map(skill => (
              <div key={skill.id} className="blog-skill-item">
                <ImageLoader
                  alt="blogImage"
                  src={skill.image}
                  className={`blog-skill-item__${skill.logo}-logo`}
                />
                <div className="blog-skill-item-information">
                  <div className="blog-skill-item-information__header">
                    {skill.header}
                  </div>
                  <div className="blog-skill-item-information__description">
                    {skill.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
