import React from 'react';
import cl from 'classnames';
import { withTranslation } from 'react-i18next';
import { MEDIA_URL } from '../../utils/config';
import { validateUser } from './utils/validation';
import validators from '../../utils/validators';
import { ImageLoader } from '../ImageLoader';
import { Button } from '../Button/Button';
import { createRequestForMerch } from '../../api/merch';
import Toggle from '../Toggle/index';

const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';

class BuyForm extends React.Component {
  constructor(props) {
    super(props);

    const { t } = props;
    this.inputData = [
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
    this.state = {
      user: this.getUserByProps(),
      isDisabled: true,
      isLoading: false,
    };
  }

  getUserByProps() {
    return this.inputData.reduce(
      (acc, val) => ({ ...acc, [val.id]: { value: '', error: false } }),
      {},
    );
  }

  prepareData = user =>
    Object.keys(user).reduce(
      (acc, key) => ({ ...acc, [key]: user[key].value }),
      {},
    );

  createOrder = async () => {
    this.setState({ loading: true });
    const { user } = this.state;
    const {
      getBack,
      order: { size, id },
    } = this.props;
    const { stateUser, isDisabled } = validateUser(user, this.inputData);
    this.setState(state => ({
      ...state,
      ...stateUser,
    }));
    const data = {
      ...this.prepareData(user),
      merchSize: size,
      merchId: id,
      isGetFromAtom: false,
    };
    if (!isDisabled) {
      try {
        this.setState({ isLoading: true });
        await createRequestForMerch(data);
        window.location = way4payLink;
        this.setState({ isLoading: false });
      } catch (e) {
        this.setState({ isLoading: false });
        getBack();
      }
    }
  };

  handleInputUser = (validate, event) => {
    const {
      target: { id, type },
    } = event;
    const value =
      type === 'checkbox' ? event.target.checked : event.target.value;
    const error =
      type === 'checkbox'
        ? false
        : !value.length || (validate && !validate(value));
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        [id]: {
          ...state.user[id],
          error,
          value,
        },
      },
      isDisabled: error,
    }));
  };

  renderFormRegister = () => {
    const { user } = this.state;
    const { t } = this.props;
    return (
      <>
        {this.inputData.map(data => (
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
              onChange={this.handleInputUser.bind(this, data.validate)}
              onBlur={this.handleInputUser.bind(this, data.validate)}
            />
          </div>
        ))}
        <Toggle value={t('form.toggle')} />
      </>
    );
  };

  render() {
    const { getBack, order, t } = this.props;
    const { isLoading } = this.state;
    const mainHeader = t('form.detailOrder');
    const additionalHeader = t('form.detailOrder2');

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
              <span className="bold">{`${t('form.size')}:`}</span>
              {order.size}
            </div>
          </div>
        </div>
        <div className="order-block">
          <div className="order-items">
            <h1 className="order-items__header">{mainHeader}</h1>
            <h2 className="additional-header">{additionalHeader}</h2>
            <div className="order-form">{this.renderFormRegister()}</div>
            <div className="order-request">
              <h3 className="price-info">{`₴ ${order.cost}`}</h3>
              <Button
                className="btn btn-support btn-request pay-button"
                loading={isLoading}
                onClick={this.createOrder}
              >
                {t('form.buy')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(BuyForm);
