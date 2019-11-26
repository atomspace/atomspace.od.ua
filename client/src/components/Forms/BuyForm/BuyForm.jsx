import React, { useState, useEffect, useContext } from 'react';
import cl from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import { MEDIA_URL } from '../../../utils/config';
import { validateUser } from '../utils/validation';
import { ImageLoader } from '../../ImageLoader';
import { Button } from '../../Button/Button';
import { createRequestForMerch } from '../../../api/merch';
import Confirm from '../../ConfirmMessage/Confirm';
import withHandleUser from '../../../hoc/withHandleUser';
import MyContext from '../../../context/Base/AppContext';
import FormRegister from './FormRegister';
import { prepareData } from '../utils/data';

const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';

const BuyForm = ({
  getBack,
  order,
  user,
  setUser,
  handleInputUser,
  inputData,
}) => {
  const { t } = useTranslation();

  const {
    setLightTheme,
    setHiddenSidebars,
    isLightTheme,
    hiddenSidebars,
  } = useContext(MyContext);

  useEffect(() => {
    setLightTheme(true);
    setHiddenSidebars(true);
    return () => {
      setLightTheme(false);
      setHiddenSidebars(false);
    };
  }, [isLightTheme, hiddenSidebars]);

  const confirmMessage = (
    <Trans i18nKey="form.mentorConfirmText">
      <p />
      <p />
    </Trans>
  );

  const [isLoading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);

  const createOrder = async () => {
    const { stateUser, isDisabled } = validateUser(user, inputData);
    setUser(stateUser);
    const data = {
      ...prepareData(user),
      merchSize: order.size,
      merchId: order.id,
      isGetFromAtom: false,
    };
    if (!isDisabled) {
      try {
        setLoading(true);
        await createRequestForMerch(data);
        setSended(true);
        setTimeout(() => {
          window.location = way4payLink;
        }, 2000);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        getBack();
      }
    }
  };

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
        <div className={cl('order-items', { confirm: sended })}>
          {sended ? (
            <Confirm confirmMessage={confirmMessage} />
          ) : (
            <>
              <h1 className="order-items__header">{t('form.detailOrder')}</h1>
              <h2 className="additional-header">{t('form.detailOrder2')}</h2>
              <div className="order-form">
                <FormRegister
                  inputData={inputData}
                  user={user}
                  handleInputUser={handleInputUser}
                />
              </div>
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
