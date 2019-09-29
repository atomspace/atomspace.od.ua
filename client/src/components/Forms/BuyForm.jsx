import React, { useState } from 'react';
import cl from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import { MEDIA_URL } from '../../utils/config';
import { validateUser } from './utils/validation';
import { ImageLoader } from '../ImageLoader';
import { Button } from '../Button/Button';
import { createRequestForMerch } from '../../api/merch';
import Toggle from '../Toggle/index';
import Confirm from '../ConfirmMessage/Confirm';
import withHandleUser from '../../hoc/withHandleUser';

const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';

const BuyForm = props => {
  const { getBack, order } = props;
  const {
    order: { size, id },
    user,
    inputData,
    handleInputUser,
  } = props;
  const { t } = useTranslation();

  const confirmMessage = (
    <Trans i18nKey="form.mentorConfirmText">
      <p>Спасибо что сделали заказ! Мы с вами свяжемся в ближайшее</p>
      <p>время!</p>
    </Trans>
  );

  const [isLoading, setLoading] = useState(false);
  const [isConfirmMessage, setIsConfirmMessage] = useState(false);

  const prepareData = users =>
    Object.keys(users).reduce(
      (acc, key) => ({ ...acc, [key]: users[key].value }),
      {},
    );

  const createOrder = async () => {
    const { stateUser, isDisabled } = validateUser(user, inputData);
    setUser(stateUser);
    const data = {
      ...prepareData(user),
      merchSize: size,
      merchId: id,
      isGetFromAtom: false,
    };
    if (!isDisabled) {
      try {
        setLoading(true);
        await createRequestForMerch(data);
        setIsConfirmMessage(true);
        window.location = way4payLink;
        setLoading(false);
      } catch (e) {
        setLoading(false);
        getBack();
      }
    }
  };

  const renderFormRegister = () => (
    <>
      {inputData.map(data => (
        <div className={`${data.id}-block`} key={data.id}>
          <input
            className={cl({
              error: user[data.id].error,
              'atom-toggle__hide': data.type === 'checkbox',
            })}
            id={data.id}
            type={data.type}
            placeholder={data.placeholder}
            value={user[data.id].value}
            onChange={handleInputUser.bind(this, data.validate)}
            onBlur={handleInputUser.bind(this, data.validate)}
          />
        </div>
      ))}
      <Toggle value={t('form.toggle')} />
    </>
  );

  return (
    <div className="buy-form-container">
      <div className="main-header">
        <p>{t('form.createOrder')}</p>
      </div>
      <div className="close-dialog-btn" onClick={getBack} />
      <div className="nav_toggle arrow" onClick={getBack} />
      <div className="show-block">
        <div className="merch-photo">
          <ImageLoader
            alt="merch"
            className="image"
            src={`${MEDIA_URL}${order.avatar_url}`}
          />
        </div>
        <div className="text-info">
          <div className="text-info__choice">{t('form.yourChoice')}</div>
          <div className="text-info__name">{order.name}</div>
          <div className="text-info__size">
            <span className="bold">{`${t('form.size')}: `}</span>
            {order.size}
          </div>
        </div>
      </div>
      <div className="order-block">
        <div className={cl('order-items', { confirm: isConfirmMessage })}>
          {isConfirmMessage ? (
            <Confirm confirmMessage={confirmMessage} />
          ) : (
            <>
              <h1 className="order-items__header">{t('form.detailOrder')}</h1>
              <h2 className="additional-header">{t('form.detailOrder2')}</h2>
              <div className="order-form">{renderFormRegister()}</div>
              <div className="order-request">
                <h3 className="price-info">{`₴ ${order.cost}`}</h3>
                <Button
                  className="btn btn-support btn-request pay-button"
                  loading={isLoading}
                  onClick={createOrder}
                >
                  {t('form.buy')}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withHandleUser(BuyForm);
