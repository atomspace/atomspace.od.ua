import React from 'react';
import cn from 'classnames';

const Icon = ({ name, url = '#', blank }) => {
  if (blank && blank === '_blank') {
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
};
export default Icon;
