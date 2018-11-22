import React from "react";
import { Link } from "react-router-dom";

class LeftSidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar__left">
        <div className="flex flex-col flex-acen">
          <Link
            className="list-item"
            to="/mentor/form/"
          >{`СТАТЬ МЕНТОРОМ`}</Link>
          <Link
            className="list-item"
            to="/resident/form/"
          >{`СТАТЬ РЕЗИДЕНТОМ`}</Link>
        </div>
      </nav>
    );
  }
}

export default LeftSidebar;
