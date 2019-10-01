import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

const MerchBuy = ({ cost, handleDialog }) => {
  const { t } = useTranslation();
  return (
    <div className="list-item buy-container">
      <div className="buy-block">
        <Button
          className="btn btn-support btn-request merch-buy-link"
          href="#buyForm"
          onClick={handleDialog}
        >
          {`${t('form.buy')}: ${cost} UAH`}
        </Button>
      </div>
    </div>
  );
};

export default MerchBuy;
