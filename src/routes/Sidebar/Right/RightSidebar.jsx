import React, { Component } from "react";
import { Link } from "react-router-dom";

class RightSidebar extends Component {
  state = {};
  render() {
    return (
      <nav className="sidebar__right">
        <div className="flex flex-col flex-acen">
          <div className="list-item">
            <Link to="/">{`ГЛАВНАЯ`}</Link>
          </div>
          <div className="list-item">
            <Link to="/users/">{`О ПРОЕКТЕ`}</Link>
          </div>
          <div className="list-item">
            <Link to="/space/">{`ПРОСТРАНСТВО`}</Link>
          </div>
          <div className="list-item">
            <Link to="/edu/">{`ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`}</Link>
          </div>
          <div className="list-item">
            <Link to="/blog/">{`БЛОГ`}</Link>
          </div>
          <div className="list-item">
            <Link to="/family/">{`ATOM FAMILY`}</Link>
          </div>
          <div className="list-item">
            <Link to="/store/">{`ATOM STORE`}</Link>
          </div>
          <div className="list-item">
            <Link to="/contacts/">{`КОНТАКТЫ`}</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default RightSidebar;
