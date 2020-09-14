import React from "react";
import { number, func } from "prop-types";
import { useTranslation } from "react-i18next";

const MerchBuy = ({ cost = 0, handleDialog }) => {
  const { t } = useTranslation();

  return (
    <div className="list-item buy-container">
      <div className="buy-block">
        <a className="btn btn-support btn-request merch-buy-link" href="#buyForm" onClick={handleDialog}>
          {`${t("form.buy")}: ${cost} UAH`}
        </a>
      </div>
    </div>
  );
};

MerchBuy.propTypes = {
  handleDialog: func.isRequired,
  cost: number,
};

export default MerchBuy;
