import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import MyContext from '../../context/Base/AppContext';

const Soc = ({ classes, src: { facebook, instagram, linkedin } }) => (
  <MyContext>
    {({ isLightTheme }) => (
      <div className={cn(classes, { light_theme: isLightTheme })}>
        {facebook ? (
          <Icon name="facebook" url={facebook} target="_blank" />
        ) : null}
        {instagram ? (
          <Icon name="instagram" url={instagram} target="_blank" />
        ) : null}
        {linkedin ? <Icon name="linkedin" url={linkedin} /> : null}
      </div>
    )}
  </MyContext>
);
export default Soc;
