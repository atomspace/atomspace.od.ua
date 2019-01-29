import React, { Component } from "react";
import { Link } from "react-router-dom";

class RightSidebar extends Component {
  state = {};
  changePage = e => {
    e.preventDefault();
    window.location.href = e.target.href;
    const hash = window.location.hash.replace("#", "");
    this.setState(state => ({ ...state, currentPage: hash }));
  };
  render() {
    const { sidebarRows, pageName } = this.props;
    let classes = ["sidebar__right"];
    console.log(this.props.pageName);
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
    return (
      <nav className={classes.join(" ")}>
        <div className="atom-logo"/>
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
          <a
            className="list-item"
            href="#main"
            onClick={this.changePage}
          >{`ГЛАВНАЯ`}</a>
          <a
            className="list-item"
            href="#about"
            onClick={this.changePage}
          >{`О ПРОЕКТЕ`}</a>
          <a className="list-item" href="#edu" onClick={this.changePage}>
            {`ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`}
          </a>
          <a
            className="list-item"
            href="#blog"
            onClick={this.changePage}
          >{`БЛОГ`}</a>
          <a
            className="list-item"
            href="#family"
            onClick={this.changePage}
          >{`ATOM FAMILY`}</a>
          <a
            className="list-item"
            href="#store"
            onClick={this.changePage}
          >{`ATOM STORE`}</a>
          <a
            className="list-item"
            href="#contacts"
            onClick={this.changePage}
          >{`КОНТАКТЫ`}</a>
        </div>
      </nav>
    );
  }
}

export default RightSidebar;
