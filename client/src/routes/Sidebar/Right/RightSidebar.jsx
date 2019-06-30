import React, { Component } from "react";
import classname from "classnames";

class RightSidebar extends Component {
  render() {
    const { pageName } = this.props;
    let classes = ["sidebar__right"];
    switch (pageName) {
      case "about":
      case "blog":
      case "edu":
      case "store":
      case "contacts":
        classes.push("light_theme");
        break;
      default:
        break;
    }
    return (
      <div className="vertical-line right">
        <nav className={classes.join(" ")}>
          <div className="atom-logo" />
          <div className="flex flex-col">
            {this.props.links.map((link, index) => {
              const isSelected = link.href === "#" + pageName;
              return (
                <div className={
                  classname({list: true, selected: isSelected})
                  } key={index}>
                  <div className={"dot"}/>
                  <a className={"list-item"}  href={link.href}>
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
