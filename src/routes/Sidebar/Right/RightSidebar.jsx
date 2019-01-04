import React, { Component } from "react";
import { Link } from "react-router-dom";

class RightSidebar extends Component {
  state = {};
  render() {
    return (
      <nav className="sidebar__right">
        <div className="atom-logo"></div>
        <div className="flex flex-col flex-acen">
          <Link className="list-item" to="/">{`ГЛАВНАЯ`}</Link>
          <Link className="list-item" to="/about/">{`О ПРОЕКТЕ`}</Link>
          <Link to="/edu/" className="list-item">
            {`ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`}
          </Link>
          <Link className="list-item" to="/blog/">{`БЛОГ`}</Link>
          <Link className="list-item" to="/family/">{`ATOM FAMILY`}</Link>
          <Link className="list-item" to="/store/">{`ATOM STORE`}</Link>
          <Link className="list-item" to="/contacts/">{`КОНТАКТЫ`}</Link>
        </div>
        
      </nav>
    );
  }
}

export default RightSidebar;
