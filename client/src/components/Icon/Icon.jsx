import React from 'react';
import cn from 'classnames';

const Icon = ({ name, url = '#', blank, link = true }) => {
  if (link) {
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
  }
  return <div className={cn('icon', { [name]: true })}>&nbsp; </div>;
};
export default Icon;
