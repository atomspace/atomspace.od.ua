import React from 'react';

const Soc = ({ classes, src: { facebook, instagram, linkedin } }) => (
  <div className={classes}>
    {facebook ? (
      <a
        className="icon facebook"
        rel="noopener noreferrer"
        target="_blank"
        href={facebook}
      >
        &nbsp;
      </a>
    ) : null}
    {instagram ? (
      <a
        className="icon instagram"
        rel="noopener noreferrer"
        target="_blank"
        href={instagram}
      >
        &nbsp;
      </a>
    ) : null}
    {linkedin ? (
      <a className="icon linkedin" href={linkedin}>
        &nbsp;
      </a>
    ) : null}
  </div>
);
export default Soc;
