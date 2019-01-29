import React from "react";
import { Link } from "react-router-dom";
import Soc from "../../../components/Soc";
class LeftSidebar extends React.Component {
  render() {
    const { sidebarRows, pageName } = this.props;
    console.log(sidebarRows);
    const sidebarClasses = ["sidebar__left"];
    if (!sidebarRows.length) {
      sidebarClasses.push("border-none");
    }
    switch (pageName) {
      case "about":
      case "edu":
      case "blog":
      case "store":
      case "contacts":
        sidebarClasses.push("light_theme");
        break;
      default:
        break;
    }
    return (
      <nav className={sidebarClasses.join('')}>
        <div className="flex flex-col flex-acen">
          {sidebarRows.map((row, index) => {
            let rowElement = (
              <span key={index} className="list-item">
                {row.title.toUpperCase()}
              </span>
            );
            if (row.link) {
              rowElement = (
                <Link key={index} className="list-item" to={row.link}>
                  {row.title.toUpperCase()}
                </Link>
              );
            }
            return rowElement;
          })}
        </div>
        <Soc
          src={{
            facebook: "https://www.facebook.com/atomspace.od.ua/",
            instagram: "https://www.instagram.com/atomspace.od/"
          }}
          classes={"flex soc-icons"}
        />
      </nav>
    );
  }
}

export default LeftSidebar;
