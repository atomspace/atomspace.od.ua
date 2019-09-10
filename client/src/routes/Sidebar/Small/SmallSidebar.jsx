import React, { useState } from 'react';
import cl from 'classnames';

const SmallSidebar = ({ pageName, links }) => {
  const [isNavOpened, setIsNavOpened] = useState(true);
  const toggleNav = (status) => {
    setIsNavOpened(status);
  };

  const isLightTheme = () => {
    switch (pageName) {
      case 'about':
      case 'blog':
      case 'edu':
      case 'store':
      case 'contacts':
      case 'family':
        return true;
      default:
        return false;
    }
  };

  const ulClass = cl('nav-list', { hide: isNavOpened });
  const navClass = cl('small-nav', {
    light_theme: isLightTheme(),
  });

  return (
    <nav className={navClass}>
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
        {isNavOpened ? (
          <div className="nav_toggle" role="presentation" onClick={toggleNav.bind(this, false)} />
        ) : (
          <div className="nav_toggle cross light" role="presentation" onClick={toggleNav.bind(this, true)} />
        )}
      </div>
    </nav>
  );
};

export default SmallSidebar;
