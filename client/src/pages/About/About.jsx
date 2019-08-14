import React from 'react';
import { Bubble } from '../../components/Bubble';
import AboutPhoto1 from '../../assets/images/photos/about_photo_1.png';
import AboutPhoto2 from '../../assets/images/photos/about_photo_2.png';
import AboutPhoto3 from '../../assets/images/photos/about_photo_3.png';
import AboutPhoto4 from '../../assets/images/photos/about_photo_4.png';
import AtomspaceText from '../../assets/images/icons/logos/AtomSpace-about-maintext.svg';

const mainText = `Социальный образовательный проект, основанный Provectus и IT2School с целью создать возможность для талантливых подростков расти и развиваться в сфере IT. `;
const mainText1 = `Это креативное пространство, в котором подростки под руководством практикующих cпециалистов бесплатно обучаются IT, получают навыки командной работы и реализовывают собственные идеи.
Глобальная миссия Atom Space - изменить формат и подход к IT-образованию`;
const mainText2 = `Мы верим в то, что образование не ограничивается стенами школы, колледжа, университета. Поэтому мы создаем возможности для талантливых подростков, которые хотят получать знания в сфере высоких технологий, развивая навыки командной работы под руководством менторов.`;
const mainText3 = `Мы стремимся к созданию сообщества выпускников-резидентов, готовых осваивать новые технологии и способных адаптироваться к условиям динамично развивающегося мира; они генерируют нестандартные решения, которые меняют мир к лучшему, и популяризируют идею менторства, обучая других.`;

export default () => (
  <div className="section about-container">
    <div className="about-blocks flex flex-cen">
      <div className="about-main-block">
        <div className={'about-main-block-image'}>
          <img alt="AtomSpaceText" src={AtomspaceText} className={'about-main-block-image__atomspace'} />
        </div>
        <div className={'about-main-block-text'}>
          <div className={'about-text-1'}>
            <span className={'about-text-1--first'}>{mainText}</span>
            <span className={'about-text-1--second'}>{mainText1}</span>
          </div>
          <div className={'about-text-2'}>{mainText2}</div>
          <div className={'about-text-3'}>{mainText3}</div>
        </div>
      </div>
      <Bubble
        interactive
        image={[AboutPhoto1, AboutPhoto2, AboutPhoto3, AboutPhoto4]}
        style={{ position: 'relative !important', zIndex: 100, opacity: 1 }}
      />
      <Bubble middle animate style={{ bottom: 150, right: 230, zIndex: 100 }} />
      <Bubble small animate style={{ bottom: 70, right: 110, zIndex: 100 }} />
    </div>
  </div>
);
