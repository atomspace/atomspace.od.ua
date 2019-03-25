import React from "react";
import * as classnames from "classnames";

export default class SmallSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: true
    };
  }
  toggleNav = status => {
    this.setState(state => ({
      ...state,
      isNavOpened: status
    }));
  };

  render() {
    const ulClass = classnames("nav-list", { hide: this.state.isNavOpened });
    return (
      <nav className="small-nav">
        <ul className={ulClass}>
          {this.props.links.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={this.toggleNav.bind(this, true)}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div>
          {this.state.isNavOpened ? (
            <button
              className="nav_toggle"
              onClick={this.toggleNav.bind(this, false)}
            >
              <span>&nbsp;</span>
            </button>
          ) : (
            <button
              className="nav_toggle cross"
              onClick={this.toggleNav.bind(this, true)}
            >
              <span>&nbsp;</span>
            </button>
          )}
        </div>
      </nav>
    );
  }
}
