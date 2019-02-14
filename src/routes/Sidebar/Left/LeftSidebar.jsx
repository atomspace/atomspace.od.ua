import React from "react";
import Soc from "../../../components/Soc";
import { urls } from "../../../App";
import MerchSize from "../../../pages/Store/MerchSize";
import MerchBuy from "../../../pages/Store/MerchBuy";

class LeftSidebar extends React.Component {
  getLeftSidebarData() {
    switch (this.props.pageName) {
      case urls[0]:
        return [
          {
            title: "Стать ментором",
            link: "#mentorForm"
          },
          {
            title: "Стать резидентом",
            link: "#residentForm"
          }
        ];
      case urls[5]:
        return [
          {
            title: <MerchSize changeMerchAttr={this.props.changeMerchAttr} />
          },
          {
            title: <MerchBuy order={this.props.order} />
          }
        ];
        break;
      case urls[6]:
        return [
          {
            title: "+380 73 139 57 87"
          },
          {
            title: "info@atomspace.od.ua"
          },
          {
            title: "г. Одесса, Обсерваторный переулок, 2/6"
          }
        ];
        break;
      default:
        return [];
    }
  }
  render() {
    const { pageName } = this.props;
    const classes = ["sidebar__left"];
    const sidebarRows = this.getLeftSidebarData();

    const sidebarClasses = ["vertical-line left"];
    if (!sidebarRows.length) {
      sidebarClasses.push("border-none");
    }

    switch (pageName) {
      case "about":
      case "edu":
      case "store":
      case "family":
        classes.push("light_theme");
        break;
      default:
        break;
    }

    return (
      <div className={sidebarClasses.join(" ")}>
        <nav className={classes.join(" ")}>
          <div className="flex flex-col flex-acen">
            {sidebarRows.map((row, index) => {
              let rowElement;
              if (React.isValidElement(row.title)) {
                rowElement = <div key={index}>{row.title}</div>;
              } else {
                rowElement = (
                  <span key={index} className="list-item">
                    {row.title.toUpperCase()}
                  </span>
                );
                if (row.link) {
                  rowElement = (
                    <a key={index} className="list-item" href={row.link}>
                      {row.title.toUpperCase()}
                    </a>
                  );
                }
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
      </div>
    );
  }
}

export default LeftSidebar;
