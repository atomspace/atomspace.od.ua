import React from "react";
import { string, node } from "prop-types";

const FormBlock = ({ headerText, mainText }) => {
  return (
    <div className="form-blocks flex flex-cen">
      <div className="form-maintext-block">
        <div className="form-maintext-block__header">{headerText}</div>
        <div className="form-maintext-block__text">{mainText}</div>
      </div>
    </div>
  );
};

FormBlock.propTypes = {
  headerText: string.isRequired,
  mainText: node,
};
FormBlock.defaultProps = {
  mainText: null,
};
export default FormBlock;
