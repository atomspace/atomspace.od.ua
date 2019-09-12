import React, { setState } from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { MEDIA_URL } from '../../utils/config';
import validators from '../../utils/validators';
import { ImageLoader } from '../ImageLoader';
import { Button } from '../Button/Button';
import { createRequestForMerch } from '../../api/merch';
import Toggle from '../Toggle/index';
import { setUserState } from './setUser';

const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';

export const BuyForm = ({ getBack, order }) => {
  const { t } = useTranslation();

  const inputData = [
    {
      id: 'fullName',
      placeholder: t('form.placeholders.fullName'),
      type: 'text',
    },
    {
      id: 'phone',
      placeholder: t('form.placeholders.phone'),
      type: 'number',
      validate: validators.phone,
    },
    {
      id: 'city',
      placeholder: t('form.placeholders.city'),
      type: 'text',
    },
    {
      id: 'npMail',
      placeholder: t('form.placeholders.npMail'),
      type: 'text',
    },
  ];
  const getUserByProps = () => inputData.reduce((acc, val) => ({ ...acc, [val.id]: { value: '', error: false } }), {});

  const [user, setUser, isUserDisabled] = setUserState(getUserByProps());
  const [, setDisabled] = setState(true);
  const [, setLoading] = setState(true);

  const prepareData = (val) => Object.keys(val).reduce((acc, key) => ({ ...acc, [key]: val[key].value }), {});

  const createOrder = async () => {
    setLoading(true);
    // const { stateUser, isDisabled } = validateUser(user, inputData);
    setUser(user);
    setDisabled(isDisabled);
    const data = {
      ...prepareData(user),
      merchSize: order.size,
      merchId: order.id,
      isGetFromAtom: false,
    };
    if (!isUserDisabled) {
      try {
        setLoading(true);
        await createRequestForMerch(data);
        window.location = way4payLink;
        setLoading(false);
      } catch (e) {
        setLoading(false);
        getBack();
      }
    }
  };

  const handleInputUser = (validate, event) => {
    const {
      target: { id: targetId, type },
    } = event;
    const value = type === 'checkbox' ? event.target.checked : event.target.value;
    const error = type === 'checkbox' ? false : !value.length || (validate && !validate(value));
    setUser({
      [targetId]: {
        ...user[targetId],
        error,
        value,
      },
    });
    setDisabled(error);
  };

  const renderFormRegister = () => (
    <>
      {inputData.map((data) => (
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

  const mainHeader = t('form.detailOrder');
  const additionalHeader = t('form.detailOrder2');

  return (
    <div className="buy-form-container">
      <div className="main-header">
        <p>{t('from.createOrder')}</p>
      </div>
      <div className="close-dialog-btn" onClick={getBack} />
      <div className="nav_toggle arrow" onClick={getBack} />
      <div className="show-block">
        <div className="merch-photo">
          <ImageLoader alt="merch" className="image" src={`${MEDIA_URL}${order.avatar_url}`} />
        </div>
        <div className="text-info">
          <div className="text-info__choice">{t('form.yourChoice')}</div>
          <div className="text-info__name">{order.name}</div>
          <div className="text-info__size">
            <span className="bold">{`${t('form.size')}:`}</span>
            {order.size}
          </div>
        </div>
      </div>

      <div className="order-block">
        <div className="order-items">
          <h1 className="order-items__header">{mainHeader}</h1>
          <h2 className="additional-header">{additionalHeader}</h2>
          <div className="order-form">{renderFormRegister()}</div>
          <div className="order-request">
            <h3 className="price-info">{`₴ ${order.cost}`}</h3>
            <Button className="btn btn-support btn-request pay-button" loading={isLoading} onClick={createOrder}>
              {t('form.buy')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
