import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

const Icon = ({ name, url = '#', target, link = true }) => {
  if (link) {
    if (target === '_blank') {
      return (
        <a
          className={cn('icon', { [name]: true })}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;
        </a>
      );
    }
    return (
      <a className={cn('icon', { [name]: true })} href={url}>
        &nbsp;
      </a>
    );
  }
  return <div className={cn('icon', { [name]: true })}>&nbsp; </div>;
};

Icon.propTypes = {
  name: string.isRequired,
  target: string,
};

Icon.defaultProps = {
  target: '_self',
};
export default Icon;
