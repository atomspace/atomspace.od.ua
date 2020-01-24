import React from "react";
import cn from "classnames";
import { string, bool } from "prop-types";

const Icon = ({ name, url, target, link }) => {
  if (link) {
    if (target === "_blank") {
      return (
        <a className={cn("icon", { [name]: true })} href={url} target="_blank" rel="noopener noreferrer">
          &nbsp;
        </a>
      );
    }
    return (
      <a className={cn("icon", { [name]: true })} href={url}>
        &nbsp;
      </a>
    );
  }
  return <div className={cn("icon", { [name]: true })}>&nbsp; </div>;
};

Icon.propTypes = {
  name: string.isRequired,
  target: string,
  url: string,
  link: bool,
};

Icon.defaultProps = {
  target: "_self",
  url: "#",
  link: true,
};
export default Icon;
