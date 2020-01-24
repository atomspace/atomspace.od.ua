import React from "react";
import cl from "classnames";
import { string, arrayOf, shape } from "prop-types";
import AtomLogoLight from "../../../assets/images/icons/logos/AtomSpace-logo.svg";
import AtomLogoDark from "../../../assets/images/icons/logos/AtomSpace-logo-dark.svg";
import { ImageLoader } from "../../../components/ImageLoader";

export const RightSidebar = ({ pageName, links }) => {
  const lightPages = ["about", "blog", "edu", "store", "contacts"];
  const isLight = lightPages.includes(pageName);
  return (
    <div className="vertical-line right">
      <nav className={cl("sidebar__right", { light_theme: isLight })}>
        <ImageLoader src={isLight ? AtomLogoDark : AtomLogoLight} className="atom-logo" />
        <div className="flex flex-col">
          {links.map((link) => {
            const isSelected = link.href === `#${pageName}`;
            return (
              <div className={cl({ list: true, selected: isSelected })} key={link.href}>
                <div className="dot" />
                <a className="list-item" target={link.target} href={link.href}>
                  {link.text}
                </a>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

RightSidebar.propTypes = {
  pageName: string.isRequired,
  links: arrayOf(
    shape({
      href: string,
      target: string,
      text: string,
    }),
  ).isRequired,
};

export default RightSidebar;
