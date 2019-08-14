import React, { Component } from 'react';
import classname from 'classnames';

class RightSidebar extends Component {
  render() {
    const { pageName } = this.props;
    const lightPages = ['about', 'blog', 'edu', 'store', 'contacts'];

    return (
      <div className="vertical-line right">
        <nav className={classname({ sidebar__right: true, light_theme: lightPages.includes(pageName) })}>
          <div className="atom-logo" />
          <div className="flex flex-col">
            {this.props.links.map((link, index) => {
              const isSelected = link.href === `#${pageName}`;
              return (
                <div
                  className={
                  classname({ list: true, selected: isSelected })
                }
                  key={index}
                >
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
