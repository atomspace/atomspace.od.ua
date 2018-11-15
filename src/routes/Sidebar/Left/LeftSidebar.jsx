import React from "react";
import {Link} from 'react-router-dom';

class LeftSidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar__left">
        <div className="flex flex-col flex-acen">
          <div className="list-item">
            <Link to="/mentor/form/">{`СТАТЬ МЕНТОРОМ`}</Link>
          </div>
          <div className="list-item">
            <Link to="/resident/form/">{`СТАТЬ РЕЗИДЕНТОМ`}</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default LeftSidebar;
