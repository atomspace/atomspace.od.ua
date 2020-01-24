import React, { useEffect, useState } from "react";
import cl from "classnames";
import { useTranslation } from "react-i18next";
import { func, string } from "prop-types";

const MerchSize = ({ changeMerchAttr, defaultSize }) => {
  const sizes = [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }];

  const [size, setSize] = useState(defaultSize || "M");
  const { t } = useTranslation();

  useEffect(() => {
    setSize(size);
    changeMerchAttr({ size });
  }, [size]);

  const changeMerch = (e, cSize) => {
    setSize(cSize);
    changeMerchAttr({ size: cSize });
  };

  return (
    <div className="list-item size-container">
      <div className="size-block">
        <span className="main-header flex flex-acen">{t("size")}</span>
        <div className="size-list flex flex-acen">
          {sizes.map((val) => (
            <span
              role="presentation"
              key={val.size}
              className={cl("size-item", { selected: val.size === size })}
              onClick={(el) => changeMerch(el, val.size)}
            >
              {val.size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

MerchSize.propTypes = {
  changeMerchAttr: func.isRequired,
  defaultSize: string,
};
MerchSize.defaultProps = {
  defaultSize: "M",
};

export default MerchSize;
