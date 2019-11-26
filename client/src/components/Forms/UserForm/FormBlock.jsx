import React from 'react';

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

export default FormBlock;
