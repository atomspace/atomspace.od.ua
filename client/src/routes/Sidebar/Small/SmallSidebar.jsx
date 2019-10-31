import React from 'react';
import cl from 'classnames';
import MyContext from '../../../context/Base/AppContext';

const SmallSidebar = ({ links }) => {
  return (
    <MyContext>
      {({ setIsNavOpened, isNavOpened }) => (
        <nav className="small-nav">
          <ul className={cl('nav-list', { hide: !isNavOpened })}>
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={() => setIsNavOpened(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <div
              className={cl('nav_toggle', { arrow: isNavOpened })}
              role="presentation"
              onClick={() => setIsNavOpened(!isNavOpened)}
            />
          </div>
        </nav>
      )}
    </MyContext>
  );
};

export default SmallSidebar;
