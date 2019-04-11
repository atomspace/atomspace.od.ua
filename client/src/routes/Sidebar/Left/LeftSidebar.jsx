import React from "react";
import Soc from "../../../components/Soc";
import { urls } from "../../../App";
import MerchSize from "../../../pages/Store/MerchSize";
import MerchBuy from "../../../pages/Store/MerchBuy";
import ContactInfo from "../../../pages/Contacts/ContactInfo";

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
      case urls[6]:
        return [
          {
            title: <ContactInfo />
          }
        ];
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
      case "blog":
      case "store":
      case "family":
      case "resident":
      case "mentor":
        classes.push("light_theme");
        break;
      default:
        break;
    }

    return (
      <div className={sidebarClasses.join(" ")}>
        <nav className={classes.join(" ")}>
          <div className="flex flex-col">
            {sidebarRows.map((row, index) => {
              let rowElement;
              if (React.isValidElement(row.title)) {
                rowElement = (
                  <div className="list" key={index}>
                    <div>{row.title}</div>
                  </div>
                );
              } else {
                if (row.link) {
                  rowElement = (
                    <div className="list" key={index}>
                      <div className={"dot"} />
                      <a
                        className="list-item form"
                        href={row.link}
                        onClick={this.props.handleDialog}
                      >
                        {row.title.toUpperCase()}
                      </a>
                    </div>
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
