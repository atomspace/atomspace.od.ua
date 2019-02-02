import React from "react";
import { Bubble } from "../../components/Bubble";
import AboutPhoto1 from "../../assets/images/photos/about_photo_1.png";
import AboutPhoto2 from "../../assets/images/photos/about_photo_2.png";
import AboutPhoto3 from "../../assets/images/photos/about_photo_3.png";
import AboutPhoto4 from "../../assets/images/photos/about_photo_4.png";

const headerText = `-  социальный образовательный`;
const mainText = ` проект, основанный Provectus и IT2School с целью создать возможность для талантливых подростков расти и развиваться в сфере IT. Это креативное пространство, в котором подростки под руководством практикующих cпециалистов бесплатно обучаются IT, получают навыки командной работы и реализовывают собственные идеи. Глобальная миссия Atom Space - изменить формат и подход к IT-образованию`;

export default () => (
  <div className="about-container">
    <div className="about-blocks flex flex-cen">
      <div className="about-maintext-block">
        <div className={"about-maintext-block__atomspace"} />
        <div className={"about-maintext-block__text"}>
          <div className={"align-right"}>{headerText}</div>
          {mainText}
        </div>
      </div>
      <Bubble
        width={"31.777vw"}
        height={"31.777vw"}
        image={[AboutPhoto1, AboutPhoto2, AboutPhoto3, AboutPhoto4]}
      />
    </div>
  </div>
);
