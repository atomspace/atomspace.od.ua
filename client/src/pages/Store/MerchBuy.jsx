import React from 'react';
import { useTranslation } from 'react-i18next';

const MerchBuy = ({ cost, handleDialog }) => {
  const { t } = useTranslation();
  return (
    <div className="list-item">
      <a className="merch-buy-link" href="#buyForm" onClick={handleDialog}>
        {`${t('form.buy')}: ${cost} UAH`}
      </a>
    </div>
  );
};

export default MerchBuy;
