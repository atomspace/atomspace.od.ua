import React from 'react';
import Icon from '../Icon/Icon';

const Soc = ({ classes, src: { facebook, instagram, linkedin } }) => (
  <div className={classes}>
    {facebook ? <Icon name="facebook" url={facebook} target="_blank" /> : null}
    {instagram ? (
      <Icon name="instagram" url={instagram} target="_blank" />
    ) : null}
    {linkedin ? <Icon name="linkedin" url={linkedin} /> : null}
  </div>
);
export default Soc;
