import React from 'react';
import cl from 'classnames';
import AtomLogoLight from '../../../assets/images/icons/logos/AtomSpace-logo.svg';
import AtomLogoDark from '../../../assets/images/icons/logos/AtomSpace-logo-dark.svg';
import Language from '../../../components/Language/Language';
import { ImageLoader } from '../../../components/ImageLoader';

export const RightSidebar = ({ pageName, links }) => {
  const lightPages = ['about', 'blog', 'edu', 'store', 'contacts'];
  const isLight = lightPages.includes(pageName);
  return (
    <div className="vertical-line right">
      <nav className={cl('sidebar__right', { light_theme: isLight })}>
        <ImageLoader src={isLight ? AtomLogoDark : AtomLogoLight} className="atom-logo" />
        <div className="flex flex-col">
          {links.map((link) => {
            const isSelected = link.href === `#${pageName}`;
            return (
              <div className={cl({ list: true, selected: isSelected })} key={link.id}>
                <div className="dot" />
                <a className="list-item" target={link.target} href={link.href}>
                  {link.text}
                </a>
              </div>
            );
          })}
        </div>
        <Language />
      </nav>
    </div>
  );
};

export default RightSidebar;
