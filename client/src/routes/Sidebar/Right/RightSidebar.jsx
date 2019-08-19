import React, { Component } from 'react';
import classname from 'classnames';
import AtomLogoLight from '../../../assets/images/icons/logos/AtomSpace-logo.svg';
import AtomLogoDark from '../../../assets/images/icons/logos/AtomSpace-logo-dark.svg';

class RightSidebar extends Component {
  render() {
    const { pageName } = this.props;
    const lightPages = ['about', 'blog', 'edu', 'store', 'contacts'];
    const isLight = lightPages.includes(pageName);
    return (
      <div className="vertical-line right">
        <nav className={classname('sidebar__right', { light_theme: isLight })}>
          <img src={isLight ? AtomLogoDark : AtomLogoLight} className="atom-logo" />
          <div className="flex flex-col">
            {this.props.links.map((link, index) => {
              const isSelected = link.href === `#${pageName}`;
              return (
                <div className={classname({ list: true, selected: isSelected })} key={index}>
                  <div className="dot" />
                  <a className="list-item" href={link.href}>
                    {link.text}
                  </a>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default RightSidebar;
