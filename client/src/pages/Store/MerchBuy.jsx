import React from 'react';
import { useTranslation } from 'react-i18next';

const MerchBuy = ({ cost, handleDialog }) => {
  const { t } = useTranslation();
  return (
    <div className="list-item buy-container">
      <div className="buy-block">
        <a
          className="btn btn-support btn-request merch-buy-link"
          href="#buyForm"
          onClick={handleDialog}
        >
          {`${t('form.buy')}: ${cost} UAH`}
        </a>
      </div>
    </div>
  );
};

export default MerchBuy;
