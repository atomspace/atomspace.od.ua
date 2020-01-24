import React from "react";
import { bool, string, func } from "prop-types";
import cn from "classnames";
import Button from "../../Button/Button";

const NavButton = ({ title, isBack, changeStep }) => (
  <Button className={cn("button-step-change", isBack ? "left" : "right")} onClick={changeStep}>
    {title}
  </Button>
);

NavButton.propTypes = {
  title: string.isRequired,
  isBack: bool,
  changeStep: func.isRequired,
};
NavButton.defaultProps = {
  isBack: false,
};
export default NavButton;
