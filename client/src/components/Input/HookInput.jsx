import React from "react";
import cn from "classnames";
import { string } from "prop-types";

const HookInput = ({ error, className, hint, ...props }) => {
  return (
    <>
      <input {...props} className={cn(className, { error })} />
      {hint && <p className="hint">{hint}</p>}
    </>
  );
};

HookInput.propTypes = {
  hint: string,
  className: string,
  error: string,
  placeholder: string,
};

export default HookInput;
