import React, { useState } from 'react';
import cl from 'classnames';

const SmallSidebar = ({ links }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const toggleNav = (status) => {
    setIsNavOpened(status);
  };

  const ulClass = cl('nav-list', { hide: !isNavOpened });
  return (
    <nav className="small-nav">
      <ul className={ulClass}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} target={link.target} onClick={toggleNav.bind(this, true)}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <div
          className={cl('nav_toggle', { arrow: isNavOpened })}
          role="presentation"
          onClick={toggleNav.bind(this, !isNavOpened)}
        />
      </div>
    </nav>
  );
};

export default SmallSidebar;
