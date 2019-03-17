import React, { Component } from "react";
import LeftSidebar from "./Left";
import RightSidebar from "./Right";
import * as classnames from "classnames";

class Sidebar extends Component {
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
    const { pageName } = this.props;

    // $(".nav_toggle").click(function( click ) {
    //   $("header.global").toggleClass("nav--on");
    //   click.preventDefault();
    // });

    // $(".nav_close").click(function( click ) {
    //   $("header.global").removeClass("nav--on");
    //   click.preventDefault();
    // });
    const classes = classnames("navigation", pageName);
    const ulClass = classnames("nav-list", { hide: this.state.isNavOpened });
    console.log(this.state);
    let links = [
      {
        href: "#main",
        text: `ГЛАВНАЯ`
      },
      {
        href: "#about",
        text: `О ПРОЕКТЕ`
      },
      {
        href: "#edu",
        text: `ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`
      },
      {
        href: "#blog",
        text: `БЛОГ`
      },
      {
        href: "#family",
        text: `ATOM FAMILY`
      },
      {
        href: "#store",
        text: `ATOM STORE`
      },
      {
        href: "#contacts",
        text: `КОНТАКТЫ`
      }
    ];
    return (
      <div className={classes}>
        <LeftSidebar {...this.props} />
        <RightSidebar {...this.props} />
        <nav className="small-nav">
          <ul className={ulClass}>
            {links.map(link => (
              <li>
                <a href={link.href} onClick={this.toggleNav.bind(this, true)}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div>
            {this.state.isNavOpened ? (
              <a
                href="#"
                class="nav_toggle"
                onClick={this.toggleNav.bind(this, false)}
              >
                <span>&nbsp;</span>
              </a>
            ) : (
              <a
                href="#"
                class="nav_toggle cross"
                onClick={this.toggleNav.bind(this, true)}
              >
                <span>&nbsp;</span>
              </a>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
