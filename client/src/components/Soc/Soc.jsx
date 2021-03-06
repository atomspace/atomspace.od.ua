import React, { useContext } from "react";
import cn from "classnames";
import { string, shape } from "prop-types";
import Icon from "../Icon/Icon";
import MyContext from "../../context/Base/AppContext";

const Soc = ({ classes, src: { facebook, instagram, linkedin } }) => {
  const { isLightTheme } = useContext(MyContext);
  return (
    <div className={cn(classes, { light_theme: isLightTheme })}>
      {facebook ? <Icon name="facebook" url={facebook} target="_blank" /> : null}
      {instagram ? <Icon name="instagram" url={instagram} target="_blank" /> : null}
      {linkedin ? <Icon name="linkedin" url={linkedin} /> : null}
    </div>
  );
};

Soc.propTypes = {
  classes: string.isRequired,
  src: shape({
    facebook: string,
    instagram: string,
    linkedin: string,
  }).isRequired,
};

export default Soc;
