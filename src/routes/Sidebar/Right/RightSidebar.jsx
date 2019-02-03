import React, { Component } from "react";

class RightSidebar extends Component {
  state = {};

  render() {
    const { sidebarRows, pageName } = this.props;
    let classes = ["sidebar__right"];
    switch (pageName) {
      case "about":
      case "edu":
      case "blog":
      case "store":
      case "contacts":
        classes.push("light_theme");
        break;
      default:
        break;
    }
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
      <nav className={classes.join(" ")}>
        <div className="atom-logo" />
        <div className="flex flex-col flex-acen">
          {/* <Link className="list-item" to="/">{`ГЛАВНАЯ`}</Link>
          <Link className="list-item" to="/about/">{`О ПРОЕКТЕ`}</Link>
          <Link to="/edu/" className="list-item">
            {`ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`}
          </Link>
          <Link className="list-item" to="/blog/">{`БЛОГ`}</Link>
          <Link className="list-item" to="/family/">{`ATOM FAMILY`}</Link>
          <Link className="list-item" to="/store/">{`ATOM STORE`}</Link>
          <Link className="list-item" to="/contacts/">{`КОНТАКТЫ`}</Link> */}
          {links.map((link, index) => (
            <a
              key={index}
              className="list-item"
              href={link.href}
              onClick={this.props.changePage}
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    );
  }
}

export default RightSidebar;
