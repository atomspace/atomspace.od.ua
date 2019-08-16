import React from 'react';
import classname from 'classnames';
import { MEDIA_URL } from '../../utils/config';
import { validateUser } from './utils/validation';
import validators from '../../utils/validators';
import { ImageLoader } from '../ImageLoader';
import { Button } from '../Button/Button';
import { createRequestForMerch } from '../../api/merch';

const mainHeader = 'ДЕТАЛИ ЗАКАЗА';
const additionalHeader = 'Чтоб мы могли вам отправить футболку, заполните поля ниже.';
const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';
const inputData = [
  {
    id: 'fullName',
    placeholder: 'Имя:',
    type: 'text',
  },
  {
    id: 'phone',
    placeholder: 'Телефон: (ex. 0635522111)',
    type: 'number',
    validate: validators.phone,
  },
  {
    id: 'city',
    placeholder: 'Город:',
    type: 'text',
  },
  {
    id: 'npMail',
    placeholder: 'Отделение новой почты:',
    type: 'text',
  },
];
export default class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.getUserByProps(inputData),
      isDisabled: true,
      isLoading: false,
    };
  }

  getUserByProps(data) {
    return data.reduce((acc, data) => ({ ...acc, [data.id]: { value: '', error: false } }), {});
  }
  prepareData = (user) => Object.keys(user).reduce((acc, key) => ({ ...acc, [key]: user[key].value }), {});

  createOrder = async () => {
    this.setState({ loading: true });
    const { user } = this.state;
    const { getBack, createOrder } = this.props;
    const { stateUser, isDisabled } = validateUser(user, inputData);
    this.setState({
      ...this.state,
      ...stateUser,
    });
    const data = this.prepareData(user);
    if (!isDisabled) {
      try {
        this.setState({ isLoading: true });

        await createRequestForMerch(data);
        window.location = way4payLink;
        // this.setState({ isLoading: false });
        // this.props.getBack();
      } catch (e) {
        this.setState({ isLoading: false });
        // this.props.getBack();
      }
    }
  };

  handleInputUser = (validate, event) => {
    const name = event.target.id;
    const { value } = event.target;
    const error = !value.length || (validate && !validate(value));
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: {
          ...this.state.user[name],
          error,
          value,
        },
      },
      isDisabled: error,
    });
  };

  renderFormRegister = () =>
    inputData.map((data, index) => (
      <div className={`${data.id}-block`} key={index}>
        <input
          className={classname({ error: this.state.user[data.id].error })}
          id={data.id}
          type={data.type}
          placeholder={data.placeholder}
          value={this.state.user[data.id].value}
          onChange={this.handleInputUser.bind(this, data.validate)}
          onBlur={this.handleInputUser.bind(this, data.validate)}
        />
      </div>
    ));

  render() {
    return (
      <div className="buy-form-container">
        <div className="main-header">
          <p>Оформить покупку</p>
        </div>
        <div className="close-dialog-btn" onClick={this.props.getBack} />
        <div className="nav_toggle cross" onClick={this.props.getBack} />
        <div className="show-block">
          <div className="merch-photo">
            <ImageLoader alt="merch" className="image" src={`${MEDIA_URL}${this.props.order.avatar_url}`} />
          </div>
          <div className="text-info">
            <div className="text-info__choice">Ваш выбор:</div>
            <div className="text-info__name">{this.props.order.name}</div>
            <div className="text-info__size">
              <span className="bold">Размер: </span>
              {this.props.order.size}
            </div>
          </div>
        </div>

        <div className="order-block">
          <div className="order-items">
            <h1 className="order-items__header">{mainHeader}</h1>
            <h2 className="additional-header">{additionalHeader}</h2>
            <div className="order-form">{this.renderFormRegister()}</div>
            <div className="order-request">
              <h3 className="price-info">{`₴ ${this.props.order.price}`}</h3>
              <Button
                className="btn btn-support btn-request pay-button"
                loading={this.state.isLoading}
                onClick={this.createOrder}
              >
                {'Оплатить'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
