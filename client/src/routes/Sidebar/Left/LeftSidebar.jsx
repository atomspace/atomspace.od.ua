import React from "react";
import Soc from "../../../components/Soc";
import { urls } from "../../../App";
import MerchSize from "../../../pages/Store/MerchSize";
import MerchBuy from "../../../pages/Store/MerchBuy";
import ContactInfo from "../../../pages/Contacts/ContactInfo";
import Link from "../Link";
import * as classnames from "classnames";
class LeftSidebar extends React.Component {
  getLeftSidebarData() {
    switch (this.props.pageName) {
      case urls[0]:
        return [
          <Link
            handleDialog={this.props.handleDialog}
            row={{
              title: "Стать ментором",
              link: "#mentorForm"
            }}
          />,
          <Link
            handleDialog={this.props.handleDialog}
            row={{
              title: "Стать резидентом",
              link: "#residentForm"
            }}
          />
        ];
      case urls[5]:
        return [
          <MerchSize changeMerchAttr={this.props.changeMerchAttr} />,
          <MerchBuy order={this.props.order} />
        ];
      case urls[6]:
        return [<ContactInfo />];
      default:
        return [];
    }
  }
  render() {
    const { pageName } = this.props;
    const sidebarRows = this.getLeftSidebarData();

    const sidebarClasses = classnames("vertical-line left", {
      "border-none": !sidebarRows.length
    });

    const classes = ["sidebar__left"];
    switch (pageName) {
      case "about":
      case "edu":
      case "blog":
      case "store":
      case "resident":
      case "mentor":
        classes.push("light_theme");
        break;
      default:
        break;
    }

    return (
      <div className={sidebarClasses}>
        <nav className={classes.join(" ")}>
          <div className="flex flex-col">
            {sidebarRows.map((el, index) => 
              <div className="list" key={index}>
                {el}
              </div>
            )}
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
