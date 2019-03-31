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
  isLightTheme = () => {
    const { pageName } = this.props;
    switch (pageName) {
      case "about":
      case "blog":
      case "edu":
      case "store":
      case "contacts":
        return true;
      default:
        return false;
    }
  };
  render() {
    const ulClass = classnames("nav-list", { hide: this.state.isNavOpened });
    const navClass = classnames("small-nav", {
      light_theme: this.isLightTheme()
    });

    return (
      <nav className={navClass}>
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
            <div
              className="nav_toggle"
              onClick={this.toggleNav.bind(this, false)}
            />
          ) : (
            <div
              className="nav_toggle cross"
              onClick={this.toggleNav.bind(this, true)}
            />
          )}
        </div>
      </nav>
    );
  }
}
